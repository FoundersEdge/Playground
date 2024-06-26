<template>
    <nav :class="{ 'scrolled': scrolled, 'dark-mode': isDarkMode }">
      <div class="nav-content">
        <div class="logo">LibraMe</div>
        <div class="hamburger" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="nav-links-container" :class="{ 'active': isMenuOpen }">
          <ul class="nav-links">
            <li><a href="#home" @click="closeMenu">Home</a></li>
            <li><a href="#about" @click="closeMenu">About</a></li>
            <li><a href="#services" @click="closeMenu">Services</a></li>
            <li><a href="#contact" @click="closeMenu">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useTheme } from '../composables/useTheme';
  
  const { isDarkMode } = useTheme();
  
  const scrolled = ref(false);
  const isMenuOpen = ref(false);
  
  const handleScroll = () => {
    scrolled.value = window.scrollY > 50;
  };
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  
  const closeMenu = () => {
    isMenuOpen.value = false;
  };
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style scoped>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px 5%;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
  }
  
  nav.scrolled {
    padding: 10px 5%;
    background-color: rgba(255, 255, 255, 0.9);
  }
  
  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .logo {
    font-weight: bold;
    font-size: 1.5rem;
    color: #333;
    transition: all 0.5s ease;
  }
  
  .nav-links-container {
    display: flex;
  }
  
  .nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-links li {
    margin: 0 15px;
  }
  
  .nav-links a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.3s ease;
    position: relative;
  }
  
  .nav-links a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #333;
    transition: width 0.3s ease;
  }
  
  .nav-links a:hover::after {
    width: 100%;
  }
  
  nav.scrolled .logo {
    font-size: 1.3rem;
  }
  
  nav.scrolled .nav-links a {
    font-size: 0.9rem;
  }
  
  /* Dark mode styles */
  nav.dark-mode {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  nav.dark-mode.scrolled {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  nav.dark-mode .logo,
  nav.dark-mode .nav-links a {
    color: #fff;
  }
  
  nav.dark-mode .nav-links a::after {
    background-color: #fff;
  }
  
  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }
  
  .hamburger span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 5px 0;
    transition: all 0.3s ease;
  }
  
  nav.dark-mode .hamburger span {
    background-color: #fff;
  }
  
  @media (max-width: 768px) {
    .hamburger {
      display: flex;
      z-index: 2;
    }
  
    .hamburger.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
  
    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }
  
    .hamburger.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
  
    .nav-links-container {
      position: fixed;
      top: 0;
      right: -100%;
      width: 100%;
      height: 100vh;
      background-color: rgba(255, 255, 255, 0.95);
      transition: right 0.5s ease;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .nav-links-container.active {
      right: 0;
    }
  
    nav.dark-mode .nav-links-container {
      background-color: rgba(0, 0, 0, 0.95);
    }
  
    .nav-links {
      flex-direction: column;
      align-items: center;
    }
  
    .nav-links li {
      margin: 20px 0;
    }
  
    .nav-links a {
      font-size: 1.2rem;
    }
  }
  </style>