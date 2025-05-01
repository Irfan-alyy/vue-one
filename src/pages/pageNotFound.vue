<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-white text-center p-8">
    <h1 class="text-6xl font-bold text-blue-600 mb-4">404</h1>
    <p class="text-xl text-gray-700 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
    <button
      @click="goHome"
      class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition font-semibold"
    >
      Go Back Home
    </button>
  </div>
</template>
