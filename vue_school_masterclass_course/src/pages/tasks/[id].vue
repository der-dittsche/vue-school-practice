<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <h1>Projekt Details von Aufgabe "{{ route.params?.id }}"</h1>
  <RouterLink to="/">Home</RouterLink> |
  <RouterLink to="/projects">Projekte</RouterLink> |
  <RouterLink to="/tasks">Aufgaben</RouterLink>
</template>

<style scoped>

</style>