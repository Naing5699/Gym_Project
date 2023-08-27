<template>
    <div class="p-8">
        <h1 class="sm:text-4xl text-xl font-bold text-center my-8 ">YOUR SUCCESS MADE SIMPLER</h1>
        <div class="flex flex-col sm:flex-row items-center flex-wrap justify-around ">
            <div class="sm:w-1/4 w-full hover:scale-105 p-2" v-for="category in categories" :key="category.id">
                <router-link :to="{name:'WorkoutByCategory', params:{id:category.id}}" >
                    <img class="w-[80%] shadow-xl ml-[10%] " :src="category.image" alt="">
                    <h1 class="sm:text-xl text-sm ml-[10%] italic font-semibold  w-full ">{{ category.name }}</h1>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                categories : [],
            }
        },
        mounted(){
            axios.get('http://localhost:3000/categories').then((res)=>{
                this.categories= res.data;
            }).catch((res)=>{
                console.log(res);
            })
        }

        
    }
</script>

<style lang="scss" scoped>

</style>