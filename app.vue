<script setup lang="ts">
import "./app.css";

import Home from './sections/Home.vue';
import About from './sections/About.vue';
import Work from './sections/Work.vue';
import Contact from './sections/Contact.vue';
import Footer from './components/Footer.vue';
import NavBar from "./components/NavBar.vue";

</script>

<template>

  <div id="body" class="flex flex-col relative min-h-screen">

      <NavBar />

      <Home />
    <div class="max-w-[1064px] mx-auto">
      <About />
      <Work />
      <Contact />
    </div>


      <Footer />

    </div>

</template>
