/** Initial seed content. Used only when the matching localStorage key is empty. */

const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMG = {
  building: "1486406146926-c627a92ad1ab",
  officeInterior: "1497366216548-37526070297c",
  warehouseAisle: "1553413077-190dd305871c",
  warehouseWorker: "1586528116311-ad8dd3c8310d",
  engineerTablet: "1581091226825-a6a2a5aee158",
  industrialPlant: "1565043666747-69f6646db940",
  housekeeping: "1581578731548-c64695cc6952",
  meeting: "1600880292203-757bb62b4baf",
  logistics: "1565891741441-64926e441838",
  warehouseShelves: "1601598851547-4302969d0614",
  businessPark: "1486325212027-8081e485255e",
  retail: "1441986300917-64674bd600d8",
  officeDesk: "1497366811353-6870744d04b2",
  industrialEngineer: "1504328345606-18bbc8c9d7d1",
  team: "1521737604893-d14cc237f11d",
  officePeople: "1560264280-88b68371db39",
  forklift: "1578575437130-527eed3abbec",
  factoryEngineer: "1581092160562-40aa08e78837",
  conference: "1519085360753-af0119f7cbe7",
  siteWork: "1541888946425-d81bb19240f5",
  electrical: "1621905251189-08b45d6a269e",
  labEngineer: "1581094794329-c8112a89af12",
  officeLibrary: "1524578271613-d550eacf6090",
};

export const seedCompany = {
  name: "Teamkraft Facility Services Private Limited",
  shortName: "Teamkraft",
  category: "Facility Management, Workforce Solutions, Staffing & Operational Support",
  shortDescription:
    "Facility support, workforce coordination, staffing and operational assistance for commercial, industrial and logistics operations.",
  fullDescription:
    "Teamkraft Facility Services Private Limited is a Pune-based facility services and workforce solutions company. We support businesses with facility management support, housekeeping and workplace maintenance, workforce supply, recruitment and manpower support, warehouse operations support and operational workforce coordination. Our focus is simple: understand what a client's operations need, plan the right service mix, coordinate dependable people on the ground and keep improving service delivery.",
  address: "Sr. No. 582A2, Durga Hill Society, Katraj, Pune, Maharashtra – 411046, India",
  cin: "U78200PN2026PTC258858",
  directors: "Shubham Dilip Gaikwad, Vallabh Rajguru Shinde",
  phone: "",
  email: "",
  phonePlaceholder: "Phone number to be provided",
  emailPlaceholder: "Email address to be provided",
  serviceArea:
    "Pune, Maharashtra — including Pashan, Hinjewadi, Wakad, Kothrud and Hadapsar",
  footerAbout:
    "Teamkraft supports businesses across Pune with facility management support, housekeeping, workforce supply, staffing and operational coordination.",
  logoUrl: "",
  credit: "Designed and development by SOSynch Ai Tech",
};

