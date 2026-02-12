export function getAllFamilies(registry) {
  if (typeof registry !== "object" || registry === null
    || Array.isArray(registry)
  ) {
    return []
  }

  return Object.values(registry)
}

const registry = [1,2,3]
getAllFamilies(registry)