<script setup >

// placeholder for article content, which 
// will be replaced with actual content later
// fetch articles from content/blog directory using nuxt content module
const { data: articles } = await useAsyncData('blog', () => queryCollection('blog').all())



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
    <UCard class="w-full ring-0">
        <template #header>
            <h1 class="text-2xl text-center underline-offset- font-bold"><span class="text-secondary">My</span> Projects</h1>
        </template>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <UCard v-for="project in projects" :key="project.id" :ui="{body:'p-0 relative md:p-0 px-0',header:''}" class="shadow-lg ">
                    <img
                        :src="`https://raw.githubusercontent.com/${project.owner.login}/${project.name}/${project.default_branch}/public/preview.png`"
                        alt="Project Screenshot"
                        class="object-cover w-full h-48 rounded-t-lg"
                        @error="e => e.target.src = project.owner.avatar_url"
                    />
                    <!-- image from fe public folder at screenshot.jpg -->
                    
                    <div>
                      <!-- a bagge for project languages from project languages url endpoint -->
                        <UBadge
                            v-if="project.language"
                            :label="project.language"
                            color="neutral"
                            variant="subtle"
                            class="absolute top-2 right-2 text-xs px-2 py-1 rounded"
                        />
                        <UBadge
                            v-if="project.license && project.license.name"
                            :label="project.license.name"
                            color="neutral"
                            variant="subtle"
                            class="absolute top-2 left-2 text-xs px-2 py-1 rounded"
                        />
                        <UBadge
                            v-if="project.stargazers_count"
                            :icon="'i-heroicons-star-solid'"
                            color="neutral"
                            variant="subtle"
                            class="absolute bottom-2 right-2 text-xs px-2 py-1 rounded"
                            :label="`Stars: ${project.stargazers_count}`"

                        />
                       

                        <UBadge
                            v-if="project.topics && project.topics.length"
                            :label="project.topics.join(', ')"
                            color="neutral"
                            variant="subtle"
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
                        label="source"
                    />
                    <UButton
                        v-if="project.homepage"
                        variant="outline"
                        color="neutral"
                        icon='i-lucide-external-link'
                        :href="project.homepage"
                        target="_blank"
                        label="live"
                    />
                </div>
                </template>
            </UCard>
        </div>
        <template #footer>
            <p class="text-center text-gray-600 mt-4">Want to see more projects? Check out my GitHub.</p>
        <div class="w-full items-center justify-center flex mt-4">
            <UButton
                variant="solid"
                color="secondary"
                label="View all on GitHub"
                icon="i-heroicons-github-mark-solid"
                href="https://github.com/ShadrackOdielo?tab=repositories"
                target="_blank"
            />
        </div>
        </template>
    </UCard>
    <UCard class="w-full ring-0 mt-4">
        <template #header>
            <h1 class="text-2xl text-center font-bold"><span class="text-secondary">Latest</span> Articles</h1>
        </template>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <UCard v-for="article in articles" :key="article.title" :ui="{body:'p-0 relative md:p-0 px-0',header:''}" class="shadow-lg ">
                <img :src="article.image_url" alt="Article Image" class="object-cover w-full h-48 rounded-t-lg">
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
                        color="secondary"
                        :href="`/blog/${article.slug}`"
                        target="_blank"
                        label="Read Article"
                    />
                </div>
                
                </template>
        </UCard>
        
        </div>
        <template #footer>
            <p class="text-center text-gray-600 mt-4">Want to read more articles? Check out my blog.</p>
        <div class="w-full items-center justify-center flex mt-4">
                    <UButton
                        variant="outline"
                        color="secondary"
                        to="/blog"
                        label="View All Articles"
                    />
                </div>
        </template>
        </UCard> 
</UCard> 
</template>