export const seedHome = {
  heroHeadline: "Reliable Facility Services. Stronger Workforces.",
  heroSubtitle:
    "Teamkraft provides facility support, workforce coordination, staffing and operational assistance — helping commercial, industrial and logistics operations in Pune run smoothly, every day.",
  heroImage: img(IMG.building, 1600),
  heroBadges: ["Facility Support", "Workforce Solutions", "Operational Assistance"],
  introTitle: "Your Partner in Facility and Workforce Solutions",
  introText:
    "From housekeeping and workplace maintenance to workforce supply, recruitment support and warehouse operations, Teamkraft works alongside businesses to keep their premises well-maintained and their operations adequately staffed. We combine a service-oriented approach with dependable coordination, so managers can focus on their core business.",
  introImage: img(IMG.team, 900),
  servicesHeading: "Services Built Around Your Operations",
  servicesSub:
    "Proposed service categories based on our business focus — every description remains fully editable and can be confirmed with the company before launch.",
  whyTitle: "Why Choose Teamkraft?",
  whyIntro:
    "A service-oriented approach to facility support and workforce management, focused on the industries we know best.",
  whyItems: [
    {
      title: "Workforce Coordination",
      text: "Structured planning and coordination of personnel so shifts, roles and responsibilities stay clear.",
    },
    {
      title: "Operational Flexibility",
      text: "Support that adapts to changing requirements — additional hands during peak periods, scaled to your schedule.",
    },
    {
      title: "Service-Oriented Approach",
      text: "A focus on dependable, day-to-day service delivery rather than one-off transactions.",
    },
    {
      title: "Industry-Focused Support",
      text: "Support shaped for warehousing, manufacturing, commercial offices and retail environments.",
    },
    {
      title: "Reliable Communication",
      text: "Clear, regular communication with clients so expectations and updates are never a surprise.",
    },
    {
      title: "Client-Centric Planning",
      text: "Service plans built around each client's location, timings, workforce needs and operational priorities.",
    },
  ],
  industriesHeading: "Industries We Serve",
  industriesSub:
    "Relevant service categories for the environments our workforce supports across Pune.",
  workforceBanner: {
    image: img(IMG.forklift, 1600),
    headline: "The Right Workforce for Your Operational Needs",
    text: "Warehouse associates, pickers and packers, facility support staff and operations coordination — deployed where your operations need them.",
    ctaText: "Discuss Your Requirements",
  },
  galleryHeading: "A Look at the Environments We Support",
  gallerySub: "Facilities, offices, warehouse operations and industrial workplaces.",
  careersHeading: "Build Your Career with Teamkraft",
  careersText:
    "Opportunities in facility support, warehouse operations and operational coordination. Sample listings shown below are demo vacancies until confirmed by the company.",
  contactCta: {
    headline: "Looking for Reliable Facility and Workforce Support?",
    text: "Share your requirements and our team will respond with a suitable service approach.",
  },
};

export const seedAbout = {
  heroImage: img(IMG.officeInterior, 1600),
  intro:
    "Teamkraft Facility Services Private Limited is a facility services and workforce solutions company based in Pune, Maharashtra. We support commercial, industrial and logistics operations with practical, well-coordinated services — from housekeeping and workplace maintenance to workforce supply and operational coordination.",
  overview: [
    "Registered in Pune, Teamkraft was set up to serve the growing demand for dependable facility support and workforce solutions in one of India's fastest-growing industrial and commercial regions. Our work spans facility management support, housekeeping and workplace maintenance, workforce supply, recruitment and manpower support, warehouse operations support and operational workforce coordination.",
    "We keep our approach straightforward. Every engagement begins with understanding the client's operational needs — the site, the timings, the roles and the standards expected. From there we plan the service mix, coordinate the right people and stay in regular communication so service delivery remains consistent and improving.",
  ],
  mission:
    "To support businesses with dependable facility services and well-coordinated workforces, delivered through clear communication and a service-oriented approach.",
  vision:
    "To be a trusted facility and workforce partner for commercial, industrial and logistics operations across Pune and Maharashtra.",
  values: [
    { title: "Dependability", text: "Consistent service delivery that clients can plan around." },
    { title: "Clear Communication", text: "Open, regular and honest communication with every client." },
    { title: "Practical Solutions", text: "Service plans shaped by real operational needs, not assumptions." },
    { title: "Respect for People", text: "Fair treatment and clear expectations for every worker we coordinate." },
    { title: "Continuous Improvement", text: "Regular review of service delivery and a willingness to improve." },
  ],
  philosophy:
    "Well-maintained premises and adequately staffed operations are the foundation of every productive workplace. We focus on the fundamentals — clear roles, dependable attendance, proper coordination and regular review — so the businesses we support can run without disruption.",
  coordination:
    "Our operational coordination approach keeps responsibilities structured: requirements are documented, service plans are agreed in advance, personnel are briefed before deployment and progress is reviewed at regular intervals with the client.",
  serviceAreaText:
    "We serve businesses across Pune, Maharashtra — including Pashan, Hinjewadi, Wakad, Kothrud and Hadapsar.",
  summary: [
    { label: "Company Name", value: "Teamkraft Facility Services Private Limited" },
    { label: "Business Category", value: "Facility services, workforce management, staffing and operational support" },
    { label: "Registered Office", value: "Sr. No. 582A2, Durga Hill Society, Katraj, Pune, Maharashtra – 411046, India" },
    { label: "CIN", value: "U78200PN2026PTC258858" },
    { label: "Directors / Key Management", value: "Shubham Dilip Gaikwad, Vallabh Rajguru Shinde" },
    { label: "Service Area", value: "Pune, Maharashtra" },
  ],
};

