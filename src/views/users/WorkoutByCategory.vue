<template>
    <div>
        <div class="p-6 flex " v-for="workout in workouts" :key="workout.id">
            <img class="w-1/3" :src="workout.image" alt="">
            <div class="ml-4" >
                <h1 class="text-2xl font-mono font-bold"> Name : {{ workout.name }}</h1>
                <p> Reps : {{ workout.reps }}</p>
                <p> Sets : {{ workout.sets }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                id : this.$route.params.id,
                workouts : []
            }
        },
        mounted(){
            axios.get(`http://localhost:3000/workouts?categoryId=${this.id}`).then((res)=>{
                this.workouts = res.data;
            }).catch((res)=>{
                console.log(res);
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>