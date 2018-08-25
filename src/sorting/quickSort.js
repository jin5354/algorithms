/**
 * quickSort
 *
 * @export
 * @param {Array<Number>} ary
 * @returns
 */
export default function quickSort(ary) {
  if(ary.length <= 1) {
    return ary
  }

  let pivot = Math.floor((ary.length - 1) / 2)
  // 若要考虑重复元素，需判等，小于 concat 等于 concat 大于
  return quickSort(ary.filter(e => e < ary[pivot])).concat(ary.filter(e => e === ary[pivot])).concat(quickSort(ary.filter(e => e > ary[pivot])))
}