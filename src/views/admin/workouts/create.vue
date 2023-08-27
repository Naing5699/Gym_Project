<template>
    <div class="flex justify-center">
        <form @submit.prevent="create" class="mt-6 p-4 shadow-lg bg-gray-100 w-2/3">
            <h1 class="text-3xl italic text-b  p-2">Create Workouts</h1>
            <div class="flex flex-wrap my-6 text-lg">
                <label for="name"> Image</label>
                <input @change="saveImage" class="border-b bg-transparent outline-none border-gray-700 w-full" type="file" >
            </div>
            <div class="flex flex-wrap my-6 text-lg">
                <label for="name"> Name</label>
                <input v-model="workout.name" class="border-b bg-transparent outline-none border-gray-700 w-full" type="text" >
            </div>
            <div class="flex flex-wrap my-6 text-lg">
                <label for="sets"> Sets</label>
                <input v-model="workout.sets" class="border-b bg-transparent outline-none border-gray-700 w-full" type="number" >
            </div>
            <div class="flex flex-wrap my-6 text-lg">
                <label for="reps"> Reps</label>
                <input v-model="workout.reps" class="border-b bg-transparent outline-none border-gray-700 w-full" type="number" >
            </div>
            <div class="flex flex-wrap my-6 text-lg">
                <label for="rest"> Rest</label>
                <input v-model="workout.rest" class="border-b bg-transparent outline-none border-gray-700 w-full" type="number" >
            </div>
            <div class="flex flex-wrap my-6 text-lg">
                <label for="categoryId"> Category</label>
                <select v-model="workout.categoryId" class="border-b bg-transparent outline-none border-gray-700 w-full">
                <option disabled selected> Choose a Categories</option>
                <option :value="category.id" v-for="category in categories" :key="category.id">{{ category.name }}</option>
                </select>
            </div>

            <div class="flex justify-between mt-4">
                <router-link :to="{ name : 'Workouts'}" class="text-gray-300  rounded-sm px-4 py-1 mt-1 border-sm bg-sky-400 border border-sky-400 hover:bg-transparent transition  hover:text-gray-600"> <i class="fa-solid fa-circle-arrow-left"></i> Back</router-link>
                <button class="text-gray-300 rounded-sm px-4 py-1 mt-1  border-sm bg-sky-400 border border-sky-400 hover:bg-transparent transition hover:text-gray-600"> Create</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data (){
            return{
                categories : [],
                workout :{
                    name : '',
                    sets : null,
                    reps : null,
                    rest : null,
                    categoryId : null
                }
            }
        },
        mounted () {
            axios.get('http://localhost:3000/categories').then((res)=>{
                this.categories = res.data;
            }).catch((res)=>{
                alert('Error!')
            })
        },
        methods :{
            saveImage(e){
                let file = e.target.files[0]
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.addEventListener("load", () => {
                    this.workout.image = reader.result
                });
            },
            create(){
               axios.post('http://localhost:3000/workouts' , this.workout).then((res)=>{
                this.$router.push({name :"Workouts"});
               }).catch((res)=>{
                alert('Error')
               })
            }
        }
    }
</script>

<style  scoped>

</style>
