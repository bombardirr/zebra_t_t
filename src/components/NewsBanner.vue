<template>
  <div class="banner-container">
    <div class="banner-container__image">
      <img :src="NewsImage" alt="News" />
    </div>
    <div class="baanner-container__title">
      <h1>Новости</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import NewsImage from '@/assets/images/news.png'
</script>

<style>
.banner-container {
  position: relative;
}

.banner-container__image img {
  width: 1920px;
  height: 320px;
}

.baanner-container__title {
  position: absolute;
  font-weight: 700;
  bottom: 0;
  margin: 8px 0 8px 100px;
}
</style>
