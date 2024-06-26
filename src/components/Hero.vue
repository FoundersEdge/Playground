<template>
    <section class="hero">
      <div class="hero-content">
        <h1 class="title">
          <span v-for="(letter, index) in titleLetters" :key="index" class="letter">
            {{ letter }}
          </span>
        </h1>
        <p class="subtitle">Discover your next favourite story today!</p>
        <button class="cta-button" @click="startExploring">Create an Account</button>
      </div>
      <div class="book-stack">
        <div v-for="(book, index) in books" :key="index" class="book" :style="{ backgroundColor: book.color }">
          {{ book.title }}
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  
  const title = "LibraMe";
  const titleLetters = computed(() => title.split(''));
  
  const books = ref([
    { title: "Fantasy", color: "#FFD700" },
    { title: "Mystery", color: "#4B0082" },
    { title: "Romance", color: "#FF69B4" },
    { title: "Sci-Fi", color: "#00CED1" },
    { title: "Jonny", color: '#00CED1'}
  ]);
  
  const startExploring = () => {
    console.log("Start exploring books!");
    // Add your navigation logic here
  };
  
  onMounted(() => {
    // Animation logic can be added here if needed
  });
  </script>
  
  <style scoped>
  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    padding: 0 5%;
    margin-top: -100px;
    
    overflow: hidden;
  }
  
  .hero-content {
    max-width: 100%;
  }
  
  .title {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  
  .letter {
    display: inline-block;
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: calc(var(--i) * 0.1s);
  }
  
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0;
    animation: slideIn 1s forwards;
    animation-delay: 0.8s;
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .cta-button {
    padding: 12px 24px;
    font-size: 1.2rem;
    background-color: #ffffff;
    color: #764ba2;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  
  .book-stack {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
  }
  
  .book {
    width: 200px;
    height: 60px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-weight: bold;
    border-radius: 5px;
    transform: rotate(-5deg);
    animation: stackBooks 0.5s forwards;
    opacity: 0;
  }
  
  @keyframes stackBooks {
    from {
      opacity: 0;
      transform: translateX(50px) rotate(-5deg);
    }
    to {
      opacity: 1;
      transform: translateX(0) rotate(-5deg);
    }
  }
  
  .book:nth-child(odd) {
    transform: rotate(5deg);
  }
  
  .book:nth-child(1) { animation-delay: 0.2s; }
  .book:nth-child(2) { animation-delay: 0.4s; }
  .book:nth-child(3) { animation-delay: 0.6s; }
  .book:nth-child(4) { animation-delay: 0.8s; }
  .book:nth-child(5) { animation-delay: 1s;}
  </style>