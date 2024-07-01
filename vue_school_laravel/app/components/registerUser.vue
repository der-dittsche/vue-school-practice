<script setup lang="ts">
import axios from "axios";

defineProps({
  userWantRegister: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['updateRegisterStatus', 'goToLogin'])

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

function goToLogin() {
  emit('goToLogin')
}

async function registerUser(payload: RegisterPayload) {
  try {
    // CSRF-Cookie holen
    await axios.get("/sanctum/csrf-cookie");

    // Registrierungsanfrage mit CSRF-Token
    const response = await axios.post("/api/register", payload);
    console.log('Antwort:', response.data);
    // Erfolgshafte Aktionen ausführen
  } catch (error) {
    console.error('Fehler:', error);
    // Fehlerbehandlung
  }
}
</script>

<template>
  <v-card
      title="Register an user"
      subtitle="register a new user for this amazing app">
    <v-card-text>
    <v-form>
      <v-text-field v-model="form.name" labe="Username:" placeholder="Username" />
      <v-text-field v-model="form.email" labe="Username:" placeholder="Email" />
      <v-text-field v-model="form.password" labe="Username:" placeholder="Password" type="password"/>
      <v-text-field v-model="form.password_confirmation" labe="Username:" placeholder="Password confirmation" type="password"/>
    </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
          color="blue-grey-darken-4"
          text="go back to login"
          @click="goToLogin"
      ></v-btn>
      <v-divider></v-divider>
      <v-btn
          color="light-green-darken-4"
          text="register new user"
          @click="registerUser(form)"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>
