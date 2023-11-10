<template>
    <div>
        <h1 class="mb-4">Admin (ruta protegida)</h1>
        <UButton @click="logOut, toast.add({title:'loggin out', timeout:2000, callback:async() =>{
        await navigateTo('/login')
      }})">Log out</UButton>
    </div>
</template>

<script setup lang="ts">

const toast = useToast()
const {logOut} = useFirebaseAuth()


</script>

<style scoped>

</style>