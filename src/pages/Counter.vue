<script setup>
import { useUserStore } from '@/store/userStore'

const userStore = useUserStore()
const { login, increment } = userStore

const dologin = () => {
  login('irfan')
  increment()
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center space-y-4">
      <h1 class="text-2xl font-bold text-gray-800">👋 Welcome</h1>

      <p class="text-lg text-gray-700">
        <span class="font-semibold">Name:</span>
        <span class="text-blue-600">{{ userStore.name }}</span>
      </p>

      <p v-if="userStore.isLogedIn" class="text-green-600 font-medium">
        ✅ User is logged in
      </p>

      <p class="text-lg text-gray-700">
        <span class="font-semibold">Login Count:</span> {{ userStore.count }}
      </p>

      <button
        @click="dologin"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-200"
      >
        Login & Increment
      </button>
    </div>
  </div>
</template>
