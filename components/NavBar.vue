<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue';
import { ref } from 'vue';
import { useDark } from '@vueuse/core';
const isDark = useDark();

const isScrolled = ref(false);
const isOpen = ref(false);

const toggleNav = () => {
    isOpen.value = !isOpen.value;
    console.log(isOpen.value);
}

window?.addEventListener('scroll', function(e) {
    
    isScrolled.value = (this.window.scrollY > 32);
})

</script>

<template>
    <div id="NavBar" 
        class="
        fixed w-full max-w-[1110px] left-0 right-0
        flex items-center justify-between mx-auto lg:mt-5
        lg:rounded-full px-5 py-3 z-10 transition-all duration-300"
        :class="{'bg-primary-light dark:bg-primary-dark shadow-sm shadow-black dark:shadow-white': isScrolled}"
    >
        <button>
            <NuxtImg v-if="!isDark && !isScrolled" src="/BillyWoodLogo_outline_black.png" width="88" />
            <NuxtImg v-if="!isDark && isScrolled" src="/BillyWoodLogo_outline_white_nofill.png" width="88" />
            <NuxtImg v-if="isDark" src="/BillyWoodLogo_fill_white.png" width="88" />
        </button>
        
        <div class="hidden lg:flex gap-x-6 text-2xl">
            <button class="transition-colors duration-300 hover:text-secondary-dark dark:hover:text-secondary-dark" :class="{'text-white':isScrolled}">about</button>
            <button class="transition-colors duration-300 hover:text-secondary-dark dark:hover:text-secondary-dark" :class="{'text-white':isScrolled}">work</button>
            <button class="transition-colors duration-300 hover:text-secondary-dark dark:hover:text-secondary-dark" :class="{'text-white':isScrolled}">contact</button>
            <ThemeToggle />
        </div>

        <div class="flex flex-col gap-y-2 p-3 lg:hidden hover:cursor-pointer overflow-hidden" @click="toggleNav">
            <span class="w-10 border-b-2 border-black dark:border-white transition-transform duration-1000" :class="{'rotate-[225deg] translate-y-1':isOpen, 'border-white':isScrolled}" />
            <span class="w-10 border-b-2 border-black dark:border-white transition-transform duration-1000" :class="{'-translate-y-[6px] -rotate-[225deg]':isOpen, 'border-white':isScrolled}" />
            <span class="w-7 border-b-2 border-black dark:border-white transition-transform duration-1000" :class="{'-translate-x-12':isOpen, 'border-white':isScrolled}" />
        </div>

        <div class="lg:hidden" :class="{'hidden': !isOpen, 'flex flex-col items-end float-right absolute right-0 top-20 text-white bg-primary-light dark:bg-primary-dark border-t-[1px] border-white w-screen h-screen translate-x-0':isOpen}">
            <div class="flex flex-col mt-10 mr-7 text-xl gap-y-4">
                <button class="transition-colors duration-300 hover:text-secondary-dark dark:hover:text-secondary-dark text-right p-3" :class="{'text-white':isScrolled}">about</button>
                <button class="transition-colors duration-300 hover:text-secondary-dark dark:hover:text-secondary-dark  text-right p-3" :class="{'text-white':isScrolled}">work</button>
                <button class="transition-colors duration-300 hover:text-secondary-dark dark:hover:text-secondary-dark  text-right p-3" :class="{'text-white':isScrolled}">contact</button>
            </div>
            <div class="mr-10 mt-10">
                <ThemeToggle />
            </div>
        </div>

    </div>
</template>