import type { ModelSelection } from "@/providers/models/selection"

// Free usage no longer replaces or blocks the session composer.
// Keep the existing call signatures until the composer integration is removed.
export function useFreeLimit(_paid: () => boolean) {
  return {
    resetAt: () => null,
    active: () => false,
  }
}

export function SessionFreeLimitPanel(_props: {
  resetAt: number | null
  selection: () => ModelSelection | undefined
}) {
  return null
}
