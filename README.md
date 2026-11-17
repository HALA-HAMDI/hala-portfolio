# Hala Hamdi — Creative Engineering Portfolio

A fully editable, responsive, English-language personal website built with **HTML, CSS, and vanilla JavaScript**. No installation or build step needed.

Headings use Manrope and body text uses Inter. Technology tiles use Simple Icons brand marks when available, with labeled monograms as reliable fallbacks.

## Open in VS Code

1. Extract the ZIP and open the `hala-portfolio` folder in VS Code (`File → Open Folder`).
2. Open `index.html` in your browser. For the best experience, install VS Code's **Live Server** extension, then right-click `index.html` → **Open with Live Server**.
3. Customize `data.js` (content, projects, leadership roles and photo paths), `index.html` (intro, biography, contact), or `redesign.css` (current visual system, navigation and hero). `style.css` remains the base stylesheet and loads before the redesign overrides.

## Add photos to the portfolio

Put each real photograph in the matching folder under `assets/images/`. The folders contain `.gitkeep` files to preserve the folder structure; they are not photographs. The latest scan found 25 image assets. They are connected to the website except for the TunED 8.0 photo path, whose file is not present yet.

### Photo folders

- `assets/images/profile/` — hero portrait gallery (`heroImages`)
- `assets/images/about/` — About gallery (`aboutImages`)
- `assets/images/projects/<project>/` — project covers, prototypes, hardware and dashboards
- `assets/images/education/ipein/` — the only academic photo slot; ENIT, IPEIB and Baccalaureate cards are intentionally text-only
- `assets/images/companies/avempace/`, `tunisie-telecom/` — internship photos and company logos
- `assets/images/certificates/nvidia-rag/`, `nvidia-llm/`, `cisco-ccna/`, `stm32-training/` — certificates
- `assets/images/leadership/ieee-enit/`, `ieee-day-2025/`, `wie-act-4/`, `pestgm-6/`, `sdc-5/`, `tuned-8/` — leadership and event photos
- `assets/images/violin/` and `assets/images/crochet/` — performances and handmade work

Five projects are displayed: FieldSense (`fieldsense`), CircuitMind AI (`circuitmind-ai`), RFID Music Jukebox (`rfid-music-jukebox`), Intelligent Video Surveillance System (`smart-video-surveillance`), and Optical WDM Link Simulation (`optical-wdm-link`). FieldSense and Optical WDM Link Simulation include PDF reports at `assets/fieldsense.pdf` and `assets/wdm-optical-link.pdf`; their project cards link to the corresponding report. The Optical WDM entry uses `layout: "compact-report"` for its two-column desktop card, which stacks on mobile. Folders for the three removed projects remain untouched and are not part of the visible project list.

### Connect photos in `data.js`

Use paths relative to the project root. Add one or more photo paths to the section's `images` array. Every configured photo appears directly in its section; the first project photo is also the cover/first tile. Clicking any photo opens the optional fullscreen lightbox. A photo entry can be a path string or an object with a `src` and optional `caption`.

```js
heroImages: [
  "assets/images/profile/hala.jpg",
  { src: "assets/images/profile/hala-lab.jpg", caption: "At the ENIT lab" },
],
aboutImages: [
  "assets/images/about/engineering-lab.jpg",
  { src: "assets/images/about/team.jpg", caption: "Working with my project team" },
],

// Inside the matching project entry in projects:
images: [
  { src: "assets/images/projects/fieldsense/overview.jpg", caption: "FieldSense overview" },
  { src: "assets/images/projects/fieldsense/prototype.jpg", caption: "Irrigation prototype" },
  "assets/images/projects/fieldsense/dashboard.png",
],
```

Add photos to the `images` array on the matching experience, certification, or leadership entry. IPEIN is the only education entry that accepts a photo; ENIT, IPEIB, and the Baccalaureate remain text-only. The IEEE Day Ambassador uses `ambassador.images`. Company and event logos remain single image paths in `companyLogo` and `logoMedia`.

