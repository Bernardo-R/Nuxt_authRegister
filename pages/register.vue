<template>
    <UForm :schema="schema" :state="state" @submit="onSubmit">
      <UFormGroup label="Email" name="email" class="mb-4">
        <UInput v-model="state.email" />
      </UFormGroup>
  
      <UFormGroup label="Password" name="password" class="mb-4">
        <UInput v-model="state.password" type="password" />
      </UFormGroup>
  
      <UButton type="submit" >
        Register
      </UButton>
    </UForm>
  </template>

  
  <!-- ******************** logic ************************ -->
  <script setup lang="ts">
  import { z } from 'zod'
  import { ref } from 'vue'
  import type { FormSubmitEvent } from '#ui/types'

  

  const {register} = useFirebaseAuth()

  const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 6 characters')
})

type Schema = z.output<typeof schema>

const state = ref({
  email: undefined,
  password: undefined
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data)
  try {
    await register(event.data.email, event.data.password)
  } catch (error) {
    console.log(error)
}
}
  </script>
  <!-- ******************** logic ends ************************ -->