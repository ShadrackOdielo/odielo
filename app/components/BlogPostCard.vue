<template>
  <div class="bg-white shadow-md rounded-lg p-4">
    <h2 class="text-xl font-bold">{{ title }}</h2>
    <p class="text-gray-600">{{ excerpt }}</p>
    <NuxtLink :to="`/blog/${slug}`" class="text-blue-500 hover:underline">Read more</NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  excerpt: string;
  slug: string;
}>();
</script>

<style scoped>
/* Add any specific styles for the BlogPostCard component here */
</style>