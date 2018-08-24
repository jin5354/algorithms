import test from 'ava'
import {INPUT, EXPECTED} from './sortCases'
import selectSort from '../../src/sorting/selectSort'

test('selectSort', t => {
  t.deepEqual(INPUT.map(e => selectSort(e)), EXPECTED)
})