```js
// Experience record, or the IPEIN education record only:
images: [
  { src: "assets/images/companies/avempace/internship.jpg", caption: "Engineering internship" },
],

// Certification:
images: ["assets/images/certificates/nvidia-rag/certificate.jpg"],

// Leadership entry and IEEE Day 2025 Ambassador:
images: ["assets/images/leadership/ieee-enit/team.jpg"],
ambassador: {
  // Keep the existing Ambassador details and add:
  images: ["assets/images/leadership/ieee-day-2025/ambassador.jpg"],
},
```

Violin and crochet photographs use the top-level `violinImages` and `crochetImages` arrays:

```js
violinImages: [
  { src: "assets/images/violin/performance.jpg", caption: "Violin recital" },
],
crochetImages: [
  { src: "assets/images/crochet/product-01.jpg", caption: "Handmade crochet flowers" },
  "assets/images/crochet/product-02.jpg",
],
```

Supported photo formats are JPG, JPEG, PNG, WebP, and GIF. Gallery images retain their original aspect ratios; the IEEE event gallery is a compact horizontal strip with visible scroll controls, while other section galleries wrap naturally. All gallery photos open in the optional lightbox, which supports Previous/Next buttons or keyboard arrow keys and closes with Escape. Leave an array empty until you have real photographs—the page will show its designed photo placeholder where appropriate. Do not add a path until that image file exists. Legacy image paths under `assets/media/` remain supported.

## Photo Guide — Filenames and Folder Locations

### Inventory and current status

I checked `data.js`, `index.html`, `script.js`, and the contents of `assets/images/`. The scan found **25 image assets**. The Tunisie Telecom JPG logo, IPEIN photo, and STMicroelectronics certificate are present; the TunED 8.0 photo is the only currently referenced image file that is missing. Other files in the tree are `.gitkeep` placeholders. Image paths in the `data.js` header comment are examples only; active gallery references are the properties shown in the table.

The table gives each existing file's exact relative path and connected property. Rows marked Missing show suggested filenames and paths, not files that exist. Add `-02`, `-03`, and so on before the extension for additional photos in the same gallery (see [Multiple photos and captions](#multiple-photos-and-captions)). In the `data.js` column, `[]` means an array.

