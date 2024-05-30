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
.footer-container,
.footer-container__logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer-container {
  width: 100%;
  height: 102px;
  padding-left: 35px;
}

.footer-container__logo {
  align-items: start;
}

.footer-container__logo img {
  width: 114.25px;
  height: 36px;
}

.footer-container__credentials {
  color: #81899d;
  font-size: 16px;
}

/* Media queries */

@media (min-width: 640px) {
  .footer-container {
    height: 202px;
  }
}

@media (min-width: 1024px) {
  .footer-container {
    max-width: 954px;
    padding: 0;
  }
}

@media (min-width: 1280px) {
  .footer-container {
    max-width: 1254px;
  }
}

@media (min-width: 1536px) {
  .footer-container {
    max-width: 1404px;
  }
}

@media (min-width: 1920px) {
  .footer-container {
    max-width: 1662px;
  }
}
</style>
