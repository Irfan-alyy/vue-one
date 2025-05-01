<script setup>
import { ref } from "vue";
const count=ref(0)
</script>

<template>
 
 <div>
  <h1>counte: {{ count }}</h1>
  <button @click="count++">increment</button>
 </div>
</template>

<style scoped>

</style>
