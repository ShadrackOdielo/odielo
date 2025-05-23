<script setup lang="ts">

const navITems  = [
    {label: 'Home', to: '/', exactHash: true},
    {label: 'About', to: '/#about', exactHash: true},
    {label: 'Services', to: '/#services', exactHash: true},
    {label: 'Skills', to: '/#skills', exactHash: true},
    {label: 'Portfolio', to: '/#portfolio', exactHash: true},
    {label: 'Testimonials', to: '/#testimonials', exactHash: true},
    {label: 'Blog', to: '/blog'},
    {label: 'Contact', to: '/contact'},
]
</script>
<template>
  <header class="flex items-center justify-between px-4 w-full top-0 sticky bg-elevated">
    <div class="text-lg font-bold">My Website</div>
    <nav class="flex space-x-4">
     <UNavigationMenu :items="navITems"  variant='link' orientation="horizontal"/>
    </nav>
    <div class="flex items-center space-x-4">
      <UButton label="Login" variant="outline" color="neutral" />
      <UButton label="Sign Up" color="primary" />
    </div>
  </header> 
</template>
