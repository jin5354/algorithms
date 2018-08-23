import test from 'ava'
import bubbleSort from '../../src/sorting/bubbleSort'

test('bubbleSort', t => {
  const ary = [4, 3, 2, 1]
  bubbleSort(ary)
  t.deepEqual(ary, [1, 2, 3, 4])
})