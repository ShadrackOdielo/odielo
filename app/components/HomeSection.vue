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
    id="hero"
    class="relative ring border-b  w-full h-screen dark:bg-[url(/images/homeblk.jpg)] bg-gradient-to-br from-neutral-50 via-secondary-50/30 to-accent-100/20  dark:bg-contain  dark:bg-black bg-no-repeat top-0 flex flex-col items-center justify-center  px-4 text-center"
  ><div class="absolute flex flex-col items-center justify-center text-center inset-0 dark:backdrop-brightness-50 ">
    <div class=" p-6 rounded-lg max-w-xl  w-full">
      <h1 class="text-4xl sm:text-5xl md:text-6xl   mb-4">
        Hi, I'm
      </h1>
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold  mb-4">
        Shadrack Odielo
      </h1>
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-medium  mb-6">
        <span>and I'm a </span><span class="text-secondary">{{ currentText }}</span><span class="border-r-2  animate-pulse ml-1"/>
      </h2>
      <p class="text-lg sm:text-xl md:text-2xl  mb-8">
        Welcome to my page.
      </p>
      <div class="flex flex-col items-center " >
        <UButtonGroup>
          <UButton
            variant="ghost"
            color="neutral"
            icon="i-uil-github"
            href="https://github.com/ShadrackOdielo"
            target="_blank"
            />
          <UButton
            variant="ghost"
            icon="i-uil-linkedin"
            color="neutral"
            href="https://www.linkedin.com/in/shadrack-odielo-30258a212/"
            target="_blank"
            />
          <UButton
            variant="ghost"
            color="neutral"
            icon="i-uil-behance"
            href="https://www.behance.net/shadrackodielo"
            target="_blank"
            />
          
        </UButtonGroup>
        <div class="flex flex-row items-center justify-center mt-4">
        <UButton
          color="secondary"
          variant="solid"
          to="/#about"
          label="learn more"
        />
        <UButton
          color="neutral"
         label="Portfolio"
          variant="outline"
          class="ml-4"
          href="/#portfolio"
          icon="i-heroicons-briefcase-solid"
        />
          </div>
      </div>
    </div>
      
    <UButton
      icon="i-heroicons-chevron-down-solid"
      class="absolute bottom-4 rounded-full animate-bounce"
      color="neutral"
      variant="ghost"
      href="#about"

    />
    </div>
  </section>
</template>