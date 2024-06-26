<template>
  <div>
    <FormKit
        label="Username"
        name="username"
        type="text"
        help="Pick a new username"
        validation="required|matches:/^@[a-zA-Z0-9]+$/|legth:5"
        value="@useFormKit"
        prefixIcon="avatarMan"
        inner-class="mycustom-inner"
    >
      <template #label="context">
        {{ context.label}} ?
        <span>{{ context.help }}</span>
      </template>
      <template #help></template>
    </FormKit>



    <FormKit
        type="form"
        :value="formData"
        :actions=false
        @submit="handleSubmit(formData)"
        submit-label="Login"
    >
      <template #default="{state}">
        <h1>Login</h1>
        <FormKit type="text" label="Username" name="username" />
        <FormKit type="password" label="Password" name="password" />
        <button :disabled="state.loading">
          {{ state.loading ? "Loading ..." : "Login" }}
        </button>
      </template>

    </FormKit>

    <FormKit
        type="form"
        :value="formData"

        @submit="handleSubmit(formData)"
        submit-label="Login"
    >
      <h1>Login</h1>
      <FormKit type="text" label="Username" name="username" validation="(500)username_is_unique" />
      <FormKit type="password" label="Password" name="password" />


    </FormKit>
  </div>
</template>


<script setup lang="ts">
import {FormKit} from "@formkit/vue";
</script>