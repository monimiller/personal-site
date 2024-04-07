import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import AutoImport from "astro-auto-import";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import netlify from "@astrojs/netlify";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
    site: "https://monimiller.com",
    output: "hybrid",
    adapter: netlify({
        imageCDN: false,
    }),
    redirects: {
        "/admin": "/keystatic",
    },
    markdown: {
        shikiConfig: {
            // Shiki Themes: https://github.com/shikijs/shiki/blob/main/docs/themes.md
            theme: "rose-pine-dawn",
            wrap: true,
        },
    },
    // trailingSlash: "always",
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
        keystatic(),
        tailwind(),
        sitemap(),
        compress(),
        pagefind(),
    ],
    build: {
        format: "file",
    },
});
