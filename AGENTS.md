# AGENTS.md

## Cursor Cloud specific instructions

### Services overview

This is a Next.js 15.3 + Supabase starter template. Two services must run for full development:

| Service | Start command | Default port |
|---|---|---|
| Supabase local stack | `npx supabase start` | API 54321, DB 54322, Studio 54323 |
| Next.js dev server | `npm run dev` | 3000 |

### Starting Supabase (requires Docker)

Docker must be running before `npx supabase start`. In the cloud VM, Docker is installed and the daemon is started during setup. Run `sudo dockerd &>/tmp/dockerd.log &` if the daemon is not running, then wait ~5 seconds before issuing Docker commands. Use `sg docker -c "npx supabase start"` so the `ubuntu` user can access Docker without re-login.

After Supabase starts, extract JWT keys with `sg docker -c "npx supabase status -o env"` and populate `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=<ANON_KEY from status output>
SUPABASE_SERVICE_ROLE_KEY=<SERVICE_ROLE_KEY from status output>
```

The local Supabase keys are deterministic — they stay the same across `supabase stop` / `supabase start` cycles, so `.env.local` only needs to be created once.

### Gotchas

- **Missing `supabase/seed.sql`**: The `supabase/config.toml` references `./seed.sql` but the repo ships without it. Create an empty `supabase/seed.sql` before running `supabase db reset` or it will fail.
- **Pre-existing build type error**: `npm run build` fails with a type error in `app/(dashboard)/dashboard/page.tsx` (signOut action return type). The dev server (`npm run dev`) is unaffected because Turbopack does not enforce strict types at runtime.
- **Email confirmation disabled**: Local Supabase has `enable_confirmations = false`, so signup works immediately without email verification.

### Standard commands

See `README.md` and `package.json` scripts for lint (`npm run lint`), test (`npx vitest run`), dev server (`npm run dev`), and database commands (`npm run db:*`).


narrate every video you record like a human — i gave you an ELEVEN_LABS_API_KEY. first record the video like you normally would, then generate the audio, and then put them together (and upload the final video as an artifact.) see https://elevenlabs.io/docs/llms-full.txt and use voice ID: wWWn96OtTHu1sn8SRGEr