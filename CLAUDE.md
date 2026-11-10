# Vite Showcase App Context for Claude

Refer to root documentation:
- [`../AGENTS.md`](file:///c:/Users/user/Desktop/kidpreneur-test-project/AGENTS.md)
- [`../docs/ARCHITECTURE.md`](file:///c:/Users/user/Desktop/kidpreneur-test-project/docs/ARCHITECTURE.md)
- [`../docs/API_REFERENCE.md`](file:///c:/Users/user/Desktop/kidpreneur-test-project/docs/API_REFERENCE.md)
- [`../docs/FRONTEND_GUIDE.md`](file:///c:/Users/user/Desktop/kidpreneur-test-project/docs/FRONTEND_GUIDE.md)

### VITE App Specific Notes:
- Framework: Vite 8 + React 19 + React Router v7 (`react-router-dom`).
- Styling: Tailwind CSS v4 (`@tailwindcss/vite`).
- API Client: Consumes Next.js backend API at `VITE_API_URL` (configured via `src/services/api.ts` and `src/services/portfolioApi.ts`).
- Dev / Tunnel: `start-tunnels.ps1` updates `VITE/.env` with active Cloudflare Tunnel URL.

