export function swap(ary, i, j) {
  let tmp = ary[i]
  ary[i] = ary[j]
  ary[j] = tmp
}