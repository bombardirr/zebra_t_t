<template>
  <main>
    <NewsBanner />
    <NewsList />
  </main>
</template>

<script setup lang="ts">
import NewsList from '../components/NewsList.vue'
import NewsBanner from '@/components/NewsBanner.vue'
</script>

<style>
main {
  width: 100%;
}
</style>