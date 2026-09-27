# AkoSiBiko Bible Baptist KJV Study Bible

A static, GitHub Pages-ready KJV study Bible interface designed around a Bible Baptist / Independent Fundamental Baptist theological framework. The study notes are original writing for this project and are not copied from Scofield, Ryrie, Rock of Ages, Common Man's Reference Bible, or any other copyrighted edition.

## Included
- Complete 66-book KJV corpus (31,102 verses) downloaded at build time from the public-domain KJV data source documented in `scripts/prepare-data.mjs`.
- Local, instant Bible search and verse navigation.
- Offline caching through a service worker after the site has been loaded once.
- Original study notes organized around Bibliology, Soteriology, Eternal Security, Free Grace, Dispensationalism, Baptist distinctives, and Premillennial/Pretribulational eschatology.
- English, Cebuano, and Tagalog versions of the project's study notes.
- Cross-reference examples and a doctrinal index.
- KJV archaic-word glossary.
- Reading progress and bookmarks stored locally in the browser.
- Live clock / local-status indicator.
- AkoSiBiko fingerprint/thumbmark branding.

## GitHub Pages
1. Create a repository and push these files to the `main` branch.
2. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the source.
3. The workflow downloads the KJV JSON during deployment and publishes the static site.
4. After the first load, the service worker caches the app and Bible data for offline reading.

The repository intentionally does not commit the generated KJV data file because it is large; GitHub Actions creates it during the Pages build. If you want the JSON physically committed to the repository, run `node scripts/prepare-data.mjs`, then commit `data/kjv.json`.

## KJV data provenance
The default source is the `midvash/bible-data` KJV JSON corpus, which documents 66 books and 31,102 verses and identifies included Bible texts as public domain or freely licensed. See the repository's README for provenance and verification details.
