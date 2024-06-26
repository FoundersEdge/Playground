<template>
    <nav :class="{ 'scrolled': scrolled, 'dark-mode': isDarkMode }">
      <div class="nav-content">
        <div class="logo">LibraMe</div>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useTheme } from '../composables/useTheme';
  
  const { isDarkMode } = useTheme();
  
  const scrolled = ref(false);
  
  const handleScroll = () => {
    scrolled.value = window.scrollY > 50;
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
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 1200px;
    padding: 15px 30px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 50px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
  }
  
  nav.scrolled {
    top: 15px;
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 30px;
  }
  
  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-weight: bold;
    font-size: 1.5rem;
    color: #333;
    transition: all 0.5s ease;
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
  
  @media (max-width: 768px) {
    nav {
      padding: 10px 20px;
    }
  
    nav.scrolled {
      padding: 8px 15px;
    }
  
    .logo {
      font-size: 1.2rem;
    }
  
    .nav-links li {
      margin: 0 10px;
    }
  
    .nav-links a {
      font-size: 0.9rem;
    }
  
    nav.scrolled .logo {
      font-size: 1.1rem;
    }
  
    nav.scrolled .nav-links a {
      font-size: 0.8rem;
    }
  }
  </style>