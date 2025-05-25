<script setup lang="ts">
</script>
<template>
<UCard id="about" class="relative" :ui="{body:'flex md:flex-row flex-col' , header:'bg-white'}" >
    <template #header>
        <!-- a large greyed out background text and smaller darker overlay -->
        <div class="relative inset-0 flex items-center justify-center">
            <h1 class="text-9xl text-gray-300 font-bold opacity-20">About Me</h1>
            <h1 class="text-6xl text-gray-800 left-10 font-bold">About Me</h1>
        </div>
        </template> 
    <div class="flex justify-center items-center w-full md:w-1/2 p-4">
                <img src="/images/face.jpg" alt="About Me" class="w-48 h-auto rounded-lg shadow-lg">
        </div>       
    <div class="container mx-auto md:w-1/2 px-4">
            <h2 class="text-3xl font-bold  mb-6">About Me</h2>
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