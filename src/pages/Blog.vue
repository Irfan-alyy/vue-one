<script setup>
import { useRoute } from 'vue-router'

const id=useRoute().params.id

</script>

<template>
    <h1>blog {{ id }} page</h1>

    
</template>