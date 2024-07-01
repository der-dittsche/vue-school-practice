<script setup lang="ts">
const userIsLogin = ref(false)
const userWantRegister = ref(false)
</script>

<template>
  <v-container>
    <template v-if="!userIsLogin && !userWantRegister">
      <loginUser :userIsLogin="userIsLogin" @updateLoginStatus="userIsLogin = true" @goToRegister="userWantRegister = true" />
    </template>
    <template v-else-if="userWantRegister">
      <registerUser :userWantRegister="userWantRegister" @updateRegisterStatus="userWantRegister = false" @goToLogin="userWantRegister = false"/>
    </template>
    <template v-else>
      <h1>Herzlich willkommen</h1>
    </template>
  </v-container>
</template>

<style scoped></style>
