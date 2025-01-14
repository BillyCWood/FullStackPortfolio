<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue';

const props = defineProps<{dark?: boolean}>();
const dark = props.dark;

</script>

<template>
    <header>
        <ThemeToggle :dark=dark @changeTheme="dark = $event" />
    </header>
</template>