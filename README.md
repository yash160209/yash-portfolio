# Yash | Developer — Portfolio

A responsive developer portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. The homepage and three project detail pages are generated from reusable components and centralized project data.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production build, run `npm run build` and then `npm run start`.

## Configure links

The contact section uses the supplied GitHub, Instagram, and email details in [src/data/projects.ts](./src/data/projects.ts). Add verified demo and source URLs to the matching `liveUrl` and `sourceUrl` properties in that file. Project descriptions, technologies, status, feature lists, and visual type are maintained there as well.

Project visuals are CSS illustrations labeled as placeholders, not screenshots. Replace them with verified images when project screenshots are available.

## Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```
