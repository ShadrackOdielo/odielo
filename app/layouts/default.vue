<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue';

</script>
<template>
    <div>
        <AppHeader />
        <slot />
        <footer class="flex items-center justify-center p-4 bg-gray-800 text-white">
            <p>&copy; 2025 My Website. All rights reserved.</p>
        </footer>
    </div>
</template>