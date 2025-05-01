import { defineStore } from "pinia";
import { ref } from "vue";

export const useBlogsStore=defineStore("blogsStore",()=>{

    const blogs=ref([
        {
            title:"Hello World",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores pariatur autem impedit nulla perspiciatis placeat vel totam alias ullam ducimus saepe aspernatur asperiores, tenetur at velit assumenda, error voluptatem est",
            createdAt: new Date().toLocaleString(),
            author: "Ali Irfan"
        }
    ])

    const addBlog=(blog)=>{

        blog && blogs.value.push(blog)
    }

    const deleteBlog=(index)=>{
        console.log(blogs.value)
        blogs.value=blogs.value.filter((elem,ind)=>ind!==index)
    }

    return{ blogs, addBlog, deleteBlog}
},
{
    persist:true
}
)
