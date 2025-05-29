<script setup lang="js">
import ColorModeButton from './ColorModeButton.vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const open = ref(false);
// watch elements and return the active element's id'

const activeSection = ref('hero');

// function to detect the section currently in the viewport
const detectActiveSection = () => {
  const sectionIds = navItems
    .filter(item => item.to.includes('#'))
    .map(item => item.to.split('#')[1]);

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;

    const { top, bottom } = el.getBoundingClientRect();
    if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {

      activeSection.value = id;
      break;
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', detectActiveSection, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', detectActiveSection);
});


// watch for route changes to close the slideover
const route = useRoute();
watch(() => route.path + route.hash, () => {
  open.value = false;
});


const navItems  = [
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
      <img v-if="$colorMode.value=='dark'" src="/images/logoWhite.svg" alt="Logo" class="w-10 h-10 rounded-full" >
      <img v-else src="/images/logo.svg" alt="Logo" class="w-10 h-10 rounded-full" >
    <div class="text-lg font-bold hidden md:visible">Shadrack Odielo.</div>
    </NuxtLink>
    <nav class="hidden md:flex space-x-4">
      
      <UButton 
      v-for="item in navItems" :key="item.label"
        :label="item.label"
        :to="item.to"
        :exact-hash="item.exactHash"
        :icon="item.icon"
        color="neutral"
        :class="{'relative text-blue-800': activeSection === item.to.split('#')[1] || (item.to === '/' && activeSection === '')}"
        variant="link"
        :trailing-icon="activeSection === item.to.split('#')[1] ? 'i-lucide-dot' : ''"
        :ui="{trailingIcon: 'absolute bottom-0 left-1/2 text-blue-800'}"
      />

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
        <UNavigationMenu :items="navItems"  variant='link' orientation="vertical" highlight />
      </nav>
    </template>
  </USlideover>
     </div>
  </header> 
</template>