| Section name | Photo purpose | Actual filename (suggested if missing) | Exact relative path | Connected `data.js` property | Status |
| --- | --- | --- | --- | --- | --- |
| Hero / profile | Profile portrait | `hala.jpg` | `assets/images/profile/hala.jpg` | `heroImages[]` | Connected |
| About Me | About / engineering photo | Suggested: `engineering-lab.jpg` | `assets/images/about/engineering-lab.jpg` | `aboutImages[]` | Missing |
| FieldSense | Project cover / overview | `overview.jpg` | `assets/images/projects/fieldsense/overview.jpg` | `projects[0].images[]` | Connected |
| FieldSense | Prototype photo | `prototype.jpg` | `assets/images/projects/fieldsense/prototype.jpg` | `projects[0].images[]` | Connected |
| FieldSense | Dashboard photo | `dashboard.png` | `assets/images/projects/fieldsense/dashboard.png` | `projects[0].images[]` | Connected |
| CircuitMind AI | Project photo | `circuitmind-ai-01.jpg` | `assets/images/projects/circuitmind-ai/circuitmind-ai-01.jpg` | `projects[1].images[]` | Connected |
| RFID Music Jukebox | Project photo | `rfid-music-jukebox-01.jpg` | `assets/images/projects/rfid-music-jukebox/rfid-music-jukebox-01.jpg` | `projects[2].images[]` | Connected |
| Intelligent Video Surveillance System | Project photo | `smart-video-surveillance-01.jpg` | `assets/images/projects/smart-video-surveillance/smart-video-surveillance-01.jpg` | `projects[3].images[]` | Connected |
| Optical WDM Link Simulation | Project photo 1 | `optical-wdm-link-01.jpg` | `assets/images/projects/optical-wdm-link/optical-wdm-link-01.jpg` | `projects[4].images[]` | Connected |
| Optical WDM Link Simulation | Project photo 2 | `optical-wdm-link-02.png` | `assets/images/projects/optical-wdm-link/optical-wdm-link-02.png` | `projects[4].images[]` | Connected |
| Academic Journey — IPEIN | Optional academic photo (the only academic photo slot) | `ipein-01.jpg` | `assets/images/education/ipein/ipein-01.jpg` | `education[1].images[]` | Connected |
| Avempace Technologies | Internship photo | `internship.jpg` | `assets/images/companies/avempace/internship.jpg` | `experience[0].images[]` | Connected |
| Tunisie Telecom | Internship photo | Suggested: `tunisie-telecom-internship-01.jpg` | `assets/images/companies/tunisie-telecom/tunisie-telecom-internship-01.jpg` | `experience[1].images[]` | Missing |
| Avempace Technologies | Company logo | `logo.jpg` | `assets/images/companies/avempace/logo.jpg` | `experience[0].companyLogo` | Connected |
| Tunisie Telecom | Company logo | `tunisie-telecom-logo.jpg` | `assets/images/companies/tunisie-telecom/tunisie-telecom-logo.jpg` | `experience[1].companyLogo` | Connected |
| NVIDIA RAG | Certificate | `certificate.jpg` | `assets/images/certificates/nvidia-rag/certificate.jpg` | `certifications[0].images[]` | Connected |
| NVIDIA LLM | Certificate | `certificate.jpg` | `assets/images/certificates/nvidia-llm/certificate.jpg` | `certifications[1].images[]` | Connected |
| Cisco CCNA | Certificate | `certificate.jpg` | `assets/images/certificates/cisco-ccna/certificate.jpg` | `certifications[2].images[]` | Connected |
| STMicroelectronics training | Certificate | `stm32-training-certificate.jpg` | `assets/images/certificates/stm32-training/stm32-training-certificate.jpg` | `certifications[3].images[]` | Connected |
| IEEE ENIT Student Branch | Activity / team photo | `team.jpg` | `assets/images/leadership/ieee-enit/team.jpg` | `leadership[0].images[]` | Connected |
| IEEE ENIT Student Branch | Additional team/event photo | `team-02.jpg` | `assets/images/team-02.jpg` | `leadership[0].images[]` | Connected |
| IEEE ENIT Student Branch | Additional team/event photo | `team-03.jpg` | `assets/images/team-03.jpg` | `leadership[0].images[]` | Connected |
| IEEE Day 2025 Ambassador | Ambassador photo | `ambassador.jpg` | `assets/images/leadership/ieee-day-2025/ambassador.jpg` | `ambassador.images[]` | Connected |
| WiE ACT 4.0 | Event / media photo | `wie-act-4-01.jpg` | `assets/images/leadership/wie-act-4/wie-act-4-01.jpg` | `leadership[1].images[]` | Connected |
| PESTGM 6.0 | Event / branding photo | `pestgm-6-01.jpg` | `assets/images/leadership/pestgm-6/pestgm-6-01.jpg` | `leadership[2].images[]` | Connected |
| SIGHT Day Congress 5.0 | No photo slot by design | — | — | `leadership[3].photoFree` | Intentionally photo-free |
| Tunisian Engineering Day 8.0 | Event / media photo | Suggested: `tuned-8-01.jpg` | `assets/images/leadership/tuned-8/tuned-8-01.jpg` | `leadership[4].images[]` | Missing |
| IEEE ENIT Student Branch | Optional branch logo | Suggested: `ieee-enit-logo.png` | `assets/images/leadership/ieee-enit/ieee-enit-logo.png` | `leadership[0].logoMedia` (currently empty) | Missing — optional |
| WiE ACT 4.0 | Optional event logo | Suggested: `wie-act-4-logo.png` | `assets/images/leadership/wie-act-4/wie-act-4-logo.png` | `leadership[1].logoMedia` | Missing |
| PESTGM 6.0 | Optional event logo | Suggested: `pestgm-6-logo.png` | `assets/images/leadership/pestgm-6/pestgm-6-logo.png` | `leadership[2].logoMedia` | Missing |
| Tunisian Engineering Day 8.0 | Optional event logo | Suggested: `tuned-8-logo.png` | `assets/images/leadership/tuned-8/tuned-8-logo.png` | `leadership[4].logoMedia` | Missing |
| Violin / Music | Performance or practice photo | `performance.jpg` | `assets/images/violin/performance.jpg` | `violinImages[]` | Connected |
| Crochet business | Product / handmade-work photo | `product.jpg` | `assets/images/crochet/product.jpg` | `crochetImages[]` | Connected |

