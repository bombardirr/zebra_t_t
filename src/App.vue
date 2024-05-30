<template>
  <div class="app-container">
    <header>
      <Header />
    </header>

    <RouterView />

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

header,
footer {
  display: flex;
  justify-content: center;
  width: 100%;
}

footer {
  background: #f0f6fe;
}
</style>
