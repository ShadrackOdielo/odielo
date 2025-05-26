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
    <div class="container mx-auto md:w-1/2 px-4">
            <h2 class="text-3xl font-bold underline  mb-6">Who am I?</h2>
            <p class="text-lg mb-4">
                I am a passionate web developer with a focus on creating beautiful and functional websites.
                My journey in web development started with a curiosity about how websites work, and it has grown into a full-fledged career.
                I love coding, learning new technologies, and sharing my knowledge with others.
            </p>
            <p class="text-lg mb-4">
                In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and writing technical articles.
                I believe in continuous learning and strive to improve my skills every day.
            </p>
            <p class="text-lg mb-4">
                If you're interested in collaborating or just want to chat about web development, feel free to reach out!
            </p>
            
        </div>
        
</UCard> 
</template>