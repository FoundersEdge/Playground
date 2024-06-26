<template>
  <div class="toggle-container" @click="toggleDarkMode" :class="{ 'dark-mode': isDarkMode }">
    <div class="celestial-body" :class="{ 'is-moon': isDarkMode }">
      <div class="sun-rays" v-if="!isDarkMode">
        <div class="ray" v-for="n in 8" :key="n" :style="{ transform: `rotate(${n * 45}deg)` }"></div>
      </div>
      <div class="moon-surface" v-if="isDarkMode">
        <div class="crater" v-for="n in 3" :key="n"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '../composables/useTheme'; // Adjust the import path as needed

const { isDarkMode, toggleDarkMode } = useTheme();
</script>

<style scoped>
.toggle-container {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #87CEEB;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease;
  overflow: hidden;
}

.toggle-container.dark-mode {
  background-color: #1A2238;
}

.celestial-body {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #FFD700;
  position: relative;
  transition: all 0.5s ease;
}

.celestial-body.is-moon {
  background-color: #FFFFFF;
  box-shadow: inset -8px 0 0 0 #E0E0E0;
}

.sun-rays {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: rotate 10s linear infinite;
}

.ray {
  position: absolute;
  width: 2px;
  height: 20px;
  background-color: #FFD700;
  top: -10px;
  left: 50%;
  transform-origin: bottom center;
}

.moon-surface {
  position: absolute;
  width: 100%;
  height: 100%;
}

.crater {
  position: absolute;
  background-color: #E0E0E0;
  border-radius: 50%;
}

.crater:nth-child(1) {
  width: 8px;
  height: 8px;
  top: 10px;
  left: 10px;
}

.crater:nth-child(2) {
  width: 6px;
  height: 6px;
  top: 25px;
  left: 22px;
}

.crater:nth-child(3) {
  width: 4px;
  height: 4px;
  top: 15px;
  left: 30px;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.celestial-body:not(.is-moon) {
  animation: pulse 2s ease-in-out infinite;
}
</style>