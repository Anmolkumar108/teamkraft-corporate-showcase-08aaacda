# Teamkraft Corporate Showcase

https://github.com/Anmolkumar108/teamkraft-corporate-website

copy this repo

initial prompt
# LOVABLE AI MASTER PROMPT — TEAMKRAFT FACILITY SERVICES PRIVATE LIMITED

## 1. Project Overview

Create a premium, modern, professional, fully responsive, dynamic corporate portfolio demo website for **Teamkraft Facility Services Private Limited**, a facility services, workforce management, staffing, and operational support company registered in Pune, Maharashtra, India.

The website must look like a real, professionally designed corporate website created by an experienced web development agency. Avoid generic AI-generated designs, excessive gradients, unnecessary animations, repetitive cards, and overly decorative layouts.

The website must be suitable for presenting to a real business client as a premium portfolio demo.

### Strict Technology Requirements

- Use **React + Vite + Tailwind CSS only**.
- Use JavaScript and JSX, not TypeScript.
- Do not use Next.js.
- Do not use any other framework, component library, CSS framework, icon library, animation library, chart library, or external UI library.
- Do not use a backend, database, Supabase, Firebase, MongoDB, APIs, or authentication services.
- Use realistic mock data stored in organized JavaScript files.
- Use React state and localStorage to demonstrate dynamic content management and persistence in the browser.
- Build custom components, navigation, buttons, icons using inline SVG or CSS, forms, modals, tabs, and dashboard elements using React and Tailwind CSS.
- Keep the code clean, reusable, maintainable, and easy to customize.

This is a **frontend-only functional software demo website**. All forms, dashboard interactions, CRUD operations, content editing, and mock authentication must work on the frontend.

## 2. Company Information

Use the following company information throughout the website.

**Business Name:** Teamkraft Facility Services Private Limited

**Business Category:** Facility Management, Workforce Solutions, Recruitment, Staffing, Operational Support, and Logistics Workforce Services.

**Registered Office:** Sr. No. 582A2, Durga Hill Society, Katraj, Pune, Maharashtra – 411046, India.

**Corporate Identification Number (CIN):** U78200PN2026PTC258858

**Directors / Key Management:** Shubham Dilip Gaikwad and Vallabh Rajguru Shinde.

**Service Area:** Pune, Maharashtra, including Pashan, Hinjewadi, Wakad, Kothrud, and Hadapsar.

**Phone:** Not provided. Use an editable placeholder in the admin panel.

**Email:** Not provided. Use an editable placeholder in the admin panel.

**Client Name:** Not provided.

Never invent a phone number, email address, client testimonial, customer logo, official certification, or verified business achievement. Use clearly identified sample content wherever required.

Allow the administrator to update all company details through the admin panel.

## 3. Brand Identity and Color Palette

Create a trustworthy, professional corporate identity appropriate for facility management and workforce services.

Use these exact brand colors:

- Primary Navy: `#17324D`
- Deep Navy: `#102438`
- Corporate Blue: `#2463A6`
- Professional Teal: `#168C88`
- White: `#FFFFFF`
- Light Background: `#F4F7FA`
- Dark Text: `#243447`
- Muted Text: `#667085`
- Border: `#DCE4EC`
- Success Green: `#198754`

Use navy for the main navigation, headings, footer, and corporate sections. Use blue for primary buttons and links, and teal for selected accents, service indicators, and highlights.

Avoid excessive gradients, bright neon colors, and large numbers of competing accent colors.

Use a clean corporate font stack with modern system fonts. Create generous spacing, consistent alignment, clear visual hierarchy, subtle shadows, and professional rectangular or slightly rounded components.

## 4. Logo and Branding

Create a simple text-based Teamkraft brand treatment if an official logo is unavailable.

- Display the company name prominently in the header.
- Use a clean geometric or professional typography style.
- Provide an editable logo upload or logo URL field in the admin panel.
- If no logo is uploaded, display a simple text logo with a minimal custom SVG symbol.
- Use consistent branding in the header, footer, admin login, dashboard, and browser page title.