export const seedApproach = {
  heroImage: img(IMG.conference, 1600),
  intro:
    "Every engagement follows a clear, four-step approach — from the first conversation to ongoing review. This keeps expectations aligned and service delivery measurable.",
  steps: [
    {
      no: "01",
      title: "Understand Requirements",
      text: "We begin by understanding the client's operational needs — the site, service expectations, timings, location and workforce requirements.",
      image: img(IMG.meeting, 800),
    },
    {
      no: "02",
      title: "Develop a Service Plan",
      text: "Based on the requirements shared, we prepare a suitable proposed service approach covering roles, responsibilities and schedule.",
      image: img(IMG.officePeople, 800),
    },
    {
      no: "03",
      title: "Coordinate Operations",
      text: "We coordinate the planned staffing or facility support activities and maintain regular communication with the client.",
      image: img(IMG.warehouseWorker, 800),
    },
    {
      no: "04",
      title: "Review and Improve",
      text: "We collect feedback, review service delivery against expectations and identify potential improvements.",
      image: img(IMG.siteWork, 800),
    },
  ],
};

export const seedServices = [
  {
    id: "svc-facility-management-support",
    title: "Facility Management Support",
    category: "Facility Management",
    image: img(IMG.officePeople, 800),
    short:
      "Structured support for the day-to-day running of commercial and industrial premises.",
    overview:
      "Our facility management support covers the coordination needed to keep a workplace running smoothly — supervising routine upkeep, coordinating service activities and maintaining communication with the client's facility team.",
    responsibilities: [
      "Coordinating day-to-day facility support activities",
      "Supervising housekeeping and maintenance routines",
      "Maintaining service records and checklists",
      "Regular reporting and communication with client teams",
    ],
    industries: ["Commercial Offices", "Business Parks", "Industrial Facilities"],
    published: true,
  },
  {
    id: "svc-housekeeping-maintenance",
    title: "Housekeeping and Maintenance Support",
    category: "Housekeeping",
    image: img(IMG.housekeeping, 800),
    short:
      "Trained housekeeping personnel and routine workplace maintenance support.",
    overview:
      "We provide housekeeping support for offices, commercial premises and industrial facilities — covering routine cleaning, upkeep of common areas, washroom maintenance and waste handling, coordinated to the client's schedule.",
    responsibilities: [
      "Routine cleaning of work areas and common spaces",
      "Washroom and pantry upkeep",
      "Waste segregation and disposal coordination",
      "Periodic deep-cleaning coordination",
    ],
    industries: ["Commercial Offices", "Retail and Distribution", "Industrial Facilities"],
    published: true,
  },
  {
    id: "svc-workforce-supply",
    title: "Workforce Supply and Staffing",
    category: "Workforce Solutions",
    image: img(IMG.warehouseShelves, 800),
    short: "Reliable supply of trained personnel for operational roles.",
    overview:
      "We supply personnel for facility, housekeeping, warehouse and operational support roles — matched to the client's requirements and coordinated from deployment onward.",
    responsibilities: [
      "Sourcing and screening candidates for operational roles",
      "Deployment and onboarding coordination",
      "Attendance and shift coordination",
      "Replacement support when requirements change",
    ],
    industries: ["Warehousing and Logistics", "Manufacturing", "Commercial Premises"],
    published: true,
  },
  {
    id: "svc-recruitment-manpower",
    title: "Recruitment and Manpower Support",
    category: "Recruitment",
    image: img(IMG.meeting, 800),
    short: "Recruitment assistance to help fill operational vacancies faster.",
    overview:
      "Our recruitment and manpower support helps businesses identify, screen and shortlist candidates for facility, warehouse and operational positions — reducing the time and effort their own teams spend on hiring.",
    responsibilities: [
      "Role requirement documentation",
      "Candidate sourcing and preliminary screening",
      "Interview coordination and shortlisting",
      "Joining and onboarding follow-up",
    ],
    industries: ["Warehousing and Logistics", "Retail and Distribution", "Commercial Offices"],
    published: true,
  },
  {
    id: "svc-warehouse-operations",
    title: "Warehouse Operations Support",
    category: "Warehouse Operations",
    image: img(IMG.warehouseAisle, 800),
    short: "Workforce and coordination support for warehouse operations.",
    overview:
      "We support warehouse operations with dependable personnel and coordination — covering loading and unloading, material handling assistance, inventory support activities and general warehouse upkeep.",
    responsibilities: [
      "Loading, unloading and material movement support",
      "Inventory handling assistance",
      "Housekeeping of warehouse areas",
      "Shift-wise workforce coordination",
    ],
    industries: ["Warehousing and Logistics", "Manufacturing", "Retail and Distribution"],
    published: true,
  },
  {
    id: "svc-picker-packer",
    title: "Picker and Packer Workforce",
    category: "Warehouse Operations",
    image: img(IMG.logistics, 800),
    short: "Trained pickers and packers for fulfilment and distribution operations.",
    overview:
      "We supply picker and packer personnel for e-commerce fulfilment centres, distribution hubs and retail backrooms — with attention to accuracy, handling care and throughput.",
    responsibilities: [
      "Order picking as per assigned lists",
      "Packing, labelling and staging support",
      "Accuracy and quality-conscious handling",
      "Peak-season workforce scaling",
    ],
    industries: ["Warehousing and Logistics", "Retail and Distribution"],
    published: true,
  },
  {
    id: "svc-industrial-support",
    title: "Industrial and Commercial Facility Support",
    category: "Facility Management",
    image: img(IMG.industrialPlant, 800),
    short: "Facility and housekeeping support for factories and industrial units.",
    overview:
      "Industrial premises need disciplined support — we coordinate housekeeping, upkeep and facility assistance for factories, workshops and production-adjacent areas, aligned to shift schedules.",
    responsibilities: [
      "Shift-aligned housekeeping and upkeep",
      "Production area and passage cleanliness",
      "Support for industrial safety practices",
      "Coordination with plant supervisory teams",
    ],
    industries: ["Manufacturing", "Industrial Facilities", "Warehousing and Logistics"],
    published: true,
  },
  {
    id: "svc-commercial-support",
    title: "Commercial Facility Support",
    category: "Facility Management",
    image: img(IMG.officeDesk, 800),
    short: "Front-of-house and everyday support for commercial workplaces.",
    overview:
      "For offices, business parks and commercial premises we coordinate everyday facility support — housekeeping, pantry assistance, common-area upkeep and general operational support staff.",
    responsibilities: [
      "Common-area and workstation upkeep",
      "Pantry and front-of-house assistance",
      "Event and meeting-room setup support",
      "Visitor-area presentation standards",
    ],
    industries: ["Commercial Offices", "Business Parks", "Retail and Distribution"],
    published: true,
  },
  {
    id: "svc-operational-coordination",
    title: "Operational Workforce Coordination",
    category: "Operational Support",
    image: img(IMG.engineerTablet, 800),
    short: "Coordination and communication for multi-role workforce deployment.",
    overview:
      "For clients running mixed teams across sites, we provide operational workforce coordination — scheduling, attendance oversight, role allocation and a single point of communication for workforce matters.",
    responsibilities: [
      "Shift planning and role allocation",
      "Attendance and deployment oversight",
      "Client communication and reporting",
      "Issue escalation and resolution follow-up",
    ],
    industries: ["Warehousing and Logistics", "Commercial Premises", "Industrial Facilities"],
    published: true,
  },
];

