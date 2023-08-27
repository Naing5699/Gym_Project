<template>
    <div class="flex justify-center">
        <form @submit.prevent="update" class="mt-6 p-4 shadow-lg bg-gray-100 w-2/3" >
            <h1 class="text-3xl italic text-b  p-2">Update Blogs</h1>
                <div class="mt-4">
                    <label  class="text-lg italic " for="email">Title</label>
                    <input v-model="blog.title" required class="w-full border outline-none px-2 py-1 mt-2 rounded-md" type="text">
                </div>
                <div class="flex flex-wrap my-6 text-lg">
                    <label for="images"> Image</label>
                    <input @change="saveImage" class="border-b bg-transparent outline-none border-gray-700 w-full" type="file" >
                </div>
                <div class="mt-4">
                    <label  class="text-lg italic mt-10 " for="email">Body</label>
                    <textarea v-model="blog.body"  required class="w-full border outline-none px-2 py-1 mt-2 rounded-md" type="text"></textarea>
                </div>
                <div class="flex justify-between mt-4">
                    <router-link  :to="{name : 'Blogs'}" class="text-gray-300  rounded-sm px-4 py-1 mt-1 border-sm bg-sky-400 border border-sky-400 hover:bg-transparent transition  hover:text-gray-600"> <i class="fa-solid fa-circle-arrow-left"></i> Back</router-link>
                    <button class="text-gray-300 rounded-sm px-4 py-1 mt-1  border-sm bg-sky-400 border border-sky-400 hover:bg-transparent transition hover:text-gray-600"> Update</button>
                </div>
        </form>  
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        data (){
            return {
                id : this.$route.params.id,
                blog : {},
                categories : []
            }
        },
        mounted (){
            axios.get(`http://localhost:3000/blogs/${this.id}`).then((res)=>{
                this.blog = res.data
            }).catch((res)=>{
                alert(res)
            }),
            axios.get('http://localhost:3000/categories').then((res)=>{
                this.categories = res.data;
            }).catch((res)=>{
                alert('Error!')
            })
        },
        methods : {
            update (){
                axios.put(`http://localhost:3000/blogs/${this.id}`,this.blog).then((res)=>{
                        this.$router.push({name : 'Blogs'})
                         }).catch((res)=>{
                            alert(res)
                        })
                }
        }
    }
</script>

<style  scoped>

</style>