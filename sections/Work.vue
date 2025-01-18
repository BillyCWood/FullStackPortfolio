<script setup lang="ts">

import Button from '../components/Button.vue';

import { ref } from 'vue';
import { jobs, projects } from '~/constants';

const selectedJob = ref(0);
const selectedProj = ref(0);

const styledJob = (index: number) => ({
    "lg:border-b-2 border-secondary-light text-secondary-light lg:font-semibold": index == selectedJob.value
})
const styledProj = (index: number) => ({
    "lg:border-b-2 border-secondary-light text-secondary-light lg:font-semibold": index == selectedProj.value
})


</script>

<template>
    <section id="work">
        <div class="border-y-[1px] border-primary-light dark:border-primary-dark grid grid-cols-1 grid-rows-[repeat(2,_18rem_minmax(0,_30rem))] lg:grid-cols-2 lg:grid-rows-[repeat(2,_minmax(0,_40rem))] mb-40 lg:mb-28 max-lg:pb-64 mt-16 pt-16 text-lg lg:text-xl font-light lg:gap-y-10 max-xl:px-5">
            <div id="exp-list" class="">
                <h1 class="text-primary-light text-4xl lg:text-6xl font-medium">Experience</h1>
                <a href="/Resume_WilliamWood_2025_NoShepherds.pdf" download="Resume_WilliamWood_2025.pdf" target="_blank" class="w-56 py-4 font-normal lg:hidden flex justify-center items-center gap-x-2 group -translate-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" viewBox="0 0 512 512">
                        <path class="fill-secondary-light dark:fill-secondary-dark" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
                    </svg>
                    <p class="translate-y-2 group-hover:text-secondary-light dark:group-hover:text-secondary-dark">Download Resume</p>
                </a>
                
                <ul class="flex max-lg:divide-x divide-white lg:flex-col lg:gap-y-8 my-10 lg:border-l-2 border-secondary-light max-lg:overflow-x-scroll">
                    <li v-for="(job, index) in jobs" :key="index" class="hover:cursor-pointer p-3 w-fit text-nowrap " :class="styledJob(index)" @click="selectedJob = index">{{ job.name }}</li>
                </ul>
                <a :href="jobs[selectedJob].url" target="_blank" class="hidden lg:flex">
                    <Button message="View Site" />
                </a>
            </div>
            
            <div id="exp-description" class="flex flex-col gap-y-4">
                <button class="w-56 py-4 font-normal hidden lg:flex justify-center items-center gap-x-2 group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" viewBox="0 0 512 512">
                        <path class="fill-secondary-light dark:fill-secondary-dark" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
                    </svg>
                    <p class="translate-y-2 group-hover:text-secondary-light dark:group-hover:text-secondary-dark">Download Resume</p>
                </button>
                <i class="font-extralight lg:mt-6">{{ jobs[selectedJob].time }}</i>
                <p>{{ jobs[selectedJob].description }}</p>
                <div>
                    <p>Tech Stack & Duties:</p>
                    <ul class="ml-5">
                        <li v-for="(item, index) in jobs[selectedJob].stackDuties" :key="index">⚡{{ item }}</li>
                    </ul>
                </div>
                <a :href="jobs[selectedJob].url" target="_blank" class="lg:hidden w-56">
                    <Button message="View Site" />
                </a>
            </div>
            
            
            <div id="proj-list" class="max-lg:mt-36">
                <h1 class="text-primary-light text-4xl lg:text-6xl font-medium">Projects</h1>
                <ul class="flex max-lg:divide-x divide-white lg:flex-col lg:gap-y-8 my-10 lg:border-l-2 border-secondary-light max-lg:overflow-x-scroll">
                    <li v-for="(project, index) in projects" :key="index" class="hover:cursor-pointer p-3 w-fit text-nowrap " :class="styledProj(index)" @click="selectedProj = index">{{ project.name }}</li>
                </ul>
                <a :href="projects[selectedProj].url" target="_blank" class="hidden lg:flex">
                    <Button message="View Project" />
                </a>
            </div>
            
            <div id="proj-description" class="flex flex-col gap-y-4 pt-4 max-lg:mt-20">
                <i class="font-extralight">{{ projects[selectedProj].time }}</i>
                <p class="">{{ projects[selectedProj].description }}</p>
                <div>
                    <p>Tech Stack & Duties:</p>
                    <ul class="ml-5">
                        <li v-for="(item, index) in projects[selectedProj].stackDuties" :key="index">⚡{{ item }}</li>
                    </ul>
                </div>
                <a :href="projects[selectedProj].url" target="_blank" class="lg:hidden w-56">
                    <Button message="View Project" />
                </a>
            </div>
        </div>
    </section>
    </template>