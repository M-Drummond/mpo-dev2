<template>
    <div v-if="article" class=" container py-12">
        <h1 class="text-2xl md:text-3xl font-bold mb-4">{{ article.title }}</h1>
        <p><strong>Source:</strong> <a :href="article.source.url" target="_blank">{{ article.source.name }}</a></p>

        <div class="prose dark:prose-invert mx-auto py-12">
            {{ article.content }}
        </div>

        <img :src="article.urlToImage" class="aspect-video mb-4" height="900" width="1600" />

        <NuxtLink to="/">Back to News List</NuxtLink>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchNews } from '~/composables/news';

const route = useRoute();
const article = ref(null);

onMounted(async () => {
    const articles = await fetchNews();
    const articleUrl = decodeURIComponent(route.params.slug);
    article.value = articles.find(a => a.slug === articleUrl) || null;
});
</script>