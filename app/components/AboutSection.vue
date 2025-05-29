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
         
    <UCard class="w-full md:w-1/2 ring-0 p-4 shadow-lg">
        <template #header>
            <h1 class="text-2xl font-bold"><span class="underline text-secondary">Who</span> am I? </h1>
        </template>
        <p class="text-lg mb-4">I am a passionate software developer with a focus on creating efficient and scalable web applications. My journey in technology has been driven by a love for problem-solving and continuous learning.</p>
        <p class="text-lg mb-4">In my free time, I enjoy contributing to open-source projects, exploring new technologies, and sharing knowledge with the developer community.</p>
        <UButton
            variant="solid"
            color="neutral"
            icon="i-lucide-link"
            label="View My Resume"
            class="mt-4"
            href="/resume.pdf"
            target="_blank"
        />
        </UCard><div class="flex justify-center items-center w-full md:w-1/2 p-4">
                <img src="/images/face.jpg" alt="About Me" class="w-96 h-auto grayscale hover:grayscale-0 space-x-reverse rounded-lg ring-4 ring-secondary shadow-lg">
        </div>  
        
</UCard> 
</template>