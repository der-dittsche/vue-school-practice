<script setup>
import { ref } from "vue";
const showMenu = ref(false);
</script>

<template>
  <h1>Part 1</h1>
  <button @click="showMenu = !showMenu">
    {{ showMenu ? "Hide" : "Show" }}
    Menu
  </button>
  <Transition>
    <ul v-if="showMenu">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </Transition>
</template>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity .3s ease, transform .7s ease;
}

.v-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>