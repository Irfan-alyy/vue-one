<script setup>
import {ref} from "vue"
const todos= ref(["Hello World", "This is Vue","Easy like sugar"]);
const newTodo= ref("");
const addTask=()=>{
    if(newTodo.value.trim()!==""){
        todos.value.push(newTodo.value)
        newTodo.value=""
    }
}

const deleteTask=(ind)=>{
    todos.value=todos.value.filter((_,i)=>i!==ind);
}

const up=(ind)=>{
    if(ind>0){
        const temp1=todos.value[ind-1]
        todos.value[ind-1]=todos.value[ind]
        todos.value[ind]=temp1
    }
}
const down=(ind)=>{
    if(ind<todos.value.length-1){
        const temp1=todos.value[ind+1]
        todos.value[ind+1]=todos.value[ind]
        todos.value[ind]=temp1
    }
}

</script>
<template>
    <div>

   
    <h1>Todo App</h1>
    <fieldset>
        <label for="todo">
            Add A Task
        </label>
        <input type="text" id="todo" v-model="newTodo">
        <button @click="addTask">Add Task</button>
    </fieldset>
</div>
<div>
    <h2>
        Task list:

    </h2>
    <ul>
        <li v-for="(task,index) in todos" :key="index">
            <span>
                {{ task }}

            </span>
            <button @click="deleteTask(index)">Delete</button>
            <button @click="up(index)">up</button>
            <button @click="down(index)">down</button>

        </li>
    </ul>
</div>

</template>
<style scoped>
</style>