export const seedIndustries = [
  {
    id: "ind-warehousing",
    title: "Logistics and Warehousing",
    image: img(IMG.warehouseAisle, 1000),
    intro:
      "Warehouses and distribution centres depend on steady, well-coordinated manpower — from loading bays to packing lines.",
    requirements: [
      "Warehouse associates and material handling support",
      "Pickers and packers for order fulfilment",
      "Warehouse housekeeping and upkeep",
      "Shift-wise workforce coordination",
    ],
    related: ["Warehouse Operations Support", "Picker and Packer Workforce", "Operational Workforce Coordination"],
  },
  {
    id: "ind-manufacturing",
    title: "Manufacturing and Industrial Operations",
    image: img(IMG.electrical, 1000),
    intro:
      "Factories and industrial units need disciplined, shift-aligned facility and housekeeping support around production areas.",
    requirements: [
      "Shift-aligned housekeeping personnel",
      "Production-area upkeep support",
      "Industrial facility support staff",
      "Coordination with plant supervisory teams",
    ],
    related: ["Industrial and Commercial Facility Support", "Housekeeping and Maintenance Support"],
  },
  {
    id: "ind-offices",
    title: "Commercial Offices",
    image: img(IMG.officeInterior, 1000),
    intro:
      "A clean, well-presented office shapes the everyday experience of employees and visitors alike.",
    requirements: [
      "Office housekeeping and common-area upkeep",
      "Pantry and front-of-house assistance",
      "Meeting and event setup support",
      "Facility management coordination",
    ],
    related: ["Facility Management Support", "Housekeeping and Maintenance Support"],
  },
  {
    id: "ind-retail",
    title: "Retail and Distribution",
    image: img(IMG.retail, 1000),
    intro:
      "Retail stores and distribution backrooms need dependable support staff that can flex with seasonal demand.",
    requirements: [
      "Backroom and stockroom support staff",
      "Picker and packer personnel",
      "Store housekeeping support",
      "Peak-season workforce scaling",
    ],
    related: ["Workforce Supply and Staffing", "Picker and Packer Workforce"],
  },
  {
    id: "ind-business-parks",
    title: "Business Parks and Commercial Premises",
    image: img(IMG.businessPark, 1000),
    intro:
      "Multi-tenant premises require consistent standards across common areas, lobbies and external spaces.",
    requirements: [
      "Common-area housekeeping",
      "Lobby and visitor-area presentation support",
      "Facility support coordination",
      "General operational assistance",
    ],
    related: ["Facility Management Support", "Operational Workforce Coordination"],
  },
  {
    id: "ind-general-facility",
    title: "General Facility Operations",
    image: img(IMG.industrialPlant, 1000),
    intro:
      "Mixed-use and general facilities need a reliable partner for everyday upkeep and workforce support.",
    requirements: [
      "Housekeeping and upkeep personnel",
      "General facility support staff",
      "Workforce supply for varied roles",
      "Operational coordination",
    ],
    related: ["Housekeeping and Maintenance Support", "Workforce Supply and Staffing"],
  },
];

