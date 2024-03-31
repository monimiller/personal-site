# Welcome to Stellar!

To get started, first install all necessary packages:

```
npm install
```

## Code Intro

I have created a few code tours to introduce you to the codebase. You will need the extension [Code Tour](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour) to view them in VSCode.

The source files have the following setup. Note that not all files are included - it is already long, no one wants it to be longer.

```
.
├── .tours/
│   └── code-intro.tour
├── .vscode/
│   └── extensions.json
├── public/
│   ├── favicons/
│   │   └── favicon.ico
│   ├── images/
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── hero.jpg
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── HeroBgImage.astro
│   │   │   ├── HeroCentered.astro
│   │   │   └── HeroSideImage.astro
│   │   └── Footer/
│   │       └── Footer.astro
│   ├── config/
│   │   ├── faqData.json.ts
│   │   └── navData.json.ts
│   ├── content/
│   │   ├── authors/
│   │   ├── blog/
│   │   ├── otherPages/
│   │   └── config.ts
│   ├── js/
│   │   └── blogUtils.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── blog/
│   │   │   ├── [...slug].astro
│   │   │   └── index.astro
│   │   ├── categories/
│   │   │   ├── [category].astro
│   │   │   └── index.astro
│   │   ├── [page].astro
│   │   ├── 404.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   └── rss.xml.ts
│   └── styles/
│       └── global.scss
├── .gitignore
├── .prettierrc.mjs
├── astro.config.mjs
├── netlify.toml
├── package.json
├── package-lock.json
├── README.md
├── tailwind.config.cjs
└── tsconfig.json
```

For robots like Google to see the correct sitemap, you will want to edit the `public/robots.txt` file to use your website domain.

## Other Resources

- See my [blog post](https://webreaper.dev/posts/best-vscode-extensions-front-end-developers/) for recommended VSCode extensions.
- You can learn more information from the [theme docs](https://cosmicthemes.com/docs/) page on the [Cosmic Themes Website](https://cosmicthemes.com/).
- For support, see the [support page](https://cosmicthemes.com/support/).
- [License details](https://cosmicthemes.com/license/)

## General Astro Info

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory. I also frequently use `src/assets` for images when using Astro asssets for image optimization.

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### 👀 Want to learn more?

Feel free to check out the [Astro documentation](https://docs.astro.build).
