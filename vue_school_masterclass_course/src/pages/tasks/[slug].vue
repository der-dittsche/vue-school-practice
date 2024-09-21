<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <h1>Projekt Details von Aufgabe "{{ route.params?.slug }}"</h1>
</template>

<style scoped>

</style>