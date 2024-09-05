<template>
    <div>
        <ul class="grid container gap-4 grid-cols-2 md:grid-cols-4 p-8">


            <li v-for="article in articles" :key="article.url">

               <NuxtLink v-if="article.urlToImage" :to="'news/' + article.slug">
                <img :src="article.urlToImage" class="aspect-video mb-4" height="900" width="1600" />
               </NuxtLink>
               <NuxtLink :to="'news/' + article.slug"> {{ article.title }}</NuxtLink>

                <p>{{ article.description }}</p>
            </li>
        </ul>
    </div>
     
    
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchNews } from '~/composables/news.ts';


const articles = ref([]);

onMounted(async () => {
    articles.value = await fetchNews();
    
  
    
});

</script>