Do not invent an official logo and present it as the company's actual logo.

## 5. Website Structure — Separate Pages Required

Create a proper multi-page-feeling website with distinct URLs using React and Vite.

Implement client-side routing using a lightweight custom React navigation solution with the browser History API and `window.location.pathname`. Do not install React Router or any routing library.

Every navigation link must open its correct page. Do not make every navigation link scroll to the same homepage section.

Create these public pages:

1. Home — `/`
2. About Us — `/about`
3. Services — `/services`
4. Our Approach — `/our-approach`
5. Industries We Serve — `/industries`
6. Workforce Solutions — `/workforce-solutions`
7. Gallery — `/gallery`
8. Careers — `/careers`
9. Company Details — `/company-details`
10. Contact Us — `/contact`
11. Privacy Policy — `/privacy-policy`
12. Admin Login — `/admin/login`
13. Admin Dashboard — `/admin/dashboard`

Ensure direct page loading, refresh, browser back/forward navigation, internal links, and Vercel deployment routing work correctly.

## 6. Header and Navigation

Create a professional corporate header.

Desktop header:
- Company logo and company name on the left.
- Navigation links: Home, About Us, Services, Our Approach, Industries, Gallery, Careers, Contact.
- A prominent “Request a Quote” button.
- Sticky navigation after scrolling.
- Active-page navigation indicator.
- A professional mobile menu with a working open/close toggle.

Keep the navigation clean and uncluttered.

The header must be consistent across all public pages.

## 7. Home Page — Premium Corporate Landing Page

### A. Hero Section with Banner Image

Create a visually impressive hero section with a wide, high-quality banner photograph relevant to facility management.

Use an authentic-looking photograph of a modern commercial building, professionally maintained office premises, a facility operations team, or a large industrial workplace.

Use a real image URL from a reliable image source such as Unsplash or another suitable publicly accessible image source. Do not use random unrelated images.

Hero layout:
- Large headline: “Reliable Facility Services. Stronger Workforces.”
- Supporting text explaining that Teamkraft provides facility support, workforce coordination, staffing, and operational assistance.
- Primary CTA: “Explore Our Services”
- Secondary CTA: “Request a Quote”
- A professionally composed image with a subtle dark overlay where needed for text contrast.
- Small supporting trust indicators such as “Facility Support”, “Workforce Solutions”, and “Operational Assistance”.

Use a polished split layout or an image-led hero with a strong text hierarchy.

The hero must not look like a generic AI-generated template. Avoid excessive floating cards and decorative shapes.

The banner image should be replaceable from the admin dashboard.

### B. Company Introduction

Heading: “Your Partner in Facility and Workforce Solutions”

Write a concise, professional introduction describing the company's facility services, workforce coordination, staffing support, and operational assistance.

Include a “Learn More About Us” button linking to `/about`.

### C. Services Overview

Create professional service previews for:

1. Facility Management Support
2. Housekeeping and Workplace Maintenance
3. Workforce Supply and Staffing
4. Recruitment and Manpower Support
5. Warehouse Operations Support
6. Picker and Packer Workforce
7. Industrial and Commercial Facility Support
8. Operational Workforce Coordination

Each service should have:
- A relevant image or carefully designed visual.
- Service title.
- Short, realistic description.
- “Explore Service” link.
- Editable content through the admin panel.

These are proposed website service categories based on the company's business type. Keep descriptions editable so the business can confirm the actual scope before launch.

### D. Why Choose Teamkraft?

Create a professional section with these proposed value propositions:

- Workforce Coordination
- Operational Flexibility
- Service-Oriented Approach
- Industry-Focused Support
- Reliable Communication
- Client-Centric Planning

Do not present unverified statistics, awards, or performance guarantees.

### E. Industries We Serve

Show relevant industry categories using individual images:

