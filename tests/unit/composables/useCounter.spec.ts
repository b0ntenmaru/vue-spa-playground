import { useCounter } from '@/composables/useCounter';

describe('useCounter', () => {
  describe('state', () => {
    const { state } = useCounter();

    it('デフォルトの値が0であること', () => {
      expect(state.count).toEqual(0);
    });
  });

  describe('increment', () => {
    const { state, increment } = useCounter();
    increment();

    it('state.countがインクリメントされていること', () => {
      expect(state.count).toEqual(1);
    });
  });

  describe('decrement', () => {
    const { state, decrement } = useCounter();

    decrement();

    it('state.countがデクリメントされていること', () => {
      expect(state.count).toEqual(-1);
    });
  });
});
