import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import AutoImport from "astro-auto-import";
import react from "@astrojs/react";
import pagefind from "astro-pagefind";
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
    site: "https://monimiller.com",
    markdown: {
        shikiConfig: {
            // Shiki Themes: https://github.com/shikijs/shiki/blob/main/docs/themes.md
            theme: "rose-pine-dawn",
            wrap: true,
        },
    },
    // trailingSlash: "always",
    prefetch: true,
    integrations: [
        // example auto import component into mdx files
        AutoImport({
            imports: [
                // https://github.com/delucis/astro-auto-import
                "@components/Admonition/Admonition.astro",
            ],
        }),
        mdx(),
        react(),
        tailwind(),
        sitemap(),
        pagefind(),
        playformCompress(),
    ],
    build: {
        format: "file",
    },
});
