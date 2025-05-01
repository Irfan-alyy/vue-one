<script setup>

defineProps({
    title: {
        type:String,
        default: "World"
    }
})
</script>
<template>
    <h1>this is children</h1>
    <p>
        {{ title }}
    </p>
    <slot>Hello</slot>
</template>