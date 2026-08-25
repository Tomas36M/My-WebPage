/**
 * Convierte las capturas y logos de public/ a WebP y les pone un ancho máximo
 * sensato. Idempotente: si el .webp ya existe y es más nuevo, lo salta.
 *
 *   node scripts/optimize-images.mjs [--force]
 */
import { readdir, stat, unlink } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
import sharp from 'sharp';

const FORCE = process.argv.includes('--force');

/* Ancho máximo por carpeta: las capturas se ven a ~980 px como mucho. */
const TARGETS = [
  { dir: 'public', maxWidth: 1200, quality: 78 },
  { dir: 'public/logos', maxWidth: 256, quality: 86 }
];

const isRaster = f => ['.png', '.jpg', '.jpeg'].includes(extname(f).toLowerCase());

let saved = 0;
let count = 0;

for (const { dir, maxWidth, quality } of TARGETS) {
  const files = await readdir(dir);
  for (const file of files) {
    if (!isRaster(file)) continue;
    const src = join(dir, file);
    const info = await stat(src);
    if (!info.isFile()) continue;

    const out = join(dir, `${basename(file, extname(file))}.webp`);
    if (!FORCE) {
      try {
        if ((await stat(out)).mtimeMs > info.mtimeMs) continue;
      } catch {
        /* no existe todavía */
      }
    }

    const image = sharp(src);
    const meta = await image.metadata();
    const pipeline = meta.width > maxWidth ? image.resize({ width: maxWidth }) : image;
    await pipeline.webp({ quality, effort: 6 }).toFile(out);

    const after = (await stat(out)).size;
    saved += info.size - after;
    count += 1;
    console.log(
      `${file.padEnd(30)} ${(info.size / 1024).toFixed(0).padStart(6)} KB → ${(after / 1024).toFixed(0).padStart(6)} KB  ${out}`
    );
    await unlink(src);
  }
}

console.log(`\n${count} imágenes · ${(saved / 1024 / 1024).toFixed(2)} MB menos`);
