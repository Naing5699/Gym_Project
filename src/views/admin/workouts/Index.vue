
<template>
    <div class="p-6">
     <vue-good-table :columns="columns" :rows="workouts">
            <template #table-actions>
                <router-link class="text-slate-400  rounded-sm px-4 py-1 mx-auto mt-1  border-sm hover:bg-gray-300 border border-gray-400 hover:bg-transparent  transition hover:text-gray-600 " :to="{name : 'Createworkout'}">Create Workouts</router-link>
            </template>
            <template #table-row="props">
                <span v-if="props.column.field == 'categories'">
                    {{ props.row.category.name }}
                </span>
                <span v-else-if="props.column.field == 'image'">
                    <img class="w-24 " :src="props.row.image" alt="">
                </span>
                <span v-else-if="props.column.field == 'edit'">
                    <router-link class="px-2 py-1 rounded-sm bg-gray-300 text-gray-500  hover:bg-gray-400 hover:text-white" :to="{name : 'Editworkout' , params :{id:props.row.id}}">Edit</router-link>
                    <button @click="deleteWorkout(props.row.id)" class="px-2 py-0.5 ml-2 rounded-sm bg-red-400 text-gray-500  hover:bg-red-500 hover:text-white">Delete</button>
                </span>
                <span v-else>
                     {{props.formattedRow[props.column.field]}}
                </span>
            </template>
            
    </vue-good-table>
    </div>
</template>

<script>
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { VueGoodTable } from 'vue-good-table-next';
import axios from 'axios';
    export default {
        components: {
            VueGoodTable,
        },
        data(){
            return{
                workouts : [],
                columns : [
                    {
                        label :'Id',
                        field : 'id'
                    },
                    {
                        label :'Image',
                        field : 'image'
                    },
                    {
                        label :'Name',
                        field : 'name'
                    },
                    {
                        label :'Sets',
                        field : 'sets'
                    },
                    {
                        label :'Reps',
                        field :  'reps'
                    },
                    {
                        label :'Rest',
                        field :  'rest'
                    },
                    {
                        label :'Categories',
                        field :  'categories'
                    },
                    {
                        label : 'Edit',
                        field : 'edit'
                    }

                ]
            }
        },
        mounted (){
            axios.get('http://localhost:3000/workouts?_expand=category').then((res)=>{
                this.workouts = res.data;
            }).catch((res)=>{
                console.log(res);
            })
        } ,
        methods :{
            deleteWorkout(id){
                axios.delete(`http://localhost:3000/workouts/${id}`).then((res)=>{
                    window.location.reload();
                }).catch((res)=>{
                    alert("Error")
                })
            }
        }  
    }
</script>

<style  scoped>

</style>