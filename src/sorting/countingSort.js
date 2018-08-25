
/**
 * 计数排序
 *
 * @export
 * @param {Array<Number>} ary
 * @returns
 */
export default function countingSort(ary) {
  let len = ary.length
  let max = -Infinity
  let min = Infinity
  let result = []

  if(len <= 1) {
    return ary
  }

  ary.forEach(e => {
    if(e > max) max = e
    if(e < min) min = e
  })

  let k = max - min + 1

  let countAry = new Array(k)
  ary.forEach(e => {
    countAry[e - min] = (countAry[e - min] || 0) + 1
  })
  countAry.forEach((e, i) => {
    for(let j = 0; j < e; j++) {
      result.push(i + min)
    }
  })

  return result
}