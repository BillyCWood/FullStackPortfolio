<script setup lang="ts">

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button @click="toggleDark()">
    <span class="flex h-8 w-[60px] items-center rounded-full p-1" :class="{ 'bg-primary-light': isDark, 'bg-secondary-light justify-end': !isDark }">
      <span class="h-6 w-6 rounded-full bg-white" />
    </span>
  </button>
  
</template>


