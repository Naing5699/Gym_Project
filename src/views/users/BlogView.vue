<template>
    <div class="p-4 ">
        <img class=" w-1/2 mx-auto shadow-xl " :src="blog.image" alt="">
        <h1 class="text-xl italic font-semibold mt-2">{{ blog.title }}</h1>
        <p class="text-xl font-serif ">{{ blog.body }}</p>
    </div>
    <router-link  :to="{name : 'BlogsView'}" class="text-gray-300  rounded-sm px-4 py-1 m-4 border-sm bg-sky-400 border border-sky-400 hover:bg-transparent transition  hover:text-gray-600"> <i class="fa-solid fa-circle-arrow-left"></i> Back</router-link>

</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                id : this.$route.params.id,
                blog : {}
            }
        },
        mounted(){
            axios.get(`http://localhost:3000/blogs/${this.id}`).then((res)=>{
                this.blog = res.data;
            }).catch((err)=>{
                console.log(err);
            })
        }
        
    }
</script>

<style lang="scss" scoped>

</style>