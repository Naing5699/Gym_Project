<template>
    <div>

        <vue-good-table class="p-6 " :columns="columns" :rows="categories">
            <template #table-actions>
                <router-link class="text-slate-400  rounded-sm px-4 py-1 mx-auto mt-1  border-sm hover:bg-gray-300 border border-gray-400 hover:bg-transparent  transition hover:text-gray-600 " :to="{name : 'Createcategory'}">Create Categories</router-link>
            </template>
            <template #table-row="props">
                <span v-if="props.column.field == 'edit'">
                    <router-link class="px-2 py-1 rounded-sm bg-gray-300 text-gray-500  hover:bg-gray-400 hover:text-white" :to="{name : 'Editcategory' , params :{id:props.row.id}}">Edit</router-link>
                    <button @click="deleteCategory(props.row.id)" class="px-2 py-0.5 ml-2 rounded-sm bg-red-400 text-gray-500  hover:bg-red-500 hover:text-white">Delete</button>
                </span>
                <span v-else-if="props.column.field == 'image'">
                    <img class="w-24" :src="props.row.image" alt="">
                </span>

                <span v-else>
                {{props.formattedRow[props.column.field]}}
                </span>
            </template>
        </vue-good-table>
        
    </div>
</template>

<script>
import axios from 'axios'
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table-next';

export default {
        components: {
             VueGoodTable,
        },
        data(){
            return{
                categories : [],
                columns : [
                    {
                        label :'Id',
                        field : 'id'
                    },
                    {
                        label :'Name',
                        field : 'name'
                    },
                    {
                        label :'Image',
                        field : 'image'
                    },
                    {
                        label :'Edit',
                        field : 'edit'
                    },

                ]
            }
        },
        mounted (){
            axios.get('http://localhost:3000/categories').then((res)=>{
                this.categories = res.data;
            }).catch((res)=>{
                console.log(res.data);
            })
        },
        methods : {
            deleteCategory (id){
                axios.delete(`http://localhost:3000/categories/${id}`).then((res)=>{
                    window.location.reload();
                }).catch((res)=>{
                    alert(res)
                })
            }
        }
        
    }
</script>

<style  scoped>

</style>