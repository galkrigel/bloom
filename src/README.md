# Layer rules

- `domain/`   pure TypeScript. Imports NOTHING from other layers.
- `data/`     implements the interfaces in `domain/repositories`. May import `domain/`.
- `store/`    Redux Toolkit. May import `domain/`.
- `features/` feature UI. May import `domain/`, `store/`, `ui/`. NEVER `data/`.
- `ui/`       design system. Imports nothing from the app.
- `lib/`      pure helpers.

`app/` (outside src) holds expo-router routes only, and stays thin.
