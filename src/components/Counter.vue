<script setup lang="ts">
import { useCounter } from '@/composables/useCounter';

const { state, increment, decrement } = useCounter();
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
