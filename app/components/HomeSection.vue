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
    class="relative w-full h-screen bg-[url(/images/test.jpg)]  bg-cover bg-no-repeat top-0 flex flex-col items-center justify-center  px-4 text-center"
  ><div class="absolute flex flex-col items-center justify-center text-center inset-0 backdrop-brightness-50 backdrop-blur-sm">
    <div class=" p-6 rounded-lg max-w-xl  w-full">
      <img
        src="/images/home.jpg"
        alt="Shadrack Odielo"
        class="w-24 h-24  rounded-full grayscale  mx-auto mb-4 ring-4 ring-bg  shadow-lg"
      >
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold  mb-4">
        Shadrack Odielo
      </h1>
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-6">
        <span>{{ currentText }}</span><span class="border-r-2 border-white animate-pulse ml-1"/>
      </h2>
      <p class="text-lg sm:text-xl md:text-2xl  mb-8">
        I am a passionate web developer, writer, and designer.
      </p>
      <UButton label="Get in Touch"
        color="neutral"
        variant="solid"
        href="#contact"
        class="px-6 py-3 text-lg sm:text-xl md:text-2xl font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
      />
    </div>
<UTooltip
      text="Scroll down to learn more"
      placement="top">
    <UButton
      icon="i-heroicons-arrow-down-solid"
      class="absolute bottom-4 rounded-full animate-bounce"
      color="neutral"
      variant="ghost"
      href="#about"
    /></UTooltip>
    </div>
  </section>
</template>