<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ThemeToggle from './components/ThemeToggle.vue'
import Navbar from './components/Navbar.vue'
import TheWelcome from './components/TheWelcome.vue'
import { useTheme } from './composables/useTheme'
import Testimonials from './components/Testimonials.vue'
import Hero from './components/Hero.vue'

const { isDarkMode } = useTheme()
</script>

<template>
  <div class="app-container" :class="{ 'dark-theme': isDarkMode }">
    <Navbar />
    <main class="content-container">
      <Hero />
      <Testimonials />
      <TheWelcome />
      <RouterView />
    </main>
    <ThemeToggle class="theme-toggle" />
  </div>
</template>

<style>
:root {
  --bg-color: #F5F5F0;
  --text-color: #333333;
  --content-max-width: 1200px;
}

.dark-theme {
  --bg-color: #1A2238;
  --text-color: #E0E0E0;
}

.theme-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Playwrite NG Modern", cursive;
  min-height: 100vh;
  background-color: var(--bg-color);
  transition: background-color 0.3s ease;
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: var(--text-color);
  transition: color 0.3s ease;
}

.content-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
  max-width: var(--content-max-width);
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  body {
    font-size: 14px;
  }

  .content-container {
    padding: 1rem;
  }

  .theme-toggle {
    bottom: 10px;
    right: 10px;
  }
}
</style>