# Camper Bot — Personal Profile App

A multi-language, multi-runtime profile service built to satisfy the original freeCodeCamp backend curriculum while demonstrating production-grade expansion.

## Quick start

```bash
cd build-a-personal-profile-app
npm i
npm start
```

Then visit `http://localhost:3000`.

## Routes

| Route | Response |
|-------|----------|
| `GET /` | `Welcome to Camper Bot's homepage!` |
| `GET /hobbies` | `I cycle, go boating, and play guitar.` |
| `GET /skills` | `JavaScript, Node.js, and Express.js!` |
| `GET /api/profile` | JSON profile object |

## Project structure

```
.
├── index.js              # Express entry point (primary)
├── public/
│   └── index.html        # Single-page profile UI
├── api/
│   ├── server.ts         # TypeScript/Express variant
│   └── ProfileService.java
├── scripts/
│   └── profile_service.py
├── package.json
└── README.md
```

## Why it looks the way it does

The public UI uses a CSS-only glassmorphism card, gradient aurora background, 3D tilt on mouse movement, and a live `/api/profile` fetch demo. Everything is bundled into one HTML file so it runs instantly from any static host or from Express's `public/` folder.

## Sources

- Express.js routing documentation. (n.d.). Express. https://expressjs.com/en/guide/routing.html
- Mozilla Developer Network. (2023). Fetch API. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
