<template>
    <div class="flex justify-center">
        <form @submit.prevent="create" class="mt-6 p-4 shadow-lg bg-gray-100 w-1/2">
            <h1 class="text-3xl italic text-b  p-4">Create Categories</h1>
            <div class="flex flex-wrap">
                <label for="name"> Name</label>
                <input class="border-b bg-transparent outline-none border-gray-700 w-full" type="text" v-model="fromData.name">
            </div>
            <div class="flex flex-wrap">
                <label for="image"> Image</label>
                <input @change="saveImage" class="border-b bg-transparent outline-none border-gray-700 w-full" type="file" >
            </div>
            <div class="flex justify-between mt-4">
                <router-link  :to="{name : 'Categories'}" class="text-gray-300  rounded-sm px-4 py-1 mt-1 border-sm bg-sky-400 border border-sky-400 hover:bg-transparent transition  hover:text-gray-600"> <i class="fa-solid fa-circle-arrow-left"></i> Back</router-link>
                <button class="text-gray-300 rounded-sm px-4 py-1 mt-1  border-sm bg-sky-400 border border-sky-400 hover:bg-transparent transition hover:text-gray-600"> Create</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                fromData :{
                    name : ''
                }

            }
        },
        methods : {
            saveImage(e){
                let file = e.target.files[0]
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.addEventListener("load", () => {
                    this.fromData.image = reader.result
                });
            },
            create (){
                axios.post('http://localhost:3000/categories', this.fromData).then((res)=>{
                    this.$router.push({name : 'Categories'});
                }).catch((res)=>{
                    console.log(res);
                })

            }
        }
    }
</script>

<style scoped>

</style>