# Local Development

This repository uses Bun workspaces. The pinned package manager version is declared in the root `package.json`.

## Getting started

```bash
bun install
bun run dev
```

## Common development commands

| Command | Purpose |
| --- | --- |
| `bun run dev` | Start the CLI development entry point |
| `bun run dev:desktop` | Start the desktop app |
| `bun run dev:web` | Start the web app |
| `bun run dev:site` | Start the documentation/site app |
| `bun run lint:changed` | Lint changed files |
| `bun run typecheck` | Run workspace type checks |
| `bun run check` | Run the repository lint and type-check workflow |

## Testing note

The root `test` script intentionally exits with a warning. Run tests from the relevant workspace/package instead of invoking `bun run test` at the repository root.

## Before submitting changes

1. Keep changes scoped to the package or service being worked on.
2. Run the checks relevant to the files you changed.
3. Review `git diff` before committing.
