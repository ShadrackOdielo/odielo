<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue';

 useHead({
    title: 'Shadrack Odielo - Web Developer, Writer, Designer',
    meta: [
        { name: 'description', content: 'Welcome to my website. I am a web developer, writer, and designer.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
        { rel: 'icon', href: '/favicon.ico' },
    ]
})

</script>
<template>
    <div class="w-screen overscroll-none scroll-smooth">
        <AppHeader />
        <slot />
        <footer class="flex items-center justify-center p-4 bg-gray-800 text-white">
            <p>&copy; 2025 My Website. All rights reserved.</p>
        </footer>
    </div>
</template>