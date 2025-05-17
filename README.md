#  Books Frontend

Quoti est une application web développée avec React.js pour le frontend et NestJS pour le backend. Elle permet de gérer une librairie de citations tirées de livres que nous aimons, avec des fonctionnalités complètes pour la gestion des : Auteurs, Livres,Citations,Utilisateurs,Catégories....

## Fonctionnalités principales

- Création, modification, suppression et consultation des auteurs et des livres

- Association d’auteurs à des livres

- Ajout de citations à partir des livres

- Organisation des citations par catégories

- Authentification des utilisateurs (email et Google OAuth)

##  Stack technique

- React.js
- @tanstack/react-query
-react-router
- Axios
- Vite
- Tailwind CSS 
- react-hook-form
- postman
- Backend : un api de nestJs,prisma orm

##  Structure du projetsrc/
│
├── api/ # Fonctions Axios pour les appels API
├── hooks/ # Custom hooks avec React Query
├── page/ # Pages principales (Authors, Books, Login...)
├── store/ # (optionnel) État global, Zustand
└── main.jsx # Point d'entrée de l'application

##  Lancer l'application

```bash
npm install
npm run dev
