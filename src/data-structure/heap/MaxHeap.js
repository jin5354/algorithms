import Heap from './Heap'

/**
 * 大根堆
 *
 * @export
 * @class MaxHeap
 * @extends {Heap}
 */
export default class MaxHeap extends Heap {
  heapifyOrderComparator(parent, child) {
    return parent >= child
  }
}