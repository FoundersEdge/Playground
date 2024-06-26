import { ref, watch } from 'vue'

const isDarkMode = ref(false)


if (typeof window !== 'undefined') {
  isDarkMode.value = localStorage.getItem('darkMode') === 'true'
} 

watch(isDarkMode, (newValue) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('darkMode', newValue.toString())
  }
})

export function useTheme() {
  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value
    updateHTMLClass()
  }

  function updateHTMLClass() {

    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark-theme', isDarkMode.value)
    }
  }

 
  updateHTMLClass()

  return {
    isDarkMode,
    toggleDarkMode
  }
}