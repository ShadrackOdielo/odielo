<script setup lang="ts">
// a list of icons representing programming languages, frameworks, and tools[tailwind,nuxt 3,vue 3,supabase,html5,js,ts,css3,vscode,figma,canva,git,github,linux,sql] I use from the logos library, and their names for the tooltips
const languages = [
    { name: 'JavaScript', icon: 'i-logos-javascript' },
    { name: 'TypeScript', icon: 'i-logos-typescript-icon' },
    { name: 'HTML5', icon: 'i-logos-html-5' },
    { name: 'CSS3', icon: 'i-logos-css-3' },
    { name: 'Python', icon: 'i-logos-python' },
    { name: 'Java', icon: 'i-logos-java' },
    { name: 'C++', icon: 'i-logos-c-plusplus' },
    { name: 'Kotlin', icon: 'i-logos-kotlin-icon' },

    { name: 'SQL', icon: 'i-logos-sqlite-icon' },
]
const frameworks = [
    { name: 'Vue 3', icon: 'i-logos-vue' },
    { name: 'Nuxt 3', icon: 'i-logos-nuxt-icon' },

    { name: 'Tailwind CSS', icon: 'i-logos-tailwindcss-icon' },
    { name: 'Supabase', icon: 'i-logos-supabase-icon' },
    { name: 'Express.js', icon: 'i-logos-express' },
    { name: 'Node.js', icon: 'i-logos-nodejs-icon' },
]
const tools = [
    { name: 'Figma', icon: 'i-logos-figma' },
    { name: 'Canva', icon: 'i-logos-canva' },
    { name: 'Git', icon: 'i-logos-git-icon' },
    { name: 'GitHub', icon: 'i-logos-github-icon' },
    { name: 'Linux', icon: 'i-logos-linux-tux' },
    { name: 'SQL', icon: 'i-logos-sqlite-icon' },
    { name: 'VSCode', icon: 'i-logos-vscode-icons' }
]


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
        <UCard class="w-full md:w-1/3 ring-0 p-4 shadow-lg">
            <template #header>
                <h1 class="text-2xl font-bold"><span class="underline text-secondary">Languages</span> I use</h1>
            </template>
            <div class="grid grid-cols-2 gap-4">
                <UButton v-for="lang in languages" :key="lang.name" :icon="lang.icon" :label="lang.name" variant="outline" color="neutral" class="text-lg hover:bg-accented" />
            </div>
            </UCard>
        <UCard class="w-full md:w-1/3 ring-0 p-4 shadow-lg">
            <template #header>
                <h1 class="text-2xl font-bold"><span class="underline text-secondary">Frameworks</span> I use</h1>
            </template>
            <div class="grid grid-cols-2 gap-4">
                <UButton v-for="framework in frameworks" :key="framework.name" :icon="framework.icon" :label="framework.name" variant="outline" color="neutral" class="text-lg hover:bg-accented" />
            </div>
            </UCard>
        <UCard class="w-full md:w-1/3 ring-0 p-4 shadow-lg">
            <template #header>
                <h1 class="text-2xl font-bold"><span class="underline text-secondary">Tools</span> I use</h1>
            </template>
            <div class="grid grid-cols-2 gap-4">
                <UButton v-for="tool in tools" :key="tool.name" :icon="tool.icon" :label="tool.name" variant="outline" color="neutral" class="text-lg hover:bg-accented" />
            </div>
            </UCard>
            
</UCard> 
</template>