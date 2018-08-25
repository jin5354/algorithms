
/**
 * 归并排序
 *
 * @export
 * @param {Array<Number>} ary
 * @returns
 */
export default function mergeSort(ary) {
  if(ary.length <= 1) {
    return ary
  }else {
    let pivot = Math.floor(ary.length / 2)
    return merge(mergeSort(ary.slice(0, pivot)), mergeSort(ary.slice(pivot)))
  }
}

function merge(leftAry, rightAry) {
  let result = []
  while(leftAry.length && rightAry.length) {
    result.push(leftAry[0] <= rightAry[0] ? leftAry.shift() : rightAry.shift())
  }
  return result.concat(leftAry.length ? leftAry : rightAry)
}