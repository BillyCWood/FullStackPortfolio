<script setup lang="ts">

const props = defineProps<{dark?: boolean}>();

import { ref } from 'vue'
import { useToggle } from "@vueuse/core";

const isChecked = ref(false)
const toggleDark = useToggle(props.dark);


const handleCheckboxChange = () => {
  isChecked.value = !isChecked.value;
  toggleDark;
}
</script>

<template>
  
</template>


