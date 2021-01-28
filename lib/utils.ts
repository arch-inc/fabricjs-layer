export function getIndexOf<T>(target: T, array: T[]) {
  const lastIndex = array.length - 1;
  return array[lastIndex] === target ? lastIndex : array.indexOf(target);
}