- Warehousing and Logistics
- Manufacturing and Industrial Facilities
- Commercial Offices
- Retail and Distribution
- Business Parks
- Commercial Premises

Use distinct images and concise descriptions for each industry.

### F. Our Approach Preview

Present a simple four-step workflow:

1. Understand Requirements
2. Plan the Service
3. Coordinate Workforce and Operations
4. Review and Improve

Include a button linking to `/our-approach`.

### G. Workforce Solutions Banner

Create a wide banner photograph showing a professional warehouse or industrial operations environment.

Headline: “The Right Workforce for Your Operational Needs”

CTA: “Discuss Your Requirements”

Link the CTA to `/contact`.

### H. Gallery Preview

Display six visually distinct photographs showing professional facilities, offices, warehouse operations, maintenance activities, and industrial environments.

Each image must be different and relevant.

Add a “View Full Gallery” button linking to `/gallery`.

### I. Recruitment / Careers Preview

Headline: “Build Your Career with Teamkraft”

Create a professional careers section with sample job listings such as:
- Warehouse Associate
- Picker / Packer
- Facility Support Staff
- Operations Support Executive

Clearly mark job listings as sample demo vacancies until confirmed by the company.

Include a “View Opportunities” button linking to `/careers`.

### J. Contact CTA

Add a prominent contact banner:

“Looking for Reliable Facility and Workforce Support?”

Buttons:
- Request a Quote
- Contact Our Team

### K. Footer

Create a detailed corporate footer containing:

**Company Information**
- Teamkraft Facility Services Private Limited
- Short company description
- Registered office address
- CIN: U78200PN2026PTC258858

**Quick Links**
- Home
- About Us
- Services
- Our Approach
- Industries
- Gallery
- Careers
- Company Details
- Contact Us
- Privacy Policy

**Contact Information**
- Phone and email placeholders until provided.
- Registered office address.
- Service area: Pune, Maharashtra.

**Admin Access**
- Add a clearly accessible but visually subtle “Admin Login” link in the footer.
- Link to `/admin/login`.

**Mandatory Developer Credit**

Display this exact text:

“Designed and development by SOSynch Ai Tech”

Keep the footer professional, responsive, and consistent across every public page.

## 8. About Us Page — `/about`

Create a dedicated company profile page.

Include:
- Page-specific hero banner with a facility management photograph.
- Company introduction.
- Company overview.
- Mission.
- Vision.
- Core values.
- Facility and workforce support philosophy.
- Operational coordination approach.
- Service area.
- Company information summary.
- CTA to contact the company.

Use realistic, professional language without making unsupported claims about the company's history, employee count, client portfolio, or achievements.

All content should be editable from the admin dashboard.

## 9. Services Page — `/services`

Create a complete services listing page.

Each service must have its own card and a detailed description.

Include:
- Facility Management Support
- Housekeeping and Maintenance Support
- Workforce Supply
- Recruitment and Staffing Support
- Warehouse Operations
- Picker / Packer Staffing
- Industrial Workforce Support
- Commercial Facility Support
- Operational Assistance

Each service should include:
- Image
- Title
- Overview
- Key responsibilities
- Suitable industries
- “Enquire About This Service” button

Service details should be available in an individual detail view or modal with a dedicated service URL where practical.

Allow the admin to create, edit, publish, unpublish, reorder, and delete services.

## 10. Our Approach Page — `/our-approach`

Create a polished process-focused page.

Display the following four-step process:

**Step 01 — Understand Requirements**

Understand the client's operational needs, service expectations, location, and workforce requirements.

**Step 02 — Develop a Service Plan**

Prepare a suitable proposed service approach based on the requirements shared by the client.

**Step 03 — Coordinate Operations**

Coordinate the planned staffing or facility support activities and maintain communication.

**Step 04 — Review and Improve**

Collect feedback, review service delivery, and identify potential improvements.

Include:
- A horizontal process timeline on desktop.
- A vertical timeline on mobile.
- Supporting workplace photographs.
- A service enquiry CTA.

