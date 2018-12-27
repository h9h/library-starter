/* global describe, it, before */

import { A, func1 } from '../lib/library-starter.js'

describe('Class A', () => {
  it('constructs', () => {
    const a = new A()
    expect(a).toBeDefined()
  })
})

describe('Function', () => {
  it('calculates', () => {
    expect(func1(3)).toEqual(6)
  })
})
