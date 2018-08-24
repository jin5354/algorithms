import test from 'ava'
import {INPUT, EXPECTED} from './sortCases'
import bubbleSort from '../../src/sorting/bubbleSort'

test('bubbleSort', t => {
  t.deepEqual(INPUT.map(e => bubbleSort(e)), EXPECTED)
})