All steps and descriptions must be editable from the admin panel.

## 11. Industries We Serve Page — `/industries`

Create separate visual sections for:
- Logistics and Warehousing
- Manufacturing and Industrial Operations
- Commercial Offices
- Retail and Distribution
- Business Parks and Commercial Premises
- General Facility Operations

Each industry section should include:
- A unique relevant photograph.
- Industry-specific introduction.
- Possible workforce or facility support requirements.
- Related services.
- An enquiry CTA.

These should be presented as relevant service categories, not as confirmed existing clients.

## 12. Workforce Solutions Page — `/workforce-solutions`

Create a dedicated page for staffing and workforce coordination.

Include:
- Hero image of a professional workplace or warehouse.
- Workforce supply overview.
- Recruitment and staffing support.
- Warehouse and logistics workforce.
- Picker / packer roles.
- Facility support personnel.
- Operations coordination.
- Workforce requirement enquiry form.

Provide a form where prospective clients can submit:
- Company name.
- Contact person.
- Email.
- Phone.
- Required workforce category.
- Number of personnel required.
- Work location.
- Preferred start date.
- Additional requirements.

Store submissions in localStorage for demonstration purposes and show them in the admin dashboard.

Clearly indicate that submissions are stored only in the current browser and are not sent to the company.

## 13. Gallery Page — `/gallery`

Create a premium responsive image gallery with category filtering.

Gallery categories:
- Facility Management
- Office Maintenance
- Warehouse Operations
- Industrial Facilities
- Workforce Activities
- Commercial Premises

Requirements:
- At least 12 distinct, relevant images.
- Avoid repeating the same image across the gallery.
- Use consistent image dimensions and `object-cover`.
- Include a responsive grid.
- Add working category filters.
- Open images in a custom React lightbox modal.
- Provide previous, next, and close controls.
- Add accessible image descriptions.
- Allow the administrator to add, edit, reorder, and delete gallery entries.

Provide clear fallback visuals for images that fail to load.

## 14. Careers Page — `/careers`

Create a professional recruitment page.

Include:
- Careers hero section.
- Company work environment introduction.
- Current opportunities.
- Job title, location, employment type, short description, and required skills.
- Search and filter by job category.
- “Apply Now” form.
- Applicant confirmation message.

Use sample job listings marked as demo content until confirmed.

Application fields:
- Full name.
- Email.
- Phone.
- Position applied for.
- Relevant experience.
- Short introduction.

Save applications to localStorage and display them in the admin dashboard.

Do not claim that applications have been delivered by email or received by the real company.

## 15. Company Details Page — `/company-details`

Display the available company information in a clear, formal layout.

Company name: Teamkraft Facility Services Private Limited.

CIN: U78200PN2026PTC258858.

Registered office: Sr. No. 582A2, Durga Hill Society, Katraj, Pune, Maharashtra – 411046, India.

Directors / Key Management: Shubham Dilip Gaikwad and Vallabh Rajguru Shinde.

Business category: Facility services, workforce management, staffing, recruitment, and operational support.

Service area: Pune, Maharashtra, including Pashan, Hinjewadi, Wakad, Kothrud, and Hadapsar.

Provide editable placeholders for phone, email, and other details not supplied.

Include a professional contact CTA.

Do not invent GSTIN, certifications, registrations, financial details, or additional legal information.

## 16. Contact Us Page — `/contact`

Create a fully designed contact page with:
- Page-specific banner image.
- Company contact details.
- Registered office address.
- Service area.
- Contact enquiry form.
- Workforce requirement enquiry form.
- Request a Quote section.
- Form validation.
- Success and error messages.
- Responsive two-column layout on desktop and stacked layout on mobile.

Contact form fields:
- Full name.
- Company name.
- Email.
- Phone.
- Service interested in.
- Subject.
- Message.

