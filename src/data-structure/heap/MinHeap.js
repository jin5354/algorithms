import Heap from './Heap'

/**
 * 小根堆
 *
 * @export
 * @class MinHeap
 * @extends {Heap}
 */
export default class MinHeap extends Heap {
  heapifyOrderComparator(parent, child) {
    return parent <= child
  }
}