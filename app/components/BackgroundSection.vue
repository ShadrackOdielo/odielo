<script setup lang="ts">
// this will display  my academic cerifications and where I learnt (bsc it jkuat 2021-present,Alx software engineering 2023-present,aws foundations, and udacity javascript course)

const certifications = [
    { title: 'Bachelor of Science in Information Technology', institution: 'Jomo Kenyatta University of Agriculture and Technology (JKUAT)', year: '2021 - Present',icon: 'i-lucide-graduation-cap' },
    { title: 'ALX Software Engineering Program', institution: 'ALX', year: '2023 - Present',icon: 'i-simple-icons-alx' },
    { title: 'AWS Foundations', institution: 'Amazon Web Services', year: '2023', icon: 'i-logos-aws' },
    { title: 'JavaScript Course', institution: 'Udacity', year: '2022', icon: 'i-logos-udacity' }
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
        <h2 class="text-3xl font-bold mb-6">Academic Background</h2>
        <ul class="list-disc pl-6 space-y-4">
            <li v-for="certification in certifications" :key="certification.title" class="text-lg">
                <div class="flex items-center">
                    <UIcon :name="certification.icon" class="text-2xl mr-2" />
                    <span class="font-semibold">{{ certification.title }}</span>
                    <span class="text-gray-600 ml-2">({{ certification.institution }}, {{ certification.year }})</span>
                </div>
            </li>
        </ul>
        <p class="text-lg mt-4">
            I am currently pursuing a Bachelor of Science in Information Technology at Jomo Kenyatta University of Agriculture and Technology (JKUAT), where I am gaining a solid foundation in computer science and software engineering principles.
        </p>
        <p class="text-lg mt-4">
            In addition, I am enrolled in the ALX Software Engineering Program, which is enhancing my skills in software development and preparing me for a successful career in tech.
        </p>
        <p class="text-lg mt-4">
            I have also completed courses in AWS Foundations and JavaScript, which have equipped me with essential skills in cloud computing and web development.
        </p>
    </div>
        
</UCard> 
</template>