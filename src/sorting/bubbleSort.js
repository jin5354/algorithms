import {swap} from '../utils'

/**
 * bubbleSort
 *
 * @export
 * @param {Array<Number>} ary
 * @returns
 */
export default function bubbleSort(ary) {
  let len = ary.length
  let endSwap = true

  if(len <= 1) {
    return ary
  }

  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len - i - 1; j++) {
      if(ary[j + 1] < ary[j]) {
        swap(ary, j, j + 1)
        endSwap = false
      }
    }
    // 如果遍历一圈发现没有需要冒泡的了，说明排序完毕可直接退出，剩下的也不用遍历了
    if(endSwap) {
      break
    }
  }
  return ary
}