### Photo display and framing

- Experience photos are limited to 420px wide and keep their original proportions; on small screens they shrink to fit.
- The hero portrait fills the existing organic frame, which clips its outer edges. The image is positioned toward the upper center to keep a face visible.
- IEEE event photos share a horizontally scrollable gallery with visible navigation buttons; each photo keeps its own aspect ratio and event label.
- Crochet and violin photos use intrinsic-size frames, wrap when space allows, and keep their original proportions without cropping.

Do not add fixed image heights or `object-fit: cover` to experience or crochet photos; that can crop important image details.

### Multiple photos and captions

Project, experience, certificate, leadership, Ambassador, hero, About, violin, and crochet galleries accept multiple photo entries. IPEIN is the only education card with a photo slot. Keep related photos in that section's folder and use a numbered sequence, for example:

```text
assets/images/projects/fieldsense/fieldsense-01.jpg
assets/images/projects/fieldsense/fieldsense-02.jpg
assets/images/projects/fieldsense/fieldsense-03.jpg
assets/images/projects/circuitmind-ai/circuitmind-ai-01.jpg
assets/images/projects/circuitmind-ai/circuitmind-ai-02.jpg
assets/images/leadership/ieee-day-2025/ieee-day-2025-01.jpg
assets/images/leadership/ieee-day-2025/ieee-day-2025-02.jpg
assets/images/violin/violin-01.jpg
assets/images/violin/violin-02.jpg
assets/images/crochet/crochet-01.jpg
assets/images/crochet/crochet-02.jpg
```

In project galleries, the first item in `images` is the featured/first photo, but every image in the array is displayed directly on the webpage. Add new entries to the existing array; do not overwrite the other photo paths. You may use a string path or an object with `src` and `caption`:

```js
// Inside the existing FieldSense object in projects:
images: [
  { src: "assets/images/projects/fieldsense/fieldsense-01.jpg", caption: "FieldSense overview" },
  { src: "assets/images/projects/fieldsense/fieldsense-02.jpg", caption: "Sensor hardware" },
  { src: "assets/images/projects/fieldsense/fieldsense-03.jpg", caption: "Dashboard" }
],
```

For captions, use `{ src: "relative/path/to/photo.jpg", caption: "Short description" }`. Keep the caption accurate and concise. Avoid adding the same path twice; duplicate image paths are ignored. Clicking any visible photo opens the optional lightbox, but no photo is hidden until clicked.

### Company logos and certificates

Exact filenames and current statuses:

- Avempace Technologies logo: `assets/images/companies/avempace/logo.jpg` → `experience[0].companyLogo` (present and connected)
- Tunisie Telecom logo: `assets/images/companies/tunisie-telecom/tunisie-telecom-logo.jpg` → `experience[1].companyLogo` (present and connected)
- NVIDIA RAG certificate: `assets/images/certificates/nvidia-rag/certificate.jpg` → `certifications[0].images` (present and connected)
- NVIDIA LLM certificate: `assets/images/certificates/nvidia-llm/certificate.jpg` → `certifications[1].images` (present and connected)
- Cisco CCNA certificate: `assets/images/certificates/cisco-ccna/certificate.jpg` → `certifications[2].images` (present and connected)
- STMicroelectronics certificate: `assets/images/certificates/stm32-training/stm32-training-certificate.jpg` → `certifications[3].images` (present and connected)

Company logos should preferably use transparent PNG or SVG files; the `companyLogo` field also accepts WebP and JPEG. Leadership `logoMedia` fields accept PNG, JPG/JPEG, WebP, or GIF. Certificates should use a high-resolution JPG, PNG, or WebP. The gallery preserves full image proportions: do not crop names, dates, verification codes, or other certificate details. Certificate photos go in the matching certification's `images` array; company logos use the separate `companyLogo` property.

### Beginner steps: add and preview a photo

