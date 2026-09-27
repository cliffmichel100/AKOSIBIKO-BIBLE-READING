import fs from 'node:fs';
import path from 'node:path';

const url = 'https://raw.githubusercontent.com/midvash/bible-data/main/versions/en/kjv/kjv.json';
const out = path.resolve('data/kjv.json');
fs.mkdirSync(path.dirname(out), { recursive: true });
const res = await fetch(url);
if (!res.ok) throw new Error(`KJV download failed: ${res.status}`);
const text = await res.text();
fs.writeFileSync(out, text);
console.log(`Saved ${out} (${text.length.toLocaleString()} bytes)`);
