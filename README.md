# SenEvent

Application d'evenements a Dakar : web (React + Vite), mobile (Expo) et logique partagee (`packages/shared`) dans un monorepo npm workspaces, avec Supabase.

## Structure
- `apps/web` : application web
- `apps/mobile` : application mobile Expo
- `packages/shared` : logique metier partagee (`@senevent/shared`)

## En ligne
- Application web : https://senevent-mountakha.vercel.app
- Deploiement continu : chaque merge sur main met la production a jour,
  chaque Pull Request recoit une URL de previsualisation.
- Application Android (APK) :
  https://expo.dev/accounts/mountakhadiasse/projects/senevent/builds/1c11fdf7-4b48-4f9a-ba4e-c662cb450009
- Version mobile : 1.0.0 (profil EAS "preview")

## Lancer le projet en local
- npm install a la racine
- Web : apps/web, creer .env.local (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY), npm run dev
- Mobile : apps/mobile, creer .env (EXPO_PUBLIC_SUPABASE_URL, EXPO_PUBLIC_SUPABASE_ANON_KEY), npx expo start