1. In VS Code, open the Explorer and expand `assets` → `images` → the matching section folder shown in the inventory. For example, open `assets/images/projects/fieldsense/` for a FieldSense picture. These folders already exist; `.gitkeep` files only keep empty folders in the project.
2. Copy your real photo into that folder. You can drag it from File Explorer into the folder in VS Code.
3. Rename the copied file to the suggested name from the table, or keep your own clear name and use that exact name in `data.js`. Do not rename a file after connecting its path unless you also update the path in `data.js`.
4. Open `data.js`, find the matching record/property from the inventory, and add the project-relative path. For example, add this to FieldSense's existing `images: []`:

   ```js
   images: [
     { src: "assets/images/projects/fieldsense/fieldsense-01.jpg", caption: "FieldSense overview" }
   ],
   ```

   Use forward slashes `/` in `data.js` paths, even when working in Windows. The same relative paths work when deployed from the portfolio root.
5. To add more photos, add another comma-separated item inside the same array, such as `assets/images/projects/fieldsense/fieldsense-02.jpg`. Keep the first project photo as the cover. Do not create a second `images` property on the same record.
6. Save `data.js`, right-click `index.html`, and choose **Open with Live Server**. Refresh the browser after changes. Open the relevant section to check that every photo appears, the caption is accurate, and the optional lightbox opens.
7. If a placeholder remains or a photo is missing, verify that the file exists in the exact folder, the path and filename (including extension and capitalization) match exactly, the path starts with `assets/images/`, and the `data.js` property is the right one. Use a supported image format (JPG, JPEG, PNG, WebP, or GIF for galleries). Check the browser's developer console for a failed image request. GitHub Pages and other case-sensitive hosts require matching capitalization.

The current image code accepts gallery image paths under `assets/images/` with JPG, JPEG, PNG, WebP, or GIF extensions. Company-logo paths use `assets/images/companies/` and accept PNG, SVG, WebP, JPG, or JPEG. It also still supports legacy gallery paths under `assets/media/`; new photos should use the organized `assets/images/` folders listed here.

To update skill tiles, edit the `technologies` array under each category in `data.js`. The `icon` property is an optional Simple Icons slug; if omitted or unavailable, the tile uses its labeled `fallback` monogram.

## Important items to customize before publishing

- **LinkedIn:** the current link is a LinkedIn people search, not your actual profile. In `index.html`, replace it with your profile URL.
- **CV:** the included PDF is the original French CV you uploaded. Replace `assets/Hala_Hamdi_CV.pdf` with your updated English CV if preferred.
- **Photos:** the Tunisie Telecom JPG logo and all four certificate photos are present and connected. The TunED 8.0 photo is referenced but missing; optional event logos and other missing photos are listed in the inventory.
- **Dates:** SIGHT Day Congress 5.0 is described as "upcoming · April" because you mentioned this, without assuming a year. Update when the event has happened.
- **Contact:** the included email is from your CV. The template does not include your phone number publicly.
- **Social/business links:** add your GitHub, crochet store and other handles if you wish.

## Configure the contact form

The portfolio is static and has no built-in mail server. Until a form endpoint is configured, the form clearly says it cannot send yet and visitors can email Hala directly at `hala.hamdi@etudiant-enit.utm.tn`. No message is reported as sent unless the form service confirms the submission.

To enable form submissions with Formspree:

1. Create a form in your Formspree account and set its recipient to `hala.hamdi@etudiant-enit.utm.tn`. Complete any email verification Formspree requires.
2. Copy the form endpoint shown by Formspree. It should look like `https://formspree.io/f/your-form-id`.
3. In `data.js`, set `contactFormEndpoint` to that exact endpoint, for example:

   ```js
   contactFormEndpoint: "https://formspree.io/f/your-form-id",
   ```

   Replace the example ID with the real endpoint from your Formspree account. The empty default is intentional; do not publish an invented endpoint. The browser code accepts only HTTPS Formspree form endpoints, and no private API key is needed in the website.
4. Publish the updated site and submit a test message to confirm delivery.

To show the optional GitHub button, set `contactGithubUrl` in `data.js` to your public profile URL, such as `https://github.com/your-username`. The button remains hidden when this value is empty or invalid.

## Deploy for free with Vercel

