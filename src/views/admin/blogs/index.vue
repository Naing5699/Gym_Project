<template>
    <div>
        <vue-good-table class="p-6 " :columns="columns" :rows="blogs">
            <template #table-actions>
                    <router-link class="text-slate-400  rounded-sm px-4 py-1 mx-auto mt-1  border-sm hover:bg-gray-300 border border-gray-400 hover:bg-transparent  transition hover:text-gray-600 " :to="{name : 'CreateBlogs'}">Create Blogs</router-link>
            </template>
            <template #table-row="props">
                <span v-if="props.column.field == 'categories'">
                    {{ props.row.category.name }}
                </span>
                <span v-else-if="props.column.field == 'image'">
                    <img class="w-24" :src="props.row.image" alt="">
                </span>
                <span v-else-if="props.column.field == 'edit'">
                    <router-link class="px-2 py-1 rounded-sm bg-gray-300 text-gray-500  hover:bg-gray-400 hover:text-white" :to="{name : 'Editblog' , params :{id:props.row.id}}">Edit</router-link>
                    <router-link :to="{name :'Showblog' , params :{id:props.row.id}}" class="px-2 py-1 ml-2 rounded-sm bg-sky-400 text-gray-600  hover:bg-sky-400 hover:text-white">Show</router-link>
                </span>
                <span v-else>
                {{props.formattedRow[props.column.field]}}
                </span>
            </template>
        </vue-good-table>
    </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table-next';
import axios from 'axios';
    export default {
        components: {
             VueGoodTable,
        },
            data(){
                    return{
                        blogs : [],
                        columns : [
                            {
                                label :'Id',
                                field : 'id'
                            },
                            {
                                label :'Title',
                                field : 'title'
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
                    axios.get('http://localhost:3000/blogs').then((res)=>{
                        this.blogs = res.data;
                    }).catch((res)=>{
                        console.log(res);
                    })
                } 
         
    }     
</script>

<style  scoped>

</style>