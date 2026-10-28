import { createContext, useCallback, useContext, useMemo, useState } from "react";
import {
  seedAbout,
  seedApproach,
  seedCompany,
  seedGallery,
  seedHome,
  seedIndustries,
  seedJobs,
  seedServices,
  seedSettings,
} from "@/data/seed";
import { KEYS, readStore, removeStore, writeStore } from "@/lib/storage";

function initialData() {
  return {
    company: readStore(KEYS.company, seedCompany),
    home: readStore(KEYS.home, seedHome),
    about: readStore(KEYS.about, seedAbout),
    approach: readStore(KEYS.approach, seedApproach),
    services: readStore(KEYS.services, seedServices),
    industries: readStore(KEYS.industries, seedIndustries),
    gallery: readStore(KEYS.gallery, seedGallery),
    jobs: readStore(KEYS.jobs, seedJobs),
    enquiries: readStore(KEYS.enquiries, []),
    workforce: readStore(KEYS.workforce, []),
    applications: readStore(KEYS.applications, []),
    settings: readStore(KEYS.settings, seedSettings),
  };
}

const SiteDataContext = createContext(null);

export function SiteDataProvider({ children }) {
  const [data, setData] = useState(initialData);

  const update = useCallback((key, value) => {
    writeStore(KEYS[key], value);
    setData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const patch = useCallback((key, partial) => {
    setData((prev) => {
      const next = { ...prev[key], ...partial };
      writeStore(KEYS[key], next);
      return { ...prev, [key]: next };
    });
  }, []);

  const addItem = useCallback((key, item) => {
    setData((prev) => {
      const next = [...prev[key], item];
      writeStore(KEYS[key], next);
      return { ...prev, [key]: next };
    });
  }, []);

  const updateItem = useCallback((key, id, partial) => {
    setData((prev) => {
      const next = prev[key].map((item) => (item.id === id ? { ...item, ...partial } : item));
      writeStore(KEYS[key], next);
      return { ...prev, [key]: next };
    });
  }, []);

  const deleteItem = useCallback((key, id) => {
    setData((prev) => {
      const next = prev[key].filter((item) => item.id !== id);
      writeStore(KEYS[key], next);
      return { ...prev, [key]: next };
    });
  }, []);

  const moveItem = useCallback((key, id, dir) => {
    setData((prev) => {
      const list = [...prev[key]];
      const idx = list.findIndex((item) => item.id === id);
      const swap = dir === "up" ? idx - 1 : idx + 1;
      if (idx === -1 || swap < 0 || swap >= list.length) return prev;
      [list[idx], list[swap]] = [list[swap], list[idx]];
      writeStore(KEYS[key], list);
      return { ...prev, [key]: list };
    });
  }, []);

  const resetAll = useCallback(() => {
    Object.values(KEYS).forEach(removeStore);
    setData(initialData());
  }, []);

  const value = useMemo(
    () => ({ ...data, update, patch, addItem, updateItem, deleteItem, moveItem, resetAll }),
    [data, update, patch, addItem, updateItem, deleteItem, moveItem, resetAll]
  );

  return <SiteDataContext.Provider value={value}>{children}</SiteDataContext.Provider>;
}

export function useSiteData() {
  return useContext(SiteDataContext);
}