const G = (id, title, description, category) => ({
  id: `gal-${id}`,
  title,
  description,
  category,
  image: img(id, 1000),
  published: true,
});

export const seedGallery = [
  G(IMG.building, "Corporate Premises", "A modern commercial building maintained to a professional standard.", "Commercial Premises"),
  G(IMG.officeInterior, "Office Environment", "A tidy, well-organised office workspace supported by routine housekeeping.", "Office Maintenance"),
  G(IMG.warehouseAisle, "Warehouse Aisles", "Organised warehouse racking kept clear and orderly for daily operations.", "Warehouse Operations"),
  G(IMG.warehouseWorker, "Warehouse Workforce", "Personnel handling day-to-day material movement in a distribution centre.", "Workforce Activities"),
  G(IMG.engineerTablet, "Operational Coordination", "A coordinator reviewing operational details on site.", "Workforce Activities"),
  G(IMG.industrialPlant, "Industrial Facility", "An industrial unit supported with shift-aligned facility services.", "Industrial Facilities"),
  G(IMG.housekeeping, "Workplace Housekeeping", "Housekeeping supplies ready for routine workplace maintenance.", "Facility Management"),
  G(IMG.meeting, "Client Coordination", "Service discussions with a client operations team.", "Workforce Activities"),
  G(IMG.logistics, "Logistics Operations", "Logistics activity at a busy distribution hub.", "Warehouse Operations"),
  G(IMG.warehouseShelves, "Stock and Storage", "Stock arranged in a well-maintained storage facility.", "Warehouse Operations"),
  G(IMG.businessPark, "Business Park", "A business park campus supported with common-area upkeep.", "Commercial Premises"),
  G(IMG.retail, "Retail Backroom", "A retail environment supported with backroom and stockroom staff.", "Commercial Premises"),
  G(IMG.industrialEngineer, "Industrial Support", "Support personnel engaged in industrial facility activities.", "Industrial Facilities"),
  G(IMG.forklift, "Material Handling", "Material handling operations within a large warehouse.", "Warehouse Operations"),
];

