<template>
  <div class="news-list">
    <div class="news-list__items">
      <News v-for="news in newsItems" :key="news.code" :item="news" />
    </div>
    <button v-if="hasMorePages" @click="loadMore" class="news-list__load-more">
      Загрузить ещё
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import News from '@/components/News.vue'
import type { NewsApiResponse, NewsItem } from '@/types/news.type'

const newsItems = ref<NewsItem[]>([])
const currentPage = ref(1)
const totalPages = ref(1)

const fetchNews = async (page = 1) => {
  try {
    const response = await axios.get<NewsApiResponse>(
      `https://flems.github.io/test/api/news/${page}`,
    )
    const data = response.data
    newsItems.value = [...newsItems.value, ...data.items]
    currentPage.value = data.nav.current
    totalPages.value = data.nav.total
  } catch (error) {
    console.error('Error fetching news:', error)
  }
}

const hasMorePages = computed(() => currentPage.value < totalPages.value)

const loadMore = () => {
  if (hasMorePages.value) {
    fetchNews(currentPage.value + 1)
  }
}

onMounted(() => {
  fetchNews()
})
</script>

<style>
.news-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  margin-bottom: 48px;
  gap: 48px;
}

.news-list__items {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  grid-gap: 22px;
  max-width: 1710px;
}

.news-list__load-more {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;
  color: #007bff;
  border: 1px solid #007bff;
  border-radius: 4px;
}

/* Media queries */

@media (min-width: 768px) {
  .news-list__items {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 22px 17px;
  }
}

@media (min-width: 1024px) {
  .news-list__items {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
