# Mockup

This folder contains the removable API mockup layer for the LMS frontend.

Enable it with:

```env
VITE_ENABLE_MOCK=true
```

Files:

- `data.ts`: mock users, profile, courses, lessons, quizzes, and progress.
- `routes.ts`: endpoint matching and response shaping.
- `adapter.ts`: axios adapter wrapper.
- `index.ts`: small installer used by `src/services/apiClient.ts`.

To remove the mockup later, delete this folder and remove the `setupMockupApi`
import/call from `src/services/apiClient.ts`.
