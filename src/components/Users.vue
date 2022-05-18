<script lang="ts" setup>
import { useUserHandler } from '@/composables/useUserHandler';

const { state } = useUserHandler();
</script>

<template>
  <div>
    <div :class="state.isOpen && 'isOpen'">hoge</div>
    <!-- <template v-for="user in state.users" :key="user.id">
      <div>{{ user.id }} {{ user.name }}</div>
    </template> -->
  </div>
</template>
