<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue';
import { ref } from 'vue';
import { useDark } from '@vueuse/core';
const isDark = useDark();

const isScrolled = ref(false);

window?.addEventListener('scroll', function(e) {
    
    isScrolled.value = (this.window.scrollY > 32);
})

</script>

<template>
    <div id="NavBar" 
        class="
        fixed w-full max-w-[1110px] left-0 right-0
        flex items-center justify-between mx-auto mt-5
        rounded-full px-5 py-3 z-10 transition-all duration-300"
        :class="{'bg-primary-light dark:bg-primary-dark shadow-sm shadow-black dark:shadow-white': isScrolled}"
    >
        <button>
            <NuxtImg v-if="!isDark && !isScrolled" src="/BillyWoodLogo_outline_black.png" width="88" />
            <NuxtImg v-if="!isDark && isScrolled" src="/BillyWoodLogo_outline_white_nofill.png" width="88" />
            <NuxtImg v-if="isDark" src="/BillyWoodLogo_fill_white.png" width="88" />
        </button>
        
        <div class="flex gap-x-6 text-2xl ">
            <button class="transition-colors duration-300 hover:text-secondary-dark dark:hover:text-secondary-dark" :class="{'text-white':isScrolled}">about</button>
            <button class="transition-colors duration-300 hover:text-secondary-dark dark:hover:text-secondary-dark" :class="{'text-white':isScrolled}">work</button>
            <button class="transition-colors duration-300 hover:text-secondary-dark dark:hover:text-secondary-dark" :class="{'text-white':isScrolled}">contact</button>
            <ThemeToggle />
        </div>
    </div>
</template>