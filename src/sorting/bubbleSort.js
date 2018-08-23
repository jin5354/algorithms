import {swap} from '../utils'

export default function bubbleSort(ary) {
  let len = ary.length
  let endSwap = true
  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len - i - 1; j++) {
      if(ary[j + 1] < ary[j]) {
        swap(ary, j, j + 1)
        endSwap = false
      }
    }
    // 如果遍历一圈发现没有需要冒泡的了，那就排序完毕直接退出，剩下的也不用遍历了
    if(endSwap) {
      break
    }
  }
  return ary
}