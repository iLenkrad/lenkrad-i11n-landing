# Lenkrad Tracker App

## Project Overview
Lenkrad Tracker App is a landing page for a **White Label GPS Tracking & IoT Platform**. It provides information about the platform's features, solutions, and contact information, supporting both Turkish and English languages.

### Core Technologies
- **Framework:** Next.js 16.2.6 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS 4.2.0
- **UI Components:** Shadcn UI (Radix UI + Lucide Icons)
- **Internationalization:** Custom i18n implementation in `lib/i18n.ts`
- **Analytics:** @vercel/analytics

### Architecture
- `app/`: Next.js App Router directory.
  - `page.tsx`: Main landing page entry point.
  - `layout.tsx`: Root layout with font and theme providers.
- `components/`:
  - `ui/`: Base Shadcn UI components.
  - `*-section.tsx`: Main sections of the landing page (Hero, Solutions, Features, etc.).
  - `language-provider.tsx`: Context provider for i18n.
  - `language-switcher.tsx`: Component to toggle between TR and EN.
- `lib/`:
  - `i18n.ts`: Translation strings and locale types.
  - `utils.ts`: Tailwind CSS class merging utility.
- `hooks/`: Custom React hooks (e.g., `use-mobile`, `use-toast`).
- `public/`: Static assets including platform screenshots and icons.

## Building and Running

### Prerequisites
- Node.js (Latest LTS recommended)
- pnpm (Preferred package manager)

### Commands
- `pnpm install`: Install dependencies.
- `pnpm dev`: Start the development server at `http://localhost:3000`.
- `pnpm build`: Build the application for production.
- `pnpm start`: Start the production server.
- `pnpm lint`: Run ESLint for code quality checks.

## Development Conventions

### Internationalization (i18n)
The project uses a custom i18n system. All text should be added to `lib/i18n.ts` and accessed via the `useLanguage` hook:
```tsx
const { t } = useLanguage();
return <h1>{t.hero.title}</h1>;
```

### Styling
- Use **Tailwind CSS** for all styling.
- Follow the design system established in `app/globals.css`.
- Use the `cn` utility from `lib/utils.ts` for conditional class merging.

### Components
- Prefer using or extending components in `components/ui/`.
- New sections should be created as separate files in the `components/` directory.

### Typescript
- Maintain strict typing where possible.
- Note: `next.config.mjs` currently has `ignoreBuildErrors: true` enabled, which should be addressed in production environments.
