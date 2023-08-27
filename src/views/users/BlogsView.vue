<template>
    <div class="sm:flex flex-wrap sm:justify-around  flex justify-center">
        <div class="sm:w-[28%] w-2/3 m-6" v-for="blog in blogs" :key="blog.id">
            <img class="w-full" :src="blog.image" alt="">
            <h1 class="sm:my-3 my-1 sm:text-xl text-md font-bold">{{ blog.title }}</h1>
            <p class="line-clamp-4 sm:mb-2 m-1 mb-4">{{ blog.body }}</p>
            <router-link class="text-black  rounded-sm mt-2 sm:ml-1  ml-16 px-2 py-1   border-sm bg-slate-300 border border-slate-200 hover:bg-transparent hover:bg-slate-400 transition" :to="{name : 'BlogView' , params  : {id : blog.id}}"> Show Details</router-link>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                blogs : []
            }
        },
        mounted(){
            axios.get('http://localhost:3000/blogs').then((res)=>{
                this.blogs = res.data
            }).catch((res)=>{
                console.log(res);
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>