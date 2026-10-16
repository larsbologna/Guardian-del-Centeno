import { defineConfig } from 'astro/config';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const base = '/Guardian-del-Centeno';

/**
 * En este entorno Astro 7 emite el CSS en dist/_astro pero no lo enlaza en el HTML.
 * Esta integración agrega los <link> que falten al terminar la build.
 */
const linkCss = {
  name: 'link-css',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const out = fileURLToPath(dir);
      const css = (await readdir(join(out, '_astro')).catch(() => [])).filter((f) => f.endsWith('.css'));
      for (const f of (await readdir(out)).filter((f) => f.endsWith('.html'))) {
        const p = join(out, f);
        let html = await readFile(p, 'utf8');
        const tags = css.filter((c) => !html.includes(c)).map((c) => `<link rel="stylesheet" href="${base}/_astro/${c}">`).join('');
        if (tags) await writeFile(p, html.replace('</head>', `${tags}</head>`));
      }
    },
  },
};

// Publicado en GitHub Pages: https://larsbologna.github.io/Guardian-del-Centeno/
// Si pasa a un dominio propio, cambiar `site` y quitar `base`.
export default defineConfig({
  site: 'https://larsbologna.github.io',
  base,
  integrations: [linkCss],
});
