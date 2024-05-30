<template>
  <div class="banner-container">
    <div class="banner-container__image">
      <img :src="NewsImage" alt="News" />
    </div>
    <div class="banner-container__title">
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
  width: 100%;
  overflow: hidden;
}

.banner-container__image img {
  width: 100%;
}

.banner-container__title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  font-size: 0.7em;
  padding-left: 35px;
}

/* Media queries */

@media (min-width: 640px) {
  .banner-container__title {
    font-size: 1em;
  }
}

@media (min-width: 1024px) {
  .banner-container__title {
    max-width: 934px;
    padding-left: 0;
    top: 80%;
  }
}

@media (min-width: 1280px) {
  .banner-container__title {
    max-width: 1234px;
  }
}

@media (min-width: 1536px) {
  .banner-container__title {
    max-width: 1384px;
  }
}

@media (min-width: 1920px) {
  .banner-container {
    height: 320px;
  }

  .banner-container__title {
    max-width: 1642px;
  }
}
</style>
