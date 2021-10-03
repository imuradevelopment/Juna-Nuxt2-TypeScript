<template>
  <div class="custom_container">
    <!-- <HeaderL class="hidden md:block" /> -->
    <HeaderL />
    <Nuxt class="container relative" />
    <HeaderM class="md:hidden "/>
  </div>
</template>

<style>
    .custom_container {
        display: grid;
        height: 100vh;
        grid-template-rows: auto 1fr auto;
    }
</style>
