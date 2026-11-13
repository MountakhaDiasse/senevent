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
