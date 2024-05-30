<template>
  <div class="news-item">
    <img
      v-if="item.image"
      :src="item.image"
      alt="News image"
      class="news-item__image"
    />
    <div class="news-item__content">
      <div class="news-item__content-top">
        <div class="news-item__date">
          <div class="news-item__date-day">{{ formatDate(item.date).dd }}</div>
          <div class="news-item__date-other">
            <div>{{ formatDate(item.date).mm }}</div>
            <div>{{ formatDate(item.date).yy }}</div>
          </div>
        </div>
        <h2 class="news-item__title">{{ item.name }}</h2>
        <p class="news-item__preview">{{ item.previewText }}</p>
      </div>
      <div class="news-item__content-bot">
        <span class="news-item__type">{{ item.type.value }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { NewsItem } from '@/types/news.type'
import moment from 'moment/moment'

defineProps({
  item: {
    type: Object as PropType<NewsItem>,
    required: true,
  },
})

const formatDate = (timestamp: number) => {
  const date = moment.unix(timestamp)
  const dd = date.format('DD')
  const mm = date.format('MMMM')
  const yy = date.format('YYYY')
  return { dd, mm, yy }
}
</script>

<style>
.news-item,
.news-item__content,
.news-item__content-top,
.news-item__date-other {
  display: flex;
  flex-direction: column;
}

.news-item {
  position: relative;
  border: 1px solid #0f62fe;
  border-radius: 16px;
  width: 100%;
  max-width: 300px;
  height: 554px;
}

.news-item__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-top: -1px;
  border-radius: 16px 16px 0 0;
}

.news-item__image img {
  border-radius: 16px;
}

.news-item__content {
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 32px;
  height: 100%;
}

.news-item__content-top {
  gap: 10px;
  margin-top: 22px;
}

.news-item__date {
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 12px;
  color: #a1a7b5;
  width: 110px;
  height: 36px;
  gap: 4px;
}

.news-item__date-day {
  font-size: 34px;
  font-weight: lighter;
}

.news-item__date-other {
  justify-content: start;
  padding-bottom: 4px;
}

.news-item__title {
  font-size: 16px;
  font-weight: 400;
  color: #0c5bef;
  margin: 0;
}

.news-item__preview {
  font-size: 14px;
  color: #222327;
  margin: 0;
}

.news-item__type {
  padding: 4px 12px;
  background: #f0f6fe;
  border-radius: 16px;
  font-size: 12px;
  color: #00133a;
}

/* Media queries */

@media (min-width: 1280px) {
  .news-item {
    max-width: 400px;
  }

  .news-item__title {
    font-size: 18px;
  }

  .news-item__preview {
    font-size: 16px;
  }
}

@media (min-width: 1536px) {
  .news-item {
    max-width: 450px;
  }
}

@media (min-width: 1920px) {
  .news-item {
    max-width: 536px;
  }

  .news-item__title {
    font-size: 20px;
  }

  .news-item__preview {
    font-size: 18px;
  }
}
</style>
