<script setup lang="ts">
</script>

<template>
    <UCard id="contact" class="relative rounded-none ring-0" :ui="{body:'flex md:flex-row flex-col gap-4' , header:'px-2 '}" >
        <template #header>
            <!-- a large greyed out background text and smaller darker overlay -->
            <div class="relative w-full inset-0 flex items-center justify-center">
                <h1 class="md:text-9xl text-6xl font-bold opacity-20">Contact</h1>
                <h1 class="md:text-3xl text-xl absolute font-bold text-center">Get in Touch</h1>
            </div>
        </template> 
        <UCard class="flex flex-col items-center text-center h-full shadow-lg">
            <template #header>
                <UButton variant="ghost" block color="neutral" icon="i-lucide-mail" label="Email Me" class="text-2xl mb-4" />
            </template>
            <p class="text-lg">Feel free to reach out via email for any inquiries or collaborations.</p>
        </UCard>
        <UCard class="flex flex-col items-center text-center h-full shadow-lg">
            <template #header>
                <UButton variant="ghost" block color="neutral" icon="i-lucide-phone" label="Call Me" class="text-2xl mb-4" />
            </template>
            <p class="text-lg">You can also call me for a quick chat or discussion.</p>
        </UCard>
        <UCard class="flex flex-col items-center text-center h-full shadow-lg">
            <template #header>
                <UButton variant="ghost" block color="neutral" icon="i-lucide-map-pin" label="Visit Me" class="text-2xl mb-4" />
            </template>
            <p class="text-lg">If you're in the area, feel free to visit my office for a face-to-face meeting.</p>
        </UCard>
    </UCard>
</template>