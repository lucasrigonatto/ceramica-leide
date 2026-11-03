import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { resolve } from "node:path";

const output = resolve("out");
const html = await readFile(resolve(output, "index.html"), "utf8");
const ids = new Set(
  [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
);
const anchors = [
  ...new Set([...html.matchAll(/href="#([^"]+)"/g)].map((match) => match[1])),
];
assert(anchors.length > 0, "The exported page must contain section navigation");
for (const id of anchors) assert(ids.has(id), "Broken section link: #" + id);
assert(
  /<link[^>]+rel="canonical"[^>]+href="https:\/\/www\.ceramicaleide\.com\.br\/?"/.test(
    html,
  ),
  "Missing production canonical URL",
);
const images = [
  ...new Set(
    [...html.matchAll(/\bsrc="(\/images\/[^"]+)"/g)].map((match) => match[1]),
  ),
];
assert(
  images.length > 0,
  "The exported page must reference local business images",
);
for (const image of images)
  await access(resolve(output, "." + decodeURIComponent(image.split("?")[0])));
console.log(
  "Export verified: " +
    anchors.length +
    " anchor targets and " +
    images.length +
    " local images.",
);
