# my-vue-app

## Require
- Node.js 18.x
- npm

## Setup
Clone the repository.  
```bash
git clone https://github.com/acn-ryoshimojima/my-vue-app.git
```

Install dependencies.  
```bash
cd my-vue-app/
npm ci
```

## Development.
### Build
To build static files to `dist/`.
```bash
npm run build
```

and launch development server.
```bash
npm run preview
```

### Or Watch (Recommend)
```bash
npm run dev
```

## Project structure
```
$ tree .
.
├── dist
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   │   └── index.css
│   │   └── vue.svg
│   ├── components
│   │   ├── MyButton.vue
│   │   └── TextInput.vue
│   ├── index.ts
│   ├── language
│   │   ├── en-US.ts
│   │   ├── index.ts
│   │   └── ja.ts
│   ├── pages
│   │   ├── Page1.vue
│   │   ├── Page2.vue
│   │   └── Page3.vue
│   ├── router.ts
│   ├── utils
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

|Folder/File|Description|
|:--|:--|
|src/App.vue|Top-Level of UI|
|src/router.ts|Pagenation|
|src/components/xxx|UI parts|
|src/pages/xxx|Pages|
|src/languages/xxx|Multilingual support|

## See more information
- [Vue3](https://ja.vuejs.org/)
- [Vite](https://vitejs.dev/)