1. Push the extracted folder to a GitHub repository.
2. Log into [Vercel](https://vercel.com), select **Add New → Project**, import the GitHub repository.
3. Choose **Other** as framework if asked, and publish with no build command. The root directory should be the folder containing `index.html`.

Alternative: GitHub Pages or Netlify can also host the site. This is a static site, so there is no backend to configure.

## Files

- `index.html` — page structure and main text
- `style.css` — base visual design and responsiveness
- `redesign.css` — current pastel-blue and cream visual system, organic section styling, responsive navigation, and cursor interaction
- `data.js` — project, skills, education, experience, leadership data and photo paths
- `script.js` — interactive filtering, mobile navigation, reveals and photo lightbox
- `assets/Hala_Hamdi_CV.pdf` — your uploaded CV
- `assets/images/` — organized photo, company-logo, certificate, education, project, leadership, violin, and crochet folders
- `assets/media/` — legacy media folder, still supported

The website is original and inspired by the **general idea** of an easy-to-navigate, section-based engineering portfolio, without copying the reference site's appearance or content.

## Photo checklist

Check an item only after the actual image file exists at the listed path **and** its matching `data.js` property points to that path. Unchecked entries are missing photos or optional logos. The TunED 8.0 photo is referenced in `data.js` but its file is not in this copy.
SIGHT Day Congress 5.0 is intentionally photo-free and therefore has no photo checklist item.

### Profile and About

- [x] Profile photograph connected: `assets/images/profile/hala.jpg` → `heroImages`
- [ ] Add About photograph: `assets/images/about/engineering-lab.jpg` → `aboutImages`

### Projects

- [x] FieldSense cover: `assets/images/projects/fieldsense/overview.jpg` → `projects[0].images`
- [x] FieldSense prototype photo: `assets/images/projects/fieldsense/prototype.jpg` → `projects[0].images`
- [x] FieldSense dashboard photo: `assets/images/projects/fieldsense/dashboard.png` → `projects[0].images`
- [x] CircuitMind AI photo: `assets/images/projects/circuitmind-ai/circuitmind-ai-01.jpg` → `projects[1].images`
- [x] RFID Music Jukebox photo: `assets/images/projects/rfid-music-jukebox/rfid-music-jukebox-01.jpg` → `projects[2].images`
- [x] Intelligent Video Surveillance System photo: `assets/images/projects/smart-video-surveillance/smart-video-surveillance-01.jpg` → `projects[3].images`
- [x] Optical WDM Link Simulation photo 1: `assets/images/projects/optical-wdm-link/optical-wdm-link-01.jpg` → `projects[4].images`
- [x] Optical WDM Link Simulation photo 2: `assets/images/projects/optical-wdm-link/optical-wdm-link-02.png` → `projects[4].images`
- [ ] Add any additional project photos to the matching `projects[n].images` gallery.

### Academic Journey

- [x] IPEIN academic photo: `assets/images/education/ipein/ipein-01.jpg` → `education[1].images`

### Professional Experience and company logos

- [x] Avempace internship photo: `assets/images/companies/avempace/internship.jpg` → `experience[0].images`
- [x] Avempace logo: `assets/images/companies/avempace/logo.jpg` → `experience[0].companyLogo`
- [ ] Add Tunisie Telecom internship photo: `assets/images/companies/tunisie-telecom/tunisie-telecom-internship-01.jpg` → `experience[1].images`
- [x] Tunisie Telecom JPG logo: `assets/images/companies/tunisie-telecom/tunisie-telecom-logo.jpg` → `experience[1].companyLogo`

### Certificates

- [x] NVIDIA RAG certificate: `assets/images/certificates/nvidia-rag/certificate.jpg` → `certifications[0].images`
- [x] NVIDIA LLM certificate: `assets/images/certificates/nvidia-llm/certificate.jpg` → `certifications[1].images`
- [x] Cisco CCNA certificate: `assets/images/certificates/cisco-ccna/certificate.jpg` → `certifications[2].images`
- [x] STMicroelectronics certificate: `assets/images/certificates/stm32-training/stm32-training-certificate.jpg` → `certifications[3].images`

### Leadership and events

- [x] IEEE ENIT Student Branch photo: `assets/images/leadership/ieee-enit/team.jpg` → `leadership[0].images`
- [x] IEEE ENIT team/event photo: `assets/images/team-02.jpg` → `leadership[0].images`
- [x] IEEE ENIT team/event photo: `assets/images/team-03.jpg` → `leadership[0].images`
- [ ] Add optional IEEE ENIT logo: `assets/images/leadership/ieee-enit/ieee-enit-logo.png` → `leadership[0].logoMedia`
- [x] IEEE Day 2025 Ambassador photo: `assets/images/leadership/ieee-day-2025/ambassador.jpg` → `ambassador.images`
- [x] WiE ACT 4.0 photo: `assets/images/leadership/wie-act-4/wie-act-4-01.jpg` → `leadership[1].images`
- [ ] Add WiE ACT 4.0 logo (optional): `assets/images/leadership/wie-act-4/wie-act-4-logo.png` → `leadership[1].logoMedia`
- [x] PESTGM 6.0 photo: `assets/images/leadership/pestgm-6/pestgm-6-01.jpg` → `leadership[2].images`
- [ ] Add PESTGM 6.0 logo (optional): `assets/images/leadership/pestgm-6/pestgm-6-logo.png` → `leadership[2].logoMedia`
- [ ] Add Tunisian Engineering Day 8.0 photo: `assets/images/leadership/tuned-8/tuned-8-01.jpg` → `leadership[4].images`
- [ ] Add Tunisian Engineering Day 8.0 logo (optional): `assets/images/leadership/tuned-8/tuned-8-logo.png` → `leadership[4].logoMedia`
- [ ] Add more event photos to their matching leadership or Ambassador `images` arrays as needed.

### Music and creative business

- [x] Violin photo: `assets/images/violin/performance.jpg` → `violinImages`
- [x] Crochet product photo: `assets/images/crochet/product.jpg` → `crochetImages`
- [ ] Add more violin and crochet photos to their respective arrays as needed.

## Layout refinements (November 2026)

The portfolio loads **`layout-refinements.css` after `redesign.css`**. This file contains the consolidated responsive layout rules for the current pastel-blue and cream design.

- **Wider centered layout:** the `.shell` container uses a maximum width of 1510px, with responsive outer gutters.
- **Projects:** five cards use a desktop Bento pattern (wide/narrow first row, narrow/wide second row, and a full-width final project). Tablet cards use two columns and mobile cards stack. Gallery images use intrinsic sizing and wrap without fixed aspect-ratio frames.
- **Experience and education:** internship cards retain company logos and show configured photos. The academic milestones adapt from a wide timeline to a stacked layout; IPEIN is the only education photo slot.
- **Certifications and Languages:** one shared Bento layout places the certificate collection on the left/lower area and a compact French B2 / English B2 card at the upper right. All four certificate images retain their proportions and open in the lightbox.
- **IEEE leadership:** the former accordion is replaced by a single horizontally scrollable IEEE photo strip with visible arrow controls and one unified multi-column roles-and-achievements panel below it. All roles, descriptions, dates, and IEEE Day Ambassador rankings remain visible. SIGHT Day Congress 5.0 is intentionally photo-free.
- **Violin and crochet:** photos keep their intrinsic aspect ratios, wrap when additional images are added, and use captions outside the image frame.

### Where to add IEEE photos

Keep using the event-specific folders in `assets/images/leadership/` and add paths to each event's `images` array in `data.js`; IEEE Day photos belong in `ambassador.images`. All configured photos appear in the horizontally scrollable IEEE gallery and remain reachable with the arrow controls or horizontal scrolling. Do not add photos for SIGHT Day Congress 5.0 (`photoFree: true`). The lightbox enlarges photos but is not required to access them.

### Photo status in this copy

The photo scan found 25 image assets. **`assets/images/leadership/tuned-8/tuned-8-01.jpg` is referenced in `data.js` but is not present**, so the TunED item appears in the roles panel without an IEEE gallery photo until the file is supplied. If another IEEE image fails to load, its empty frame is removed and the failure is logged in the browser console.

### Visual verification

Use VS Code Live Server to review desktop, tablet, and mobile layouts before publishing. The IEEE photo strip can be browsed with its arrows, trackpad/mouse wheel, touch gestures, or keyboard focus and horizontal scrolling.
