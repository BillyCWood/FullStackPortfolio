<script setup lang="ts">

import { ref } from 'vue';
import { jobs, projects } from '~/constants';

const selectedJob = ref(0);
const selectedProj = ref(0);

const styledJob = (index: number) => ({
    "border-b-2 border-secondary-light text-secondary-light lg:font-semibold": index == selectedJob.value
})
const styledProj = (index: number) => ({
    "border-b-2 border-secondary-light text-secondary-light lg:font-semibold": index == selectedProj.value
})


</script>

<template>
    <div class="grid grid-cols-2 grid-rows-2 min-h-screen pt-32 text-lg lg:text-xl font-light gap-y-10 max-xl:px-10">
        <div id="exp-list" class="">
            <h1 class="text-primary-light text-4xl lg:text-6xl font-medium">Experience</h1>
            <ul class="flex flex-col gap-y-8 mt-10 border-l-2 border-secondary-light">
                <li v-for="(job, index) in jobs" :key="index" class="hover:cursor-pointer py-3 pl-2 max-w-64 lg:max-w-80" :class="styledJob(index)" @click="selectedJob = index">{{ job.name }}</li>
            </ul>

        </div>

        <div id="exp-description" class="flex flex-col gap-y-4">
            <button class="w-56 py-4 font-normal flex justify-center items-center gap-x-2 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" viewBox="0 0 512 512">
                    <path class="fill-secondary-light dark:fill-secondary-dark" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
                </svg>
                <p class="translate-y-2 group-hover:text-secondary-light dark:group-hover:text-secondary-dark">Download Resume</p>
            </button>
            <i class="font-extralight mt-6">{{ jobs[selectedJob].time }}</i>
            <p>{{ jobs[selectedJob].description }}</p>
            <div>
                <p>Tech Stack & Duties:</p>
                <ul class="ml-5">
                    <li v-for="(item, index) in jobs[selectedJob].stackDuties" :key="index">- {{ item }}</li>
                </ul>
            </div>
        </div>

        <div id="proj-list">
            <h1 class="text-primary-light text-4xl lg:text-6xl font-medium">Projects</h1>
            <ul class="flex flex-col gap-y-8 mt-10 border-l-2 border-secondary-light">
                <li v-for="(project, index) in projects" :key="index" class="hover:cursor-pointer py-3 pl-2 max-w-44 lg:max-w-60" :class="styledProj(index)" @click="selectedProj = index">{{ project.name }}</li>
            </ul>
        </div>
        <div id="proj-description" class="flex flex-col gap-y-4 pt-28">
            <i class="font-extralight">{{ projects[selectedProj].time }}</i>
            <p class="">{{ projects[selectedProj].description }}</p>
            <div>
                <p>Tech Stack & Duties:</p>
                <ul class="ml-5">
                    <li v-for="(item, index) in projects[selectedProj].stackDuties" :key="index">- {{ item }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>