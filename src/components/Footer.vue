<template>
  <div class="footer-container">
    <div class="footer-container__logo">
      <img :src="Logo" alt="Alpha logo" />
    </div>
    <div class="footer-container__credentials">
      <span>© alpha, 2023</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/assets/logos/logo.svg'
</script>

<style>
.footer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 1920px;
  height: 202px;
  background: #f0f6fe;
}

.footer-container__logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 8px 0 8px 100px;
}

.footer-container__logo img {
  width: 114.25px;
  height: 36px;
}

.footer-container__credentials {
  color: #81899d;
  font-size: 16px;
  margin: 8px 0 8px 100px;
}
</style>
