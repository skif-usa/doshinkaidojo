# Doshinkai Dojo

Website for Doshinkai Dojo — traditional Shotokan Karate in Cincinnati, Ohio. Built with Next.js (App Router),
React, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

> **If colours or fonts look stale, restart the dev server.** Edits to the `@theme` block in
> `app/globals.css` do not reliably hot-reload, and the page will keep rendering the previous tokens.

## Environment variables

Create `.env.local` (git-ignored):

```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | Resend API key. Without it the three forms cannot send. |
| `RESEND_FROM` | recommended | Sender, e.g. `Doshinkai Dojo <hello@doshinkaidojo.com>`. Defaults to `onboarding@resend.dev`, which **only delivers to the Resend account owner** and hurts deliverability. Verify the domain in Resend and set this. |
| `RESEND_TO` | no | Where submissions land. Defaults to `dskdojo1@gmail.com`. |

## Design system

All tokens live in the `@theme` block of `app/globals.css`. Three hues only:

- **Neutral** — `bone`, `bone-deep`, plus white page background
- **Steel navy** — `steel`, `steel-line`, for solid full-width bands and the footer
- **Dojo red** — `dojo`, `dojo-deep`, `dojo-soft`, the single accent

Text is `ink` / `ink-soft` / `ink-faint`. Type is Archivo (`font-display`, headings) over Inter (body).
Utility classes: `.label` (tracked eyebrow with a red rule), `.tnum` (tabular figures), `.rise`
(scroll reveal, CSS-only).

## Layout

| Path | Purpose |
| --- | --- |
| `app/` | Routes. Pages that hold a form delegate to a client component beside them. |
| `app/actions/sendEmail.ts` | Server action behind all three forms: validation, spam checks, Resend send. |
| `components/PageHeader.tsx` | Steel banner every subpage opens with. Emits BreadcrumbList JSON-LD when given `crumbs` and `path`. |
| `components/HeroSlider.tsx` | Homepage carousel. Only the first slide renders an `h1`. |
| `components/FormModal.tsx`, `FormTimestamp.tsx`, `formStyles.ts` | Shared form pieces. |
| `lib/seo.ts` | `pageMetadata()` — builds each page's canonical and OG block. |
| `lib/events.ts` | Upcoming events plus their Event JSON-LD. |

## SEO

Every page must call `pageMetadata({ title, description, path })`. That helper sets the canonical and
rebuilds the full `openGraph` block, because **Next.js replaces nested metadata objects rather than
merging them** — a page that omits it inherits the homepage's canonical and silently deindexes itself.

- One `<h1>` per page. The slider keeps all slides mounted, so only slide 1 may carry it.
- `app/sitemap.ts` holds a hand-maintained `lastModified` per route. Bump the date when you change a
  page's content; stamping every route with the build time makes Google ignore `lastmod`.
- Structured data: LocalBusiness on the homepage, Event on `/events`, BreadcrumbList on nested pages.

## Form spam protection

Layered, in `app/actions/sendEmail.ts`:

1. **Honeypot** — a hidden `botcheck` field. If filled, the action reports success so bots learn nothing.
2. **Timing** — `FormTimestamp` stamps mount time in the browser; submissions faster than 2.5s are dropped.
3. **Rate limit** — 4 submissions per IP per 15 minutes, per server instance.
4. **Validation** — required fields, email format, length caps on every field.
5. **Link heuristics** — links in a name field, or more than two in the message, are treated as spam.
6. **Escaping** — all values are HTML-escaped before going into the email body.

Not yet in place: a CAPTCHA. Cloudflare Turnstile is the natural addition if spam gets through, but it
needs a site key and secret.
