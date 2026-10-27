import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import AutoImport from "astro-auto-import";
import react from "@astrojs/react";
import pagefind from "astro-pagefind";
import playformCompress from "@playform/compress";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: "https://monimiller.com",
    markdown: {
        shikiConfig: {
            // Shiki Themes: https://shiki.style/themes
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
        sitemap(),
        pagefind(),
        playformCompress(),
        icon({
            include: {
                tabler: ["*"],
            },
        }),
    ],
    build: {
        format: "file",
    },
});
