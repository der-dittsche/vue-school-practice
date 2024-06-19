<script setup>
import {onMounted, ref} from "vue";

const props = defineProps({
  username: {
    type: String,
    required: true,
  },
})

const user = ref()

onMounted(() => {
  fetch(`https://api.github.com/users/${props.username}`).then(async (res) => {
    const data = await res.json();
    user.value = data
  })
})

</script>

<template>
  <div class="card card-side bg-base-100 shadow-xl m-5" v-if="user">
    <figure><img :src="user.avatar_url" :alt="user.name + 's Profilbild'"/></figure>
    <div class="card-body">
      <h2 class="card-title">{{ user.name }}</h2>
      <p>{{ user.bio }}</p>
      <div class="card-actions justify-end">
        <a :href="user.html_url" target="_blank" class="btn btn-primary">View Profile</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>