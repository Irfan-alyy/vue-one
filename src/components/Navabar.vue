<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="bg-blue-600 shadow-md">
    <nav class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-white text-2xl font-bold">MyVueWebsite</h1>

      <ul class="flex space-x-6 text-white font-medium">
        <li>
          <RouterLink
            to="/"
            class="hover:text-yellow-300 transition"
            exact-active-class="border-b-2 border-yellow-300 pb-1"
          >
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/about"
            class="hover:text-yellow-300 transition"
            exact-active-class="border-b-2 border-yellow-300 pb-1"
          >
            About
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/contact"
            class="hover:text-yellow-300 transition"
            exact-active-class="border-b-2 border-yellow-300 pb-1"
          >
            Contact
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/blogs"
            class="hover:text-yellow-300 transition"
            exact-active-class="border-b-2 border-yellow-300 pb-1"
          >
            Blogs
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