export const seedJobs = [
  {
    id: "job-warehouse-associate",
    title: "Warehouse Associate",
    location: "Pune, Maharashtra",
    type: "Full-time",
    category: "Warehouse Operations",
    description:
      "Support daily warehouse activities including material movement, loading and unloading, and stock handling at client sites across Pune.",
    skills: ["Physical fitness", "Basic material handling", "Teamwork", "Willingness to work in shifts"],
    published: true,
    sample: true,
  },
  {
    id: "job-picker-packer",
    title: "Picker / Packer",
    location: "Pune, Maharashtra",
    type: "Full-time",
    category: "Warehouse Operations",
    description:
      "Pick and pack orders accurately in fulfilment and distribution operations, maintaining quality and throughput standards.",
    skills: ["Attention to detail", "Accuracy", "Basic literacy", "Shift flexibility"],
    published: true,
    sample: true,
  },
  {
    id: "job-facility-support",
    title: "Facility Support Staff",
    location: "Pune, Maharashtra",
    type: "Full-time / Part-time",
    category: "Facility Services",
    description:
      "Assist with facility upkeep and housekeeping activities at commercial and industrial premises, following site schedules and standards.",
    skills: ["Housekeeping basics", "Reliability", "Discipline", "Client-site etiquette"],
    published: true,
    sample: true,
  },
  {
    id: "job-operations-support",
    title: "Operations Support Executive",
    location: "Pune, Maharashtra",
    type: "Full-time",
    category: "Operations",
    description:
      "Coordinate workforce deployment, attendance and client communication for facility and staffing engagements.",
    skills: ["Communication", "Coordination", "Basic computer skills", "Reporting"],
    published: true,
    sample: true,
  },
];

export const seedSettings = {
  siteTitle: "Teamkraft Facility Services Private Limited",
  metaDescription:
    "Teamkraft provides facility management support, housekeeping, workforce supply, staffing and operational support services across Pune, Maharashtra.",
  faviconUrl: "",
  footerText:
    "Teamkraft Facility Services Private Limited — facility services, workforce solutions and operational support in Pune, Maharashtra.",
  socials: { linkedin: "", instagram: "", facebook: "" },
  adminUsername: "admin",
  adminPassword: "Teamkraft@123",
};

export const DEMO_NOTICE =
  "This is a frontend demo form. Your details are stored only in this browser (localStorage) and are not sent to the company.";
