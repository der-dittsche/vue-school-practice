<script setup>
import AppAlert from "@/backup/AppAlert.vue";
import {ref} from "vue";

const alerts = ref([
  {
    type: "success",
    message: "Your purchase has been confirmed!"
  },
  {
    type: "info",
    message: "New software update available."
  },
  {
    type: "warning",
    message: "Warning: Invalid email address!"
  },
  {
    type: "error",
    message: "Error! Task failed successfully."
  }
])
</script>

<template>
<div class="p-5">
  <AppAlert v-for="(alert, index) in alerts" :key="index" :type="alert.type" @closed="alerts = alerts.filter((a) => a.message !== alert.message)">{{ alert.message }}</AppAlert>
</div>
</template>

<style scoped>

</style>