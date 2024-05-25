<template>
  <div class="header-container">
    <div class="header-container__logo">
      <img :src="Logo" alt="Alpha logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/assets/logos/logo.svg'
</script>

<style>
.header-container {
  display: flex;
  justify-content: flex-start;
  width: 1920px;
  height: 123px;
}

.header-container__logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 8px 0 8px 100px;
}

.header-container__logo img {
  width: 152px;
  height: 40px;
}
</style>
