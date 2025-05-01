import { defineStore } from "pinia";
import { ref } from "vue";


export const useUserStore=defineStore("user",()=>{
    let name=ref("Ali");
    let isLogedIn=ref(false)
    let count=ref(0)

    function login(uname){
        name.value=uname;
        isLogedIn.value=true;
    }
    function increment(){
        count.value++
    }

    return {name, isLogedIn,increment,count, login}

},{
    persist:true
})