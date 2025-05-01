<script setup>
import { ref } from 'vue';

import { useBlogsStore } from '@/store/blogsStore';

const blogsStore=useBlogsStore()
const {addBlog}=blogsStore


const title=ref("")
const description=ref("")
const author=ref("")
const form=ref("")

const handleFormSubmit=(e)=>{
    

    const blog={
        title, description, author, createdAt: new Date().toLocaleString()
    }

    addBlog(blog)
    alert("Blog Created")

    form.value.reset()

}


</script>


<template>
    <div class="flex py-10 bg-gray-300 ">
        <form action="#" ref="form" @submit.prevent="handleFormSubmit"  p class="m-auto w-5/12  p-10 rounded  bg-white">
            <fieldset class="flex flex-col gap-1">
                <label for="title">Blog Title</label>
            <input type="text" id="title" v-model="title" required class="bg-gray-200 rounded p-2 outline-sky-400">
            </fieldset>
            <fieldset class="flex flex-col gap-1">
                <label for="title">Blog Description</label>
            <textarea type="text" id="title" v-model="description" required class=" bg-gray-200 rounded p-2 outline-sky-400 min-h-20">

            </textarea>
            </fieldset>
            <fieldset class="flex flex-col gap-1">
                <label for="title">Author</label>
            <input type="text" id="title" v-model="author" required class="bg-gray-200 rounded p-2 outline-sky-400">
            </fieldset>

            <button class="bg-sky-400 py-2 px-4 my-5 rounded">Create Blog</button>

        </form>
    </div>
</template>