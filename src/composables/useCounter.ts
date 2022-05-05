import { reactive } from 'vue';

type State = {
  count: number;
};

export const useCounter = () => {
  const state = reactive<State>({
    count: 0,
  });

  const increment = () => {
    state.count += 1;
  };

  const decrement = () => {
    state.count -= 1;
  };

  return {
    state,
    increment,
    decrement,
  };
};
