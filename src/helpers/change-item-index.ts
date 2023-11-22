export function changeItemIndex(
  arr: unknown[],
  fromIndex: number,
  toIndex: number
) {
  const newArr = JSON.parse(JSON.stringify(arr));
  const element = newArr[fromIndex];
  newArr.splice(fromIndex, 1);
  newArr.splice(toIndex, 0, element);

  return newArr;
}
