/**
 * Image compression script using Sharp
 * Run: node scripts/compress-images.mjs
 *
 * - PNGs (except logo + QR) → compressed JPEG at 80% quality
 * - JPEGs → re-compressed at 82% quality
 * - Skips files already under 100KB
 * - Saves originals as .bak before overwriting
 */

import sharp from "sharp";
import { readdir, stat, rename, copyFile } from "fs/promises";
import { join, extname, basename } from "path";

const ASSETS_DIR = "./src/assets";
const JPEG_QUALITY = 82;
const PNG_QUALITY = 80;
const SKIP_BELOW_KB = 100; // don't touch files already small
const SKIP_FILES = ["logo.png", "instagramqr.jpeg"]; // keep these untouched

async function compress() {
  const files = await readdir(ASSETS_DIR);
  let saved = 0;

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;
    if (SKIP_FILES.includes(file)) {
      console.log(`⏭  Skipping ${file}`);
      continue;
    }

    const filePath = join(ASSETS_DIR, file);
    const { size } = await stat(filePath);
    const sizeKB = Math.round(size / 1024);

    if (sizeKB < SKIP_BELOW_KB) {
      console.log(`✅ Already small (${sizeKB}KB): ${file}`);
      continue;
    }

    // Backup original
    const backupPath = filePath + ".bak";
    await copyFile(filePath, backupPath);

    try {
      const tempPath = filePath + ".tmp";

      if (ext === ".png") {
        // Convert PNG → JPEG (much smaller), except keep as PNG if tiny
        const newFile = file.replace(/\.png$/i, ".jpg");
        const newPath = join(ASSETS_DIR, newFile);
        await sharp(filePath)
          .jpeg({ quality: PNG_QUALITY, mozjpeg: true })
          .toFile(newPath);
        const { size: newSize } = await stat(newPath);
        const newKB = Math.round(newSize / 1024);
        saved += sizeKB - newKB;
        console.log(`🔄 PNG→JPG ${file} → ${newFile}: ${sizeKB}KB → ${newKB}KB (saved ${sizeKB - newKB}KB)`);
      } else {
        // Re-compress JPEG
        await sharp(filePath)
          .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
          .toFile(tempPath);
        const { size: newSize } = await stat(tempPath);
        const newKB = Math.round(newSize / 1024);
        await rename(tempPath, filePath);
        saved += sizeKB - newKB;
        console.log(`📦 JPEG ${file}: ${sizeKB}KB → ${newKB}KB (saved ${sizeKB - newKB}KB)`);
      }
    } catch (err) {
      console.error(`❌ Failed ${file}:`, err.message);
    }
  }

  console.log(`\n✨ Done! Total saved: ~${Math.round(saved)}KB (~${Math.round(saved/1024 * 10) / 10}MB)`);
  console.log(`💡 Backups saved as .bak files. Delete them once you verify everything looks good.`);
  console.log(`⚠️  PNG imports in index.tsx that were converted need their import paths updated to .jpg`);
}

compress();
