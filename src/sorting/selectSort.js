import {swap} from '../utils'

export default function selectSort(ary) {
  let len = ary.length

  if(len <= 1) {
    return ary
  }

  for(let i = 0; i < len - 1; i++) {
    let minIndex = i
    for(let j = i; j < len; j++) {
      if(ary[j] < ary[minIndex]) {
        minIndex = j
      }
    }
    if(minIndex !== i) {
      swap(ary, minIndex, i)
    }
  }
  return ary
}