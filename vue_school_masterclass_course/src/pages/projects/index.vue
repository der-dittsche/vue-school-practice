<script setup lang="ts">

</script>

<template>
  <h1>Projekt Übersicht</h1>
  <RouterLink to="/">Home</RouterLink> |
  <RouterLink :to="{ name: '/projects/[id]', params: {id: 1}}">Projekt 1</RouterLink>
</template>

<style scoped>

</style>