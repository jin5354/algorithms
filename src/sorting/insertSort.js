import {swap} from '../utils'

export default function insertSort(ary) {
  let len = ary.length
  for(let i = 1; i < len; i++) {
    for(let j = i - 1; j>= 0; j--) {
      if(ary[j] > ary[j + 1]) {
        swap(ary, j, j + 1)
      }else {
        break
      }
    }
  }
  return ary
}