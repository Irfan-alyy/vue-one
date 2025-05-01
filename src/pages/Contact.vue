<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)

const submitForm = () => {
  if (name.value && email.value && message.value) {
    submitted.value = true
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-tr from-white to-blue-50 flex items-center justify-center p-8">
    <div class="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-10 space-y-6">
      <h2 class="text-3xl font-bold text-center text-blue-700">Contact Us</h2>
      <p class="text-center text-gray-600">Have a question or want to work with us? Send us a message below.</p>

      <form @submit.prevent="submitForm" class="space-y-4">
        <input
          type="text"
          v-model="name"
          placeholder="Your Name"
          class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          v-model="email"
          placeholder="Your Email"
          class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          rows="5"
          v-model="message"
          placeholder="Your Message"
          class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      <div v-if="submitted" class="text-green-600 font-semibold text-center">
        ✅ Thank you! Your message has been sent.
      </div>
    </div>
  </div>
</template>
