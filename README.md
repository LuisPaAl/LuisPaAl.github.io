# Luis E. Padilla — Personal Academic Site

A responsive single-page academic research website, rebuilt from the original September 2026 version using the October 30, 2026 CV and the Ohio State research proposal. The site describes a clear research focus: **probing the interval between inflation and Big Bang nucleosynthesis using PBHs, GWs and numerical relativity**.

## View it locally

Open `index.html` in a browser, or use:

```bash
python3 -m http.server 8000
```

and visit http://localhost:8000.

## Deploy on GitHub Pages

Upload **the contents of this folder**, not the folder itself, into the root of a GitHub repository. In **Settings → Pages**, publish from the `main` branch root. No build pipeline, API keys or Node installation are required. The Google Fonts import is optional; the site still renders with fallback fonts offline.

## Update the site

- `index.html` — all written content, papers, links, metadata.
- `styles.css` — all colours, typography and layouts.
- `script.js` — mobile menu, theme toggle and subtle entrance transitions.
- `assets/luis-padilla-original.jpg` — the original JPEG as supplied, unretouched (720 × 1280). The website crops it through CSS display rules only.
- `assets/Luis_Enrique_Padilla_CV.pdf` — latest supplied CV, dated 30 October 2026.
- `assets/favicon.svg` — custom favicon.

## Editorial notes

- **Physics period:** The research proposal consistently focuses on **post-inflation to BBN**, not BBN to CMB. The website makes this interval explicit and includes a non-scale timeline for clarity.
- **Academic status:** 'JSPS International Postdoctoral Fellow' follows the supplied CV; no assistant-professor, independent-PI or group-leader appointment is claimed.
- **Counts:** 22 journal publications is a dated count from the 30 October 2026 CV; there are no hard-coded citation counts or h-index values that can quickly go stale.
- **Public preprints:** The DSS mass-function and Higgs-like field papers are labelled preprints. In-progress manuscripts are discussed as future directions but not presented as publications.
- **Software:** The extended Misner–Sharp code is *not* described as publicly released; PBH-β links to its documentation.
- **Research claims:** The Higgs-like calculation is not equated with a full Standard Model Higgs simulation; the potential distinction is explicit.
- **Other links:** INSPIRE, Google Scholar and LinkedIn URLs were read from hyperlinks in the provided CV.
- **Social preview:** The Open Graph image uses a relative URL. For optimal sharing when published, replace this with the full public URL of your image.

## November 2026 revision

- Hero now begins with **“Researcher in early-Universe physics”**, without literary slogans.
- Research-area descriptions foreground universality of critical exponents and DSS features, primordial structure formation during prolonged reheating, and joint PBH–GW probes of different early-Universe scenarios.
- Added a dedicated **Fellowships & recognition** section. Funded fellowships/scholarships and recognitions are separate. The MSCA Seal of Excellence is clearly labelled **not funded**.
- Kept academic service separate from funding and recognition.

## Optional next additions

Add a talks page (titles, slides, recordings), your GitHub link if you want code enquiries, and individual project pages when your numerical solver is released. Update your CV each time you revise the site.

## Writing style

Plain, precise academic English. No promotional slogans, literary headlines or claims of positions or research achievements beyond those in the CV and proposal.

## November 2026 — original photo and smaller portrait

- Switched the hero photo to the user's original JPEG byte-for-byte; did not alter appearance, color or background.
- Reduced the hero portrait from the previous large feature image to a discreet 260px-wide image on desktop and 178px on mobile.
- Replaced the decorative arched portrait crop with a simple rectangular card and removed its promotional caption.
- The portrait is visually cropped with CSS (`object-fit: cover`) but the underlying JPEG remains untouched.

## Original photos — November 2026

- The homepage keeps `assets/luis-padilla-original.jpg`, **byte-for-byte identical** to the supplied original selfie, displayed at a restrained 260 px wide on desktop (178 px mobile). No retouching is applied.
- The Academic background section now includes `assets/luis-padilla-cat-cafe.jpg`, **byte-for-byte identical** to the supplied original cat photograph (960 × 960), shown as a small supplementary candid photo.
- Both photos are locally packaged; no AI-generated portraits are used.
