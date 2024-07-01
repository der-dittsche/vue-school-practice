<script setup lang="ts">
defineProps({
  userIsLogin: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['updateLoginStatus', 'goToRegister'])

interface RegisterPayload {
  name: string;
  password: string;
}

const form = ref({
  name: "",
  password: "",
});

function goToRegister() {
  emit('goToRegister')
}

function loginUser() {
  emit('updateLoginStatus')
}
</script>

<template>
  <v-card
      title="Login"
      subtitle="login to this amazing app">
    <v-card-text>
      <v-form>
        <v-text-field v-model="form.name" labe="Username:" placeholder="Username" />
        <v-text-field v-model="form.password" labe="Username:" placeholder="Password" type="password"/>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
          color="blue-grey-darken-4"
          text="go to register"
          @click="goToRegister"
      ></v-btn>
      <v-divider></v-divider>
      <v-btn
          color="light-green-darken-4"
          text="login"
          @click="loginUser"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>