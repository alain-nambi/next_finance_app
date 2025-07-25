# 🚀 Exemple : Routage avec `(auth)/signin` et `[[...signup]]` dans Next.js 15

## 📁 Structure du dossier `app/`

```
app/
├── (auth)/
│   ├── signin/
│   │   └── page.tsx
│   └── signup/
│       └── [[...signup]]/
│           └── page.tsx
├── layout.tsx
└── page.tsx
```

---

## 🔐 `(auth)/signin/page.tsx`

```tsx
// app/(auth)/signin/page.tsx

'use client'

export default function SignInPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Connexion</h1>
      <form>
        <label>Email</label>
        <input type="email" name="email" placeholder="email@example.com" />

        <label>Mot de passe</label>
        <input type="password" name="password" placeholder="••••••••" />

        <button type="submit">Se connecter</button>
      </form>
    </div>
  )
}
```

---

## 🧩 `(auth)/signup/[[...signup]]/page.tsx`

```tsx
// app/(auth)/signup/[[...signup]]/page.tsx

'use client'
import { useParams } from 'next/navigation'

export default function SignupPage() {
  const params = useParams()
  const steps = params.signup || []

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Inscription</h1>
      <p>Étapes d'URL capturées : {JSON.stringify(steps)}</p>

      {steps.length === 0 && <p>Étape initiale de l'inscription</p>}
      {steps[0] === 'step1' && <p>Étape 1 : Informations personnelles</p>}
      {steps[0] === 'step2' && <p>Étape 2 : Confirmation</p>}
    </div>
  )
}
```

---

## 📦 Layout `(auth)/layout.tsx`

```tsx
// app/(auth)/layout.tsx

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: '2px dashed gray', padding: '1rem' }}>
      <h2>Zone Authentification</h2>
      {children}
    </div>
  )
}
```

---

## 🧠 Explication

| Dossier / Fichier                      | Résultat dans l’URL                         | Rendu / Utilité                                     |
| -------------------------------------- | ------------------------------------------- | --------------------------------------------------- |
| `(auth)/signin/page.tsx`               | `/signin`                                   | Page de connexion simple                            |
| `(auth)/signup/[[...signup]]/page.tsx` | `/signup`, `/signup/step1`, `/signup/step2` | Page d'inscription multistep avec capture dynamique |
| `(auth)/layout.tsx`                    | N/A (pas dans l’URL)                        | Layout commun aux pages d'authentification          |

---

## 🔗 Documentation officielle Next.js

- [📁 Routing in App Directory](https://nextjs.org/docs/app/building-your-application/routing)
- [📌 Optional Catch-All Segments](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments)
- [📂 Route Groups](https://nextjs.org/docs/app/building-your-application/routing/grouping)

---

## ✅ Test des routes dans le navigateur

| URL visitée     | Comportement attendu                          |
| --------------- | --------------------------------------------- |
| `/signin`       | Formulaire de connexion                       |
| `/signup`       | Étape initiale de l'inscription               |
| `/signup/step1` | Affiche "Étape 1 : Informations personnelles" |
| `/signup/step2` | Affiche "Étape 2 : Confirmation"              |

