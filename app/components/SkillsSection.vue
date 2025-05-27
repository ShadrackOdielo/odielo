<script setup lang="ts">
// a list of icons representing programming languages, frameworks, and tools[tailwind,nuxt 3,vue 3,supabase,html5,js,ts,css3,vscode,figma,canva,git,github,linux,sql] I use from the logos library, and their names for the tooltips
const skillIcons = 
    [
        { icon: 'i-logos-tailwindcss', name: 'Tailwind CSS' },
        { icon: 'i-logos-nuxt-icon', name: 'Nuxt 3' },
        { icon: 'i-logos-vue', name: 'Vue 3' },
        { icon: 'i-logos-supabase', name: 'Supabase' },
        { icon: 'i-logos-html-5', name: 'HTML5' },
        { icon: 'i-logos-javascript', name: 'JavaScript' },
        { icon: 'i-logos-typescript-icon', name: 'TypeScript' },
        { icon: 'i-logos-css-3', name: 'CSS3' }
    ];
</script>
<template>
<UCard id="skills" class="relative  rounded-none ring-0" :ui="{body:'flex md:flex-row flex-col gap-4' , header:'px-2 '}" >
    <template #header>
        <!-- a large greyed out background text and smaller darker overlay -->
        <div class="relative w-full inset-0 flex items-center justify-center">
            <h1 class="md:text-9xl text-6xl  font-bold opacity-20">Skills</h1>
            <h1 class="md:text-3xl text-xl absolute font-bold text-center">Tools I use</h1>
        </div>
        </template> 
        <UCard class="w-full">
            <template #header>
                <h1>Skills</h1>
            </template>
            <div class="flex flex-col ">
                <UButton
                v-for="skill in skillIcons"
                    :key="skill.name"
                    block
                    variant="ghost"
                    color="neutral"
                    :icon="skill.icon"
                    :label="skill.name"
                />
        </div></UCard>
        <UCard class="w-full ring-0" >
                <h1>Tools I use</h1>
            <div class="flex flex-wrap justify-center items-center gap-4">
                
                <UTooltip
                    v-for="skill in skillIcons"
                    :key="skill.name"
                    color="neutral"
                    :text="skill.name"
                    >
                    <UIcon
                        :name="skill.icon"
                        class="text-4xl w-20 h-20 hover:text-primary transition-colors duration-300"
                        />
                </UTooltip>
            </div>
        </UCard>
        
</UCard> 
</template>