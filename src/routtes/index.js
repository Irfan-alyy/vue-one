import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import Contact from "@/pages/Contact.vue";
import pageNotFound from "@/pages/pageNotFound.vue";

import { createRouter, createWebHistory } from "vue-router";
import Blog from "@/pages/Blog.vue";
import Layout from "@/Layout/Layout.vue";
import AllBlogs from "@/pages/AllBlogs.vue";
import Counter from "@/pages/Counter.vue";
import CreateBlog from "@/pages/CreateBlog.vue";


const routes=[
    {
    path:"/",
    component: Layout,
    children:[
    {
        path:"",
        component:Home,
        name:"Home",
    },
    {
        path:"/about",
        component:About,
        name:"about",
    }, {
        path:"/contact",
        component:Contact,
        name:"contact",
    },
    {
        path:"/blogs", 
        component: AllBlogs, 
        name:"Blogs"
    },
    {
        path:"createblog",
        component: CreateBlog,
        name: "Create Blog"
    },
    {
        path:"/blogs/:id", 
        component: Blog, 
        name:"Blog"
    },
    {
        path:"/login",
        component: Counter,
        name:"Login"
    },
    {
        path:"/:catchAll(.*)", 
        component: pageNotFound, 
        name:"PageNotFound"
    }
]
}
]
const router= createRouter({
    history:createWebHistory(),
    routes
    
})

export default router