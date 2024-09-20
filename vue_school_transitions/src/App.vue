<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Part 1 | </RouterLink>
      <RouterLink to="/two">Part 2 | </RouterLink>
      <RouterLink to="/tree">Part 3 | </RouterLink>
    </nav>
  </header>

  <RouterView/>
</template>

<style scoped>
header {
  padding-bottom: 2rem;
}
</style>
