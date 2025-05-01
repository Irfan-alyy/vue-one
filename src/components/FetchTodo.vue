<script setup>
import {ref, onMounted} from "vue"

const tasks= ref([])

onMounted(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(dat=>tasks.value=dat).catch(err=>console.log(err))
})

const deleteTask=(ind)=>{
    tasks.value=tasks.value.filter((_,i)=>i!==ind);

}
const up=(ind)=>{
    if(ind>0){
        const temp1=tasks.value[ind-1]
        tasks.value[ind-1]=tasks.value[ind]
        tasks.value[ind]=temp1
    }

}
const down =(ind)=>{
    if(ind<tasks.value.length-1){
        const temp1=tasks.value[ind+1]
        tasks.value[ind+1]=tasks.value[ind]
        tasks.value[ind]=temp1
    }

}

</script>
<template>
    <h1>Task from Json placeholder</h1>
    <ul>
        <li v-for="(task,ind) in tasks" :key="task.id">
            <span>{{ task.title }}</span>
            <button @click="deleteTask(ind)">delete</button>
            <button @click="up(ind)">Up</button>
            <button @click="down(ind)">Down</button>

        </li>
    </ul>
</template>