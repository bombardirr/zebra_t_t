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
.header-container,
.header-container__logo {
  display: flex;
  justify-content: start;
}

.header-container {
  width: 100%;
  height: 84px;
}

.header-container__logo {
  align-items: center;
  padding-left: 15px;
}

.header-container__logo img {
  width: 135px;
  height: 36px;
}

/* Media queries */

@media (min-width: 640px) {
  .header-container {
    height: 123px;
  }

  .header-container__logo img {
    width: 152px;
    height: 40px;
  }
}

@media (min-width: 1024px) {
  .header-container {
    max-width: 954px;
  }

  .header-container__logo {
    padding-left: 0;
  }
}

@media (min-width: 1280px) {
  .header-container {
    max-width: 1254px;
  }
}

@media (min-width: 1536px) {
  .header-container {
    max-width: 1404px;
  }
}

@media (min-width: 1920px) {
  .header-container {
    max-width: 1662px;
  }
}
</style>
