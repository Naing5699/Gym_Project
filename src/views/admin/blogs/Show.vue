<template>
  <div class="flex justify-center mt-10">
    <div class="mt-6 p-4 shadow-lg bg-gray-100 w-2/3">
        <img class=" w-2/3 shadow-xl " :src="blog.image" alt="">
        <h1 class="text-xl italic font-semibold mt-2">Title : {{ blog.title }}</h1><br>
        <p class="text-xl font-serif "> Body : {{ blog.body }}</p><br>
        <div class="flex justify-between">
          <button @click="deleteBlog(id)" class="px-2 py-0.5 ml-2 rounded-sm bg-red-400 text-gray-500  hover:bg-red-500 hover:text-white">Delete</button>
          <router-link  :to="{name : 'Blogs'}" class="text-gray-300  rounded-sm px-4 py-1 mt-1 border-sm bg-sky-400 border border-sky-400 hover:bg-transparent transition  hover:text-gray-600"> <i class="fa-solid fa-circle-arrow-left"></i> Back</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        id : this.$route.params.id,
        blog : {}
    }
  },
  mounted() {
    axios.get(`http://localhost:3000/blogs/${this.id}`).then((res) => {
        this.blog = res.data;
      }).catch((res) => {
        console.log(res);
      });
  },
  methods: {

    deleteBlog(id){
        axios.delete(`http://localhost:3000/blogs/${id}`).then((res)=>{
          this.$router.push({name : 'Blogs'})
        }).catch((res)=>{
            alert("Error")
        })
    }
  }
};
</script>

<style  scoped>
</style>