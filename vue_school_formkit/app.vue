<script setup lang="ts">
import {FormKitSchema, createInput} from "@formkit/vue";
import VueMultiSelectFromKit from "./formkit-components/VueMultiSelectFromKit.vue";
import {createZodPlugin} from "@formkit/zod";
import {z} from "zod"

const ms = createInput(VueMultiSelectFromKit)

interface FormData {
  username: string,
  password: string,
}

const formData = ref<FormData>({
  username: "sascha_dietrich@outlook.com",
  password: ""
})

interface IsAdmin {
  username: string,
  isAdmin: boolean
}

const isAdmin = ref<IsAdmin[]>([])

async function handleSubmit(data: FormData) {
  await wait(3000)
  console.log(data)
}

const zodSchema = z.object({
  personalInfo: z.object({
    firstName: z.string().min(3).max(25),
    lastName: z.string().min(3).max(25),
  }),
  email: z.string().email(),
  arrayMin: z.string().array().min(2),
})

const [zodPlugin, submitHandler] = createZodPlugin(
    zodSchema,
    async (data) => {
      // fake submit handler, but this is where you
      // do something with your valid data.
      await new Promise((r) => setTimeout(r, 2000))
      console.log(data)
    }
)
</script>

<template>
  <div>
    <FormKitSchema
        :data="{
          formData,
          attrs: {
            onSubmit: handleSubmit
          }
        }"
        :schema="[
        {
          $formkit: 'form',
          submitLabel: 'Login',
          value: '$formData',
          bind: '$attrs',
          plugins: [],
          children: [
            {
              $el: 'h1',
              children: 'Login'
            },
            {
              $formkit: 'text',
              label: 'Username',
              name: 'username',
              validation: '(500)username_is_unique',
              help: 'Please fill out your username'
            },
            {
              $formkit: 'password',
              label: 'Password',
              name: 'password',
            },
            {
              $formkit: ms,
              label: `Framework`,
              value: '',
              options: ['Vue', 'Nuxt', 'Laravel'],
              multiple: true
            }
          ]
        },
      ]"
    />
    <FormKit
        id="repeater"
        name="users"
        type="repeater"
        label="Users"
        draggable="true"
        #default="{ index }"
        v-model="isAdmin"
    >
      <FormKit
          type="email"
          :label="`${index + 1}. User`"
          name="email"
          validation="required|email"
          placeholder="Add email address..."
      />
      <FormKit
          type="toggle"
          name="isAdmin"
          label="isAdmin"
      />
    </FormKit>
    <pre>{{ isAdmin }}</pre>

    <h1>Validation from Zod schema</h1>
    <FormKit type="form" :plugins="[zodPlugin]" @submit="submitHandler">
      <FormKit type="group" name="personalInfo">
        <FormKit
            validation-visibility="live"
            type="text"
            name="firstName"
            label="First Name"
        />
        <FormKit type="text" name="lastName" label="Last Name" />
      </FormKit>
      <FormKit type="text" name="email" label="Your email" />
      <FormKit
          type="checkbox"
          name="arrayMin"
          label="Zod features"
          :options="['Validation', 'Type-Safety', 'Reusability']"
      />
    </FormKit>
  </div>
</template>

<style >
.myClasses {
  font-size: 2rem !important;
}
</style>
