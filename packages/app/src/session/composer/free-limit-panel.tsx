// Free usage no longer replaces or blocks the session composer.
// The compatibility exports are removed together with their callers in a later cleanup stage.
export function useFreeLimit() {
  return {
    resetAt: () => null,
    active: () => false,
  }
}

export function SessionFreeLimitPanel() {
  return null
}