When a visitor submits a form:
1. Validate required fields.
2. Display appropriate error messages.
3. Save the enquiry to localStorage.
4. Generate a unique demo enquiry ID.
5. Show a professional success confirmation.
6. Display the submission in the admin dashboard.

Clearly label all forms as frontend demo forms. No real email or server submission is available.

Do not display fake contact details or an unverified map location.

## 17. Admin Login — `/admin/login`

Build a professional admin login page matching the corporate branding.

This is a demo-only login system without a backend or authentication API.

Use the following demo credentials:

Username: `admin`

Password: `Teamkraft@123`

Display a small “Demo Login Credentials” hint on the login page so the client can test the demo.

Requirements:
- Username field.
- Password field.
- Show/hide password control.
- Login validation.
- Error messages for invalid credentials.
- Loading-style button feedback.
- Successful redirect to `/admin/dashboard`.
- Persist demo login state using sessionStorage.
- Protected admin routes.
- Logout button.
- Redirect unauthenticated visitors to `/admin/login`.

Important security notice: these credentials and client-side route protections are only for demonstrations. Do not represent them as secure production authentication.

## 18. Admin Dashboard — `/admin/dashboard`

Create a fully functional, modern admin dashboard using React and Tailwind CSS.

Use a corporate sidebar, top navigation, dashboard overview, responsive content area, and working management pages.

Sidebar modules:

1. Dashboard Overview
2. Company Profile
3. Homepage Content
4. About Us Management
5. Services Management
6. Our Approach Management
7. Industries Management
8. Workforce Solutions
9. Gallery Management
10. Careers and Job Listings
11. Job Applications
12. Contact Enquiries
13. Company Details
14. SEO and Website Settings
15. Logout

### A. Dashboard Overview

Display dynamic mock statistics:
- Total Services.
- Total Gallery Images.
- Published Job Listings.
- Total Contact Enquiries.
- Total Workforce Enquiries.
- Total Job Applications.

Calculate the counts from the actual local mock data and localStorage entries rather than hardcoding the displayed totals.

Add recent enquiry records and quick-action buttons.

### B. Company Profile Management

Allow the admin to edit:
- Company name.
- Short description.
- Full company description.
- Logo URL or uploaded local preview.
- Registered address.
- CIN.
- Directors.
- Phone.
- Email.
- Service areas.
- Business category.
- Footer content.
- Developer credit text.

Save edits to localStorage and reflect changes on the public website immediately.

### C. Homepage Content Management

Allow the admin to edit:
- Hero headline.
- Hero subtitle.
- Hero image URL.
- Hero button text and destination.
- About section title and description.
- Service section heading.
- Why Choose Us content.
- Industries section.
- Workforce CTA.
- Gallery preview content.
- Careers preview.
- Contact CTA.

Provide working save, cancel, and preview controls.

### D. Services Management

Implement complete frontend CRUD:
- Add a service.
- Edit a service.
- Delete a service with confirmation.
- Change service title and description.
- Update image URL.
- Edit service category.
- Set published or draft status.
- Reorder services.
- Search and filter services.

All changes must persist using localStorage.

### E. Gallery Management

Implement:
- Add image URL.
- Image preview.
- Edit title and description.
- Change category.
- Publish or unpublish.
- Reorder images.
- Delete images with confirmation.

Display image loading errors clearly.

### F. Careers and Job Management

Implement:
- Create job listings.
- Edit job details.
- Change location and employment type.
- Set published or draft status.
- Delete listings.
- Review submitted applications.
- Search applications.
- Change application status between New, Reviewing, Shortlisted, and Closed.

### G. Contact and Enquiry Management

Create a working enquiry table.

Columns:
- Enquiry ID.
- Name.
- Company.
- Contact details.
- Service requested.
- Date.
- Status.
- Actions.

Admin actions:
- View enquiry details.
- Mark as New, In Progress, or Resolved.
- Search and filter.
- Delete with confirmation.
- Export enquiry data as a CSV file using native JavaScript browser functionality.

