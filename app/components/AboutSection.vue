<script setup lang="ts">
</script>
<template>
<UCard id="about" class="relative rounded-none ring-0" :ui="{body:'flex md:flex-row flex-col' , header:'px-2 ring-0'}" >
    <template #header>
        <!-- a large greyed out background text and smaller darker overlay -->
        <div class="relative w-full inset-0 flex items-center justify-center">
            <h1 class="md:text-9xl text-6xl  font-bold opacity-20">About Me</h1>
            <h1 class="md:text-3xl text-xl absolute font-bold text-center">About Me</h1>
        </div>
        </template> 
    <div class="flex justify-center items-center w-full md:w-1/2 p-4">
                <img src="/images/face.jpg" alt="About Me" class="w-96 h-auto hover:grayscale rounded-lg shadow-lg">
        </div>       
    <div class="container mx-auto md:w-1/2 text-center px-4">
        <h2 class="text-3xl font-bold mb-4">Hello, I'm Shadrack Odielo</h2>
        <p class="text-lg mb-4">
            I'm a passionate web developer with a love for creating beautiful and functional websites. 
            With a background in computer science and a keen eye for design, I strive to deliver exceptional user experiences.
        </p>
        <p class="text-lg mb-4">
            I specialize in front-end development, crafting responsive and accessible interfaces that engage users across all devices. 
            My goal is to bring your ideas to life with clean, efficient code and a focus on performance.
        </p>
        <p class="text-lg mb-4">
            When I'm not coding, you can find me exploring the latest web technologies, contributing to open-source projects, or sharing my knowledge through blogging and speaking engagements.
        </p>
        <p class="text-lg mb-4">
            Let's work together to create something amazing! Feel free to reach out to me via the contact form or connect with me on social media.
        </p>
            <UButton color="neutral" variant="solid" href="#contact" class="mt-4"/>
        </div>
        
</UCard> 
</template>