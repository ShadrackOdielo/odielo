<script setup lang="ts">
</script>

<template>
    <UCard id="contact" class="relative rounded-none ring-0" :ui="{body:'flex  flex-col gap-4' , header:'px-2 '}" >
        <template #header>
            <!-- a large greyed out background text and smaller darker overlay -->
            <div class="relative w-full inset-0 flex items-center justify-center">
                <h1 class="md:text-9xl text-6xl font-bold opacity-20">Contact</h1>
                <h1 class="md:text-3xl text-xl absolute font-bold text-center">Get in Touch</h1>
            </div>
        </template> 
        <UCard class="flex flex-col items-center text-center h-full shadow-lg">
            <template #header>
                <h1 class="text-2xl font-bold"><span class="underline text-secondary">Let's</span> Connect</h1>
            </template>
            <p class="text-lg mb-4">I would love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out.</p>
            <UButton
                variant="solid"
                color="neutral"
                icon="i-lucide-mail"
                label="Email Me"
                class="mt-4"
                href="mailto:shadrackodielo@gmail.com"
            />
            <UButton
                variant="solid"
                color="neutral"
                icon="i-lucide-linkedin"
                label="Connect on LinkedIn"
                class="mt-2"
                href="https://www.linkedin.com/in/shadrackodielo/"
                target="_blank"
            />
            <UButton
                variant="solid"
                color="neutral"
                icon="i-lucide-github"
                label="View My GitHub"
                class="mt-2"
                href="https://github.com/shadrackodielo"
                target="_blank"
            />
            <UButton
                variant="solid"
                color="neutral"
                icon="i-lucide-twitter"
                label="Follow Me on Twitter"
                class="mt-2"
                href="https://twitter.com/odielo_ke"
                target="_blank"
            />
           </UCard>
    </UCard>
</template>