<script setup lang="ts">

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
        <!-- <AppHeader /> -->
        <NavbarMenu />
        <slot />
        <AppFooter />
    </div>
</template>