Also provide separate views for workforce enquiries and job applications.

### H. Website Settings and SEO

Allow the admin to update:
- Website title.
- Meta description.
- Brand colors.
- Logo.
- Favicon URL.
- Footer text.
- Social media links.
- Contact information.

Apply the updated settings to the public website wherever relevant.

Use safe input handling and sensible validation.

### I. Admin Data Persistence

Use localStorage for:
- Company settings.
- Homepage content.
- Services.
- Gallery.
- Industries.
- Our Approach.
- Job listings.
- Contact enquiries.
- Workforce enquiries.
- Job applications.
- SEO settings.

Requirements:
- Create initial seed data only when a relevant key is missing.
- Do not overwrite existing admin edits on every page load.
- Handle empty states.
- Handle invalid stored JSON gracefully.
- Provide a “Reset Demo Data” option inside settings with a clear confirmation.
- Show a success message after saving.
- Update public pages immediately after edits without requiring a manual refresh.
- Use reusable storage helper functions and React state.
- Avoid duplicate IDs when creating records.

Remember that localStorage is specific to the browser and device. It does not synchronize between different users or computers.

## 19. Image Requirements — Very Important

The website must contain multiple distinct and relevant images throughout the design.

Use at least 12–15 distinct photographs across the website, with more images where needed.

Include relevant images for:
- Homepage hero banner.
- Facility management.
- Commercial housekeeping.
- Office maintenance.
- Industrial facilities.
- Warehousing.
- Logistics.
- Workforce operations.
- Recruitment and staffing.
- Company introduction.
- Industries.
- Gallery.
- Careers.

Image handling rules:
1. Use authentic-looking, high-quality corporate photographs.
2. Use distinct images for different services and sections.
3. Avoid repeating one image across every service card.
4. Avoid irrelevant stock photos and overly staged corporate handshake images.
5. Maintain consistent aspect ratios and professional crops.
6. Use lazy loading for below-the-fold images.
7. Include useful alt text.
8. Add background overlays only when needed for text readability.
9. Add fallback backgrounds or placeholder visuals when images fail.
10. Ensure the layout remains attractive even when an image cannot load.
11. Make the hero, service, and gallery images editable from the admin panel.
12. Use only image URLs that can reasonably be accessed in the browser.
13. Keep image handling compatible with deployment on Vercel.

## 20. Privacy Policy Page — `/privacy-policy`

Create a basic demo privacy policy explaining that this is a demonstration website.

Explain that:
- Form submissions are stored locally in the visitor's browser.
- No backend submission or real email delivery is implemented.
- Demo information may be cleared when browser data is removed.
- The website does not demonstrate a production customer database.

Keep the policy editable and do not claim legal compliance or actual privacy practices that have not been verified.

## 21. Responsive Design Requirements

The entire website must be responsive and tested for:
- Desktop screens.
- Laptops.
- Tablets.
- Mobile phones.

Requirements:
- Responsive navigation.
- Correctly stacked layouts on small screens.
- Responsive images.
- Readable text sizes.
- Touch-friendly controls.
- Responsive tables or mobile-friendly record cards in the admin panel.
- No horizontal page overflow.
- No overlapping text or buttons.
- Consistent spacing and accessible color contrast.

## 22. Functional Requirements

Do not create a static website with buttons that do nothing.

Implement working interactions for:
- Navigation links.
- Mobile menu.
- Active-page states.
- CTA buttons.
- Contact forms.
- Quote requests.
- Workforce enquiries.
- Job applications.
- Gallery category filters.
- Gallery lightbox.
- Careers search and filters.
- Admin login and logout.
- Admin route protection.
- Dashboard navigation.
- CRUD operations.
- Publish and draft controls.
- Search and filtering.
- Confirmation dialogs.
- Success and error messages.
- localStorage persistence.
- Admin content previews.
- CSV export.
- Reset demo data.
- Browser history and direct URL navigation.

Every button should perform a meaningful action.

