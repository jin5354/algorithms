import MinHeap from '../data-structure/heap/MinHeap'

/**
 * 堆排序
 *
 * @export
 * @param {Array<Number>} ary
 * @returns
 */
export default function heapSort(ary) {
  const result = []
  const heap = new MinHeap()

  heap.build(ary)
  while(heap.data.length) {
    result.push(heap.poll())
  }
  return result
}