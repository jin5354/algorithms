import test from 'ava'
import bubbleSort from '../../src/sorting/bubbleSort'
import selectSort from '../../src/sorting/selectSort'
import insertSort from '../../src/sorting/insertSort'

const INPUT = [
  [4, 3, 2, 1],
  [1, 3, 5, 8, 6, 10, 3],
  [1],
  []
]

const EXPECTED = [
  [1, 2, 3, 4],
  [1, 3, 3, 5, 6, 8, 10],
  [1],
  []
]

test('bubbleSort', t => {
  t.deepEqual(INPUT.map(e => bubbleSort(e)), EXPECTED)
})

test('selectSort', t => {
  t.deepEqual(INPUT.map(e => selectSort(e)), EXPECTED)
})

test('insertSort', t => {
  t.deepEqual(INPUT.map(e => insertSort(e)), EXPECTED)
})