## 23. Accessibility and Performance

- Use semantic HTML.
- Use accessible labels for forms.
- Support keyboard navigation.
- Use visible focus indicators.
- Add alt text for meaningful images.
- Maintain readable contrast.
- Use reusable React components.
- Avoid unnecessary re-renders.
- Lazy-load suitable images.
- Keep the bundle lightweight.
- Avoid console errors and broken links.
- Provide empty states and error handling.
- Ensure admin and public layouts remain visually consistent.

## 24. Deployment and Publishing Readiness

Prepare the project for deployment on Vercel.

Requirements:
- Use Vite's standard production build.
- Ensure the `package.json` contains the necessary scripts.
- Ensure `npm install` works.
- Ensure `npm run dev` starts the development server.
- Ensure `npm run build` completes successfully.
- Ensure `npm run preview` works.
- Verify every public and admin route.
- Add the appropriate Vercel SPA rewrite configuration so direct URL visits and page refreshes work for routes such as `/about`, `/services`, and `/admin/login`.
- Ensure all image URLs and assets work after deployment.
- Remove unused imports, missing dependencies, broken links, and console errors.
- Do not require environment variables or external API keys.
- Do not add a database or backend during deployment preparation.

After implementation, provide a concise deployment checklist:
1. Install dependencies.
2. Run the development server.
3. Test all website pages and admin functionality.
4. Run the production build.
5. Deploy the Vite project to Vercel.
6. Verify the live URL, page refreshes, navigation, forms, and admin login.
7. Explain that localStorage demo data is browser-specific and that a backend is required for real shared data or secure authentication.

## 25. Final Quality Checklist

Before considering the project complete, verify:

- The website uses React + Vite + Tailwind CSS only.
- JavaScript and JSX are used instead of TypeScript.
- No external UI, icon, or routing libraries are installed.
- No database or backend is used.
- All requested pages are separate and navigable.
- Every navigation link opens the correct page.
- The hero contains a relevant banner photograph.
- Multiple distinct images appear throughout the site.
- The design uses the approved navy, blue, teal, and white palette.
- All company details match the supplied information.
- Missing phone and email details remain editable placeholders.
- The footer includes the Admin Login link.
- The footer contains the exact developer credit: “Designed and development by SOSynch Ai Tech”.
- Admin login works with the supplied demo credentials.
- Admin pages are protected by demo frontend route checks.
- All content management modules work.
- Admin edits persist in localStorage.
- Contact forms and job applications work as frontend demonstrations.
- CSV export works.
- The design is responsive on desktop, tablet, and mobile.
- All controls have meaningful functionality.
- No fake customer claims or invented company achievements appear.
- No console errors or broken routes remain.
- Production build succeeds.
- Deployment and live URL verification instructions are included.

**Final instruction:** Build the complete website and its functional admin dashboard, not just a homepage mockup. Prioritize a premium, natural-looking corporate design, realistic business copy, distinct relevant photographs, separate functional pages, editable mock data, and reliable deployment readiness. Keep the implementation strictly within React + Vite + Tailwind CSS, using only native JavaScript, React, CSS, browser APIs, and localStorage.




The site build is mid-way: the project has been restructured to React + Vite + JavaScript (old TypeScript/TanStack template files removed), and the new core files — design tokens, router, storage layer, seed content, site data context and shared UI components — are written.

The remaining build error is in tsconfig.json: it still declares vitest/globals and a test setup that no longer exist after removing the template's TypeScript test infrastructure. That config file needs to be slimmed down (or removed) since this is now a plain JavaScript project. The fix is a one-file edit but couldn't be applied yet.

Still unfinished: the page components (Home, About, Services, etc.), admin login/dashboard, header/footer, and dependency install — the work was paused when workspace credits ran out. Continuing will need available credits. The preview still has build errors. Ask me to fix them in a new message.



clone the repo and work remaining and

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0e8fabc9-c8aa-4f96-aea4-7640a3c2655c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
