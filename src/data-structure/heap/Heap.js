
/**
 * 堆
 *
 * @export
 * @class Heap
 */
export default class Heap {

  constructor() {
    this.data = []
  }

  /**
   * 获取左子节点索引
   *
   * @param {Number} parentIndex
   * @returns
   * @memberof Heap
   */
  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1
  }

  /**
   * 获取右子节点索引
   *
   * @param {Number} parentIndex
   * @returns
   * @memberof Heap
   */
  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2
  }

  /**
   * 获取父节点索引
   *
   * @param {Number} childIndex
   * @memberof Heap
   */
  getParentIndex(childIndex) {
    Math.floor((childIndex - 1) / 2)
  }

  /**
   *  获取左子节点
   *
   * @param {Number} parentIndex
   * @returns
   * @memberof Heap
   */
  leftChild(parentIndex) {
    return this.data[this.getLeftChildIndex(parentIndex)]
  }

  /**
   * 获取右子节点
   *
   * @param {Number} parentIndex
   * @returns
   * @memberof Heap
   */
  rightChild(parentIndex) {
    return this.data[this.getRightChildIndex(parentIndex)]
  }

  /**
   * 获取父节点
   *
   * @param {Number} childIndex
   * @returns
   * @memberof Heap
   */
  parent(childIndex) {
    return this.data[this.getParentIndex(childIndex)]
  }

  /**
   * 交换节点
   *
   * @param {Number} index1
   * @param {Number} index2
   * @memberof Heap
   */
  swap(index1, index2) {
    let tmp = this.data[index1]
    this.data[index1] = this.data[index2]
    this.data[index2] = tmp
  }

  /**
   * 添加节点
   *
   * @param {Number} item
   * @memberof Heap
   */
  add(item) {
    this.data.push(item)
    this.heapify()
  }

  /**
   * 堆化
   *
   * @param {String} direction up/down
   * @memberof Heap
   */
  heapify(direction) {
    switch(direction) {
      // 由堆最底层向上层堆化
      case('up'): {
        let currentIndex = this.data.length - 1
        while(this.parent(currentIndex) !== undefined && !this.heapifyOrderComparator(this.parent(currentIndex), this.data[currentIndex])) {
          this.swap(this.getParentIndex(currentIndex), currentIndex)
          currentIndex = this.getParentIndex(currentIndex)
        }
        break
      }
      // 由堆根节点向下层堆化
      case('down'): {
        let currentIndex = 0
        while(this.leftChild(currentIndex) !== undefined) {
          let nextIndex
          // 先从左右节点中找到要交换的那个
          if(this.rightChild(currentIndex) !== undefined && this.heapifyOrderComparator(this.rightChild(currentIndex), this.leftChild(currentIndex))){
            nextIndex = this.getRightChildIndex(currentIndex)
          }else {
            nextIndex = this.getLeftChildIndex(currentIndex)
          }

          if(this.heapifyOrderComparator(this.data[currentIndex], this.data[nextIndex])) {
            break
          }else {
            this.swap(currentIndex, nextIndex)
            currentIndex = nextIndex
          }
        }
        break
      }
    }
  }

  /**
   * 取数，小根堆取最小值，大根堆取最大值
   *
   * @returns
   * @memberof Heap
   */
  poll() {
    if(!this.data.length) {
      return null
    }
    if(this.data.length === 1) {
      return this.data.pop()
    }
    // 取完数后，将堆最后一个值放置到根节点
    // 然后从上向下堆化
    let target = this.data[0]
    this.data[0] = this.data.pop()
    this.heapify('down')
    return target
  }


  /**
   *  根据数组建堆
   *
   * @param {Array<Number>} ary
   * @memberof Heap
   */
  build(ary) {
    this.data = []
    ary.forEach(e => {
      this.add(e)
    })
  }

  /**
   *  大根堆/小根堆应用不同的检查条件
   *
   * @param {Number} parent
   * @param {Number} child
   * @memberof Heap
   */
  heapifyOrderComparator(parent, child) {
    throw new Error(`
      You have to implement heap pair comparision method
      for parent and child values.
    `);
  }
}