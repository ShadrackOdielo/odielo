<script setup >

// placeholder for article content, which 
// will be replaced with actual content later

const articles = ref([
  {
    title: 'Understanding Vue.js',
    description: 'A deep dive into the Vue.js framework and its features.',
    link: 'https://example.com/vuejs-article'
  },
  {
    title: 'Building Responsive Web Applications',
    description: 'Tips and tricks for creating responsive web applications.',
    link: 'https://example.com/responsive-web-apps'
  },
  {
    title: 'JavaScript Best Practices',
    description: 'A guide to writing clean and efficient JavaScript code.',
    link: 'https://example.com/js-best-practices'
  }
]);
// fetch projects from my github portfolio

const projects = ref([]);
onMounted(async () => {
  try {
    const response = await fetch('https://api.github.com/users/ShadrackOdielo/repos?sort=updated&per_page=6');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    projects.value = data.filter((repo) => !repo.fork); // Filter out forks
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
});
</script>
<template>
<UCard id="portfolio" class="relative rounded-none ring-0" :ui="{body:'flex  flex-col' , header:'px-2 '}" >
    <template #header>
        <!-- a large greyed out background text and smaller darker overlay -->
        <div class="relative w-full inset-0 flex items-center justify-center">
            <h1 class="md:text-9xl text-6xl  font-bold opacity-20">Portfolio</h1>
            <h1 class="md:text-3xl text-xl absolute font-bold text-center">A selection of my work</h1>
        </div>
        </template> 
    <UCard class="w-full">
        <template #header>
            <h1 class="text-2xl font-bold">My Projects</h1>
        </template>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <UCard v-for="project in projects" :key="project.id" :ui="{body:'p-0 relative md:p-0 px-0',header:''}" class="shadow-lg ">
                    <img :src="project.owner.avatar_url" alt="Project Avatar" class="  object-cover w-full h-48 rounded-t-lg">
                    <div>
                      <UBadge
                        :label="project.language || 'Unknown'"
                        :color="project.language ? 'primary' : 'gray'"
                        variant="subtle"
                        class="absolute top-2 right-2 text-xs px-2 py-1 rounded"
                        />

                        <UBadge
                            v-if="project.topics && project.topics.length"
                            :label="project.topics.join(', ')"
                            class="absolute bottom-2 left-2  text-xs px-2 py-1 rounded"
                        />
                    </div>
                <template #footer>
                    <h2 class="text-xl font-bold">{{ project.name }}</h2>
                <p class="text-sm text-gray-600">{{ project.description || 'No description available' }}</p>
                <div class="mt-2 flex justify-between items-center">

                    <UButton
                        variant="solid"
                        color="neutral"
                        :icon="'i-uil-github'"
                        :href="project.html_url"
                        target="_blank"
                        label="View on GitHub"
                    />
                    <UButton
                        v-if="project.homepage"
                        variant="outline"
                        color="neutral"
                        icon='i-lucide-external-link'
                        :href="project.homepage"
                        target="_blank"
                        label="Visit Project"
                    />
                </div>
                </template>
            </UCard>
        </div>
    </UCard>
    <UCard class="w-full mt-4">
        <template #header>
            <h1 class="text-2xl font-bold">Latest Articles</h1>
        </template>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <UCard v-for="article in articles" :key="article.title" :ui="{body:'p-0 relative md:p-0 px-0',header:''}" class="shadow-lg ">
                <img src="/images/test.jpg" alt="Article Image" class="object-cover w-full h-48 rounded-t-lg">
                <div>
                    <UBadge
                        label="Article"
                        color="neutral"
                        variant="subtle"
                        class="absolute top-2 right-2 text-xs px-2 py-1 rounded"
                    />
                </div>
                <UBadge variant="solid" color="neutral" class="absolute bottom-2 left-2 text-xs px-2 py-1 rounded  bg-opacity-75">
                    {{ new Date().toLocaleDateString() }}
                </UBadge>
                
                <template #footer>
                    <h2 class="text-xl font-bold">{{ article.title }}</h2>
                <p class="text-sm text-gray-600">{{ article.description }}</p>
                <div class="mt-2">
                    <UButton
                        variant="ghost"
                        trailing-icon="i-heroicons-arrow-right-solid"
                        color="primary"
                        :href="article.link"
                        target="_blank"
                        label="Read Article"
                    />
                </div>
                </template>
                                          </UCard>
        </div>
        </UCard> 
</UCard> 
</template>