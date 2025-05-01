<script setup>
import { useBlogsStore } from '@/store/blogsStore';
import { computed } from 'vue';

const blogsStore=useBlogsStore()

const blogs= computed(()=>blogsStore.blogs) 

const {deleteBlog}=blogsStore



</script>

<template>
    <div class="relative w-full flex flex-col px-20 py-20 items-center justify-center">
        <h1 class="text-center pb-10 text-3xl font-semibold tracking-wider font-serif">All Blogs</h1>
        <p v-if="blogs.length===0" class="text-center">No Blogs To Show</p>
        <div class=" grid grid-cols-3  gap-10 px-10 ">
        <div v-for="(blog, index) in blogs" :key="index" class="relative bg-sky-300 p-10 rounded shadow shadow-black">
            <h3>{{blog.title}}</h3>
            <hr>
            <p>{{ blog.description }}</p>
<br>
            
                <p>Author: {{ blog.author }}</p>
                <p>Created At: {{ blog.createdAt }}</p>


                <span class="absolute bottom-5 right-5">
                    <i-material-symbols-delete class="text-2xl cursor-pointer" @click="deleteBlog(index)" />

                </span>
            </div>
        </div>
        <RouterLink to="/createblog" class="bg-blue-500 py-3 px-5 rounded absolute bottom-5 right-10 text-white hover:text-gray-200 hover:bg-blue-600">Create a Blog</RouterLink>
    </div>
</template>