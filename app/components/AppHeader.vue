<script setup lang="ts">
import ColorModeButton from './ColorModeButton.vue';

const open = ref(false);

// toggle open state of the slideover when the route or hash changes

const route = useRoute();
watch(() => route.path + route.hash, () => {
  open.value = false;
});


const navITems  = [
    {label: 'Home', to: '/', exactHash: true},
    {label: 'About', to: '/#about', exactHash: true},
    {label: 'Services', to: '/#services', exactHash: true},
    {label: 'Skills', to: '/#skills', exactHash: true},
    {label: 'Portfolio', to: '/#portfolio', exactHash: true},
    {label: 'Background', to: '/#background', exactHash: true},
    {label: 'Blog', to: '/blog'},
    {label: 'Contact', to: '/#contact', icon: 'i-heroicons-envelope-solid',},
]
</script>
<template>
  <header class="flex items-center justify-between px-4 w-full top-0 z-99 fixed  ">
    <NuxtLink color="neutral" to="/#" class="flex items-center space-x-2">
      <img v-if="$colorMode.value=='dark'" src="/images/logoWhite.png" alt="Logo" class="w-10 h-10 rounded-full" >
      <img v-else src="/images/logo.png" alt="Logo" class="w-10 h-10 rounded-full" >
    <div class="text-lg font-bold hidden md:visible">Shadrack Odielo.</div>
    </NuxtLink>
    <nav class="hidden md:flex space-x-4">
     <UNavigationMenu :items="navITems" color="neutral"  variant='link' orientation="horizontal" highlight />
    </nav>
    <div class="flex   items-center space-x-2">
     <ColorModeButton class="flex" />
     <div class="md:flex hidden items-center space-x-2">
     <UButton color="neutral" icon="i-lucide-github" variant='link' href="https://github.com/ShadrackOdielo" target="_blank" />
      <UButton color="neutral" icon="i-lucide-linkedin" variant='link' href="https://www.linkedin.com/in/shadrack-odielo/" target="_blank" />
      <UButton color="neutral" icon="i-lucide-twitter" variant='link' href="https://twitter.com/ShadrackOdielo" target="_blank" />
      </div>
  <USlideover
v-model:open="open"
  class="md:hidden "
  title="Menu">
    <UButton icon="i-lucide-menu" color="neutral" variant="ghost" />

    <template #body>
      <nav class="flex flex-col space-y-2">
        <!-- close slideover when a lin is clicked -->
        <UNavigationMenu :items="navITems"  variant='link' orientation="vertical" highlight />
      </nav>
    </template>
  </USlideover>
     </div>
  </header> 
</template>
