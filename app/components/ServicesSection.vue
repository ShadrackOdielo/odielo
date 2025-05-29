<script setup lang="ts">

// a list of services i provide, icons and descriptions
const jobs = [
    {
        title: 'Web Development',
        description: 'Building responsive and modern websites using the latest technologies.',
        icon: 'i-lucide-code'
    },
    {
        title: 'UI/UX Design',
        description: 'Creating user-friendly interfaces and experiences that delight users.',
        icon: 'i-lucide-palette'
    },
    {
        title: 'SEO Optimization',
        description: 'Improving website visibility and ranking on search engines.',
        icon: 'i-lucide-search'
    },
    {
       title: 'copywriting',
        description: 'Crafting compelling content that engages and converts visitors.',
        icon: 'i-lucide-edit-2'
    }
];
</script>
<template>
<UCard id="services" class="relative  rounded-none ring-0" :ui="{body:'flex md:flex-row flex-col gap-4' , header:'px-2 '}" >
    <template #header>
        <!-- a large greyed out background text and smaller darker overlay -->
        <div class="relative w-full inset-0 flex items-center justify-center">
            <h1 class="md:text-9xl text-6xl  font-bold opacity-20">Services</h1>
            <h1 class="md:text-3xl text-xl absolute font-bold text-center">What I Do</h1>
        </div>
        </template> 
           <UCard v-for="service in jobs" :key="service.title" variant="subtle" class=" flex flex-col hover:bg-accented  items-center  text-center h-full shadow-lg">
            <UButton  variant="solid" :icon="service.icon" color="secondary" class="text-4xl mb-2 " />
            <h2 class="text-2xl font-bold text-secondary mb-2">{{ service.title }}</h2>
                <p class="text-lg">{{ service.description }}</p>
            </UCard>
</UCard> 
</template>