## 🔗 Liens utiles

- [📺 Vidéo contenant la suivi du tutoriel](https://www.youtube.com/watch?v=N_uNKAus0II)


### Initialize Application with Bun
```bash
bunx create-next-app@latest finance_app

√ Would you like to use TypeScript? ... Yes
√ Would you like to use ESLint? ... Yes
√ Would you like to use Tailwind CSS? ... Yes
√ Would you like your code inside a `src/` directory? ... No
√ Would you like to use App Router? (recommended) ...Yes
√ Would you like to use Turbopack for `next dev`? ... Yes
√ Would you like to customize the import alias (`@/*` by default)? ... No
```


### Install ShadCN UI with Next.js
```bash
bunx shadcn@latest init
```

- Install button component with `bunx shadcn@latest add button`

### Create a new page for authentication

- [x] Create a new page for authntication (sign-in, sign-up)
- [x] Install and configure Clerk using `bun add @clerk/nextjs`
- [x] [Configure Clerk](https://clerk.com/docs/quickstarts/nextjs)
- [x] Add .env.local file to store your Clerk API keys
- [x] Add Clerk Provider to `app/layout.tsx`
- [x] Add middleware for clerk
- [x] Use sign-in and sign-up components from Clerk
- [x] Create a protected route in middleware
- [x] Redesign the UI of sign-in pages
- [x] Add loader if Clerk's page is not ready
- [x] Make signin design more beautiful
- [x] Set #10c484 color as main color palette
