<script setup>
import PlanPicker from "@/components/PlanPicker.vue";
import {ref} from "vue";
const show = ref(false)
</script>

<template>
    <div class="content">
      <h1 class="title">Coffee Plans</h1>

      <h2 class="subtitle">
        We travel the world to source the very best single origin coffee for you
      </h2>

      <label for="">
        <input type="checkbox" name="" id="" v-model="show">
        Show PlanPicker
      </label>
      <PlanPicker v-if="show"/>
    </div>
</template>

<style scoped>

</style>