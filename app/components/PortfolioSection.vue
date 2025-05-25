<script setup lang="ts">
</script>
<template>
    <section id="portfolio" class=" py-20 min-h-screen">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-6">My Portfolio</h2>
            <p class="text-lg mb-4">
                Here are some of the projects I have worked on. Each project showcases my skills in web development and design.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class=" p-4 rounded-lg shadow-lg">
                    <img src="/images/test.jpg" alt="Project 1" class="w-full h-auto rounded-lg mb-4">
                    <h3 class="text-xl font-semibold mb-2">Project 1</h3>
                    <p class="text-md">A brief description of Project 1.</p>
                </div>
                <div class=" p-4 rounded-lg shadow-lg">
                    <img src="/images/test.jpg" alt="Project 2" class="w-full h-auto rounded-lg mb-4">
                    <h3 class="text-xl font-semibold mb-2">Project 2</h3>
                    <p class="text-gray-700">A brief description of Project 2.</p>
                </div>
                <div class=" p-4 rounded-lg shadow-lg">
                    <img src="/images/test.jpg" alt="Project 3" class="w-full h-auto rounded-lg mb-4">
                    <h3 class="text-xl font-semibold mb-2">Project 3</h3>
                    <p class="text-gray-700">A brief description of Project 3.</p>
                </div>
            </div>
        </div>
    </section>
</template>