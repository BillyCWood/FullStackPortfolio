<script setup lang="ts">
const props = defineProps<{message?: String}>();
</script>

<template>
    <button class="relative group">

        <div class="
            w-56 h-10 content-center absolute left-0 top-0 z-[1] 
            transition-transformation duration-300 group-hover:translate-x-1 group-hover:translate-y-1
            bg-secondary-light text-white text-xl
            dark:bg-secondary-dark  dark:text-dark text-center"
        >
            {{ props.message }}
        </div>
        <div class="
            w-56 h-10 absolute left-1 top-1
            bg-primary-light border-[1px] border-black
            dark:bg-white  dark:border-0"
            >
        </div>
    </button>

</template>