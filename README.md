# Site CV - Armando Bretas

Landing page de currículo - Senior Front-end Developer.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## SEO

O site inclui otimizações de SEO:

- Meta tags (Open Graph, Twitter Card)
- JSON-LD (Schema.org Person)
- Sitemap (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)
- Manifest PWA

**Variáveis opcionais** (`.env`):

- `NEXT_PUBLIC_SITE_URL` - URL do site em produção (ex: `https://armando-bretas.vercel.app`)
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` - Código de verificação do Google Search Console
