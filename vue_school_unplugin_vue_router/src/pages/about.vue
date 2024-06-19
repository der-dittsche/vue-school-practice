<script setup lang="ts">
import {definePage} from "vue-router/auto";

definePage({
  alias: ["/about"],
  meta: {
    requiresAuth: false,
  }
})
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
