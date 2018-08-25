import {swap} from '../utils'

/**
 * insertSort
 *
 * @export
 * @param {Array<Number>} ary
 * @returns
 */
export default function insertSort(ary) {
  let len = ary.length

  if(len <= 1) {
    return ary
  }

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