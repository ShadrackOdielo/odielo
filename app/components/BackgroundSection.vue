<script setup lang="ts">
// this will display  my academic cerifications and where I learnt (bsc it jkuat 2021-present,Alx software engineering 2023-present,aws foundations, and udacity javascript course)

const certifications = [
    { title: 'Bachelor of Science in Information Technology', institution: 'Jomo Kenyatta University of Agriculture and Technology (JKUAT)', year: '2021 - Present',icon: 'i-lucide-graduation-cap', description: 'Pursuing a degree in Information Technology with a focus on software development and systems analysis.' },
    { title: 'ALX Software Engineering Program', institution: 'ALX', year: '2023 - Present',icon: 'i-simple-icons-alx', description: 'An intensive software engineering program that covers full-stack development, algorithms, and data structures.' },
    { title: 'AWS Foundations', institution: 'Amazon Web Services', year: '2023', icon: 'i-logos-aws', description: 'A foundational course on AWS cloud services, covering core concepts and best practices for cloud computing.' },
    { title: 'JavaScript Course', institution: 'Udacity', year: '2022', icon: 'i-logos-udacity', }
];
</script>
<template>
<UCard id="background" class="relative rounded-none ring-0" :ui="{body:'flex md:flex-row flex-col' , header:'px-2 '}" >
    <template #header>
        <!-- a large greyed out background text and smaller darker overlay -->
        <div class="relative w-full inset-0 flex items-center justify-center">
            <h1 class="md:text-9xl text-6xl  font-bold opacity-20">Background</h1>
            <h1 class="md:text-3xl text-xl absolute font-bold text-center">Where I learnt</h1>
        </div>
        </template> 
    <div class="container mx-auto md:w-1/2 px-4">
        <UCard v-for="certification in certifications" :key="certification.title" class="mb-4 p-4 shadow-lg">
            <div class="flex items-center mb-2">
                <UIcon :name="certification.icon" class="text-3xl mr-2" />
                <h2 class="text-xl font-bold">{{ certification.title }}</h2>

        </div>
            <p class="text-lg">{{ certification.institution }}</p>
            <p class="text-sm text-gray-600">{{ certification.year }}</p>
            <p class="text-sm text-gray-600">{{ certification.description || 'No description available' }}</p>
            <UButton
                v-if="certification.icon"
                variant="solid"
                color="neutral"
                :icon="certification.icon"
                :label="'Learn more'"
                class="mt-2"
                href="#"
            />
        </UCard>
    </div>
</UCard> 
</template>