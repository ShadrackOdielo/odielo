<script setup lang="ts">
import { ref, onMounted } from 'vue'

const jobs = ['Web Developer', 'Writer', 'Designer']
const currentText = ref('')
let jobIndex = 0
let charIndex = 0
let isDeleting = false

const typeSpeed = 150
const deleteSpeed = 75
const delayBetween = 2000

function typeWriter() {
  const fullText = jobs[jobIndex] || ''
  if (!isDeleting) {
    currentText.value = fullText.substring(0, charIndex + 1)
    charIndex++
    if (charIndex === fullText.length) {
      isDeleting = true
      setTimeout(typeWriter, delayBetween)
      return
    }
  } else {
    currentText.value = fullText.substring(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      isDeleting = false
      jobIndex = (jobIndex + 1) % jobs.length
    }
  }
  setTimeout(typeWriter, isDeleting ? deleteSpeed : typeSpeed)
}

onMounted(() => {
  typeWriter()
})
</script>

<template>
  <section
    id="home"
    class="relative w-full h-screen bg-[url(/images/test.jpg)] bg-cover bg-center flex flex-col items-center justify-center px-4 text-center"
  >
    <div class=" p-6 rounded-lg max-w-xl w-full">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold  mb-4">
        shadrack odielo
      </h1>
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-6">
        <span>{{ currentText }}</span><span class="border-r-2 border-white animate-pulse ml-1"></span>
      </h2>
      <a
        href="#contact"
        class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
      >
        Contact Me
      </a>
    </div>

    <a
      href="#about"
      class="absolute bottom-8 animate-bounce text-white"
      aria-label="Scroll down"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M19 9l-7 7-7-7"/>
      </svg>
    </a>
  </section>
</template>