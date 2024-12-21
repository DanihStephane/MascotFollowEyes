# MascotFollowEyes

# 🐱 Kawaii Login Form

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)

Un formulaire de connexion interactif et adorable avec une mascotte kawaii qui réagit aux mouvements de la souris et aux interactions utilisateur.

## ✨ Caractéristiques

- 🐱 Mascotte interactive qui suit le curseur avec ses yeux
- 👀 Animation fluide des yeux avec interpolation
- 🙈 La mascotte cache ses yeux lors de la saisie du mot de passe
- 🎨 Design moderne avec des dégradés et effets de flou
- 📱 Interface responsive et adaptative

## 🛠️ Technologies

- **React** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icônes

## 🚀 Installation

```bash
# Cloner le projet
git clone [url-du-repo]

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 🎯 Structure du Projet

```
src/
├── components/
│   ├── LoginForm.tsx    # Formulaire de connexion principal
│   └── Mascot.tsx       # Composant de la mascotte interactive
├── hooks/
│   └── useEyeMovement.ts # Hook personnalisé pour l'animation des yeux
└── App.tsx              # Point d'entrée de l'application
```

## 🎨 Personnalisation

La mascotte et le formulaire peuvent être personnalisés via les classes Tailwind CSS. Les couleurs, dimensions et animations sont facilement modifiables dans les fichiers composants.

## 📝 License

MIT
