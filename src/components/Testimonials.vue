<template>
    <section class="testimonials">
      <h2 class="section-title">What Our Readers Say</h2>
      <div class="testimonial-container">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial" ref="testimonialRefs">
          <div class="testimonial-content">
            <p class="quote">"{{ testimonial.quote }}"</p>
            <div class="author">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="avatar">
              <div class="author-info">
                <p class="name">{{ testimonial.name }}</p>
                <p class="title">{{ testimonial.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const testimonials = [
    {
      quote: "LibraMe transformed my reading habits! I've discovered so many amazing books I wouldn't have found otherwise.",
      name: "Alice Johnson",
      title: "Avid Reader",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      quote: "The personalized recommendations are spot-on. It's like having a librarian who knows my taste perfectly!",
      name: "Mark Thompson",
      title: "Book Enthusiast",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
      quote: "I love how easy it is to track my reading progress and set goals. LibraMe has made reading more fun and engaging!",
      name: "Sarah Lee",
      title: "Busy Professional",
      avatar: "https://i.pravatar.cc/150?img=3"
    }
  ];
  
  const testimonialRefs = ref([]);
  
  const handleScroll = () => {
    testimonialRefs.value.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
      if (isVisible) {
        el.classList.add('fade-in');
      }
    });
  };
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style scoped>
  .testimonials {
    padding: 4rem 2rem;
    
  }
  
  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #333;
  }
  
  .testimonial-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .testimonial {
    background-color: #fff;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
    margin-bottom: 2rem;
    width: 100%;
  }
  
  .testimonial:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  .testimonial.fade-in {
    animation: fadeIn 0.8s ease forwards;
  }
  
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .quote {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 1.5rem;
  }
  
  .author {
    display: flex;
    align-items: center;
  }
  
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 1rem;
  }
  
  .author-info {
    display: flex;
    flex-direction: column;
  }
  
  .name {
    font-weight: bold;
    color: #333;
    margin-bottom: 0.2rem;
  }
  
  .title {
    font-size: 0.9rem;
    color: #777;
  }
  
  @media (max-width: 768px) {
    .testimonials {
      padding: 3rem 1rem;
    }
  
    .section-title {
      font-size: 2rem;
    }
  }
  </style>