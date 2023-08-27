<template>
    <div class="p-8">
        <h1 class="sm:text-4xl text-xl font-bold text-center mt-8 ">GET THE FITNESS RESULTS YOU WANT.</h1>

        <div>
            <div class="sm:flex justify-center  p-6 " v-for="blog in blogs" :key="blog.id">
                <img data-aos="zoom-in" data-aos-duration="1000" class=" sm:w-1/3  w-[90%]" :src="blog.image" alt="">
                <div class="sm:mx-4 " data-aos="zoom-in" data-aos-duration="1000">
                    <h1  class=" sm:text-2xl text-lg">{{ blog.title }}</h1>
                    <p  class="paragraph mb-3 text-xs">{{ blog.body }}</p>
                    <div data-aos="zoom-in" data-aos-duration="1000" >
                        <router-link :to="{name :'BlogView' , params :{id:blog.id}}"  class="text-black  rounded-sm px-6 py-2  border-sm bg-slate-300 border border-slate-200 hover:bg-transparent hover:bg-slate-400 transition" > Read More </router-link>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return {
                blogs : [],
            }
        },

        mounted (){
            axios.get('http://localhost:3000/blogs').then((res)=>{
                this.blogs = res.data.slice(0,5);
            }).catch((res)=>{
                console.log(res);
            })
        }
    }
</script>

<style  scoped>
.paragraph {
        overflow: hidden;
        -webkit-line-clamp: 5;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
</style>