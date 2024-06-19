<script setup>
import {ref} from "vue";

const hover = ref(true)
</script>

<template>
  <button
      @mouseenter="$event => hover = true"
      @mouseleave="$event => hover = false"
  >
    <slot name="icon" :hover="hover" random="Hello">-></slot>
    <slot>Click me</slot>
  </button>
  {{ hover }}
</template>

<style scoped>

</style>