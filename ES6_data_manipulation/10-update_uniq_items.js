export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  const newMap = new Map();
  for (const [item, quantity] of map.entries()) {
    if (quantity === 1) {
      newMap.set(item, 100);
    } else {
      newMap.set(item, quantity);
    }
  }

  return newMap;
}
