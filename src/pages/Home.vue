<script setup>
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-8">
    <div class="max-w-2xl bg-white shadow-xl rounded-2xl p-10 text-center space-y-6">
      <h1 class="text-4xl font-bold text-blue-700">Welcome to Our Website</h1>
      <p class="text-lg text-gray-700">
        We’re committed to delivering high-quality solutions tailored to your needs. Explore our services, connect with our team, and see how we can help bring your ideas to life.
      </p>
      <router-link
        to="/contact"
        class="inline-block bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full font-semibold transition duration-200"
      >
        Get in Touch
      </router-link>
    </div>
  </div>
</template>
