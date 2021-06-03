import { sum } from '@/main/sum'

describe('Simple Test', () => {
  it('should sum', () => {
    expect(sum(1)).toBe(2)
  })
})
