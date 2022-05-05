<script setup lang="ts">
import { reactive } from 'vue';

type State = {
  count: number;
};
const state = reactive<State>({
  count: 0,
});

const increment = () => {
  state.count += 1;
};

const decrement = () => {
  state.count -= 1;
};
</script>

<template>
  <div>
    {{ state.count }}
  </div>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>
