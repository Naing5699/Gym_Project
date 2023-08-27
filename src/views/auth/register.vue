<template>
    <div class="sm:flex justify-center mt-10  ">
        <div class="sm:w-1/3 w-2/3 mt-10 sm:ml-10 ml-16 shadow-2xl">
            <img class="w-full " :src="image" alt="">
        </div>
        <div class="sm:w-2/4 w-2/3 sm:mt-10 mt-0 border shadow-2xl sm:ml-0 ml-16  p-4">
            <h1 class="sm:text-2xl text-xl text-center sm:text-left text-indigo-800  italic p-2 ">Registration</h1>
            <form @submit.prevent="register">
                <div class="sm:flex flex-wrap sm:p-2 p-1  ">
                    <div class="flex flex-wrap w-full sm:w-1/2 p-2">
                        <label class="sm:text-left text-center" for="uname">User Name</label>
                        <input v-model="user.name" required placeholder="Enter your name" class="shadow-lg rounded-md  outline-none border w-full  sm:px-2 px-1 sm:py-1 " type="text">
                    </div>
                    <div  class="flex flex-wrap sm:w-1/2 w-full p-2">
                        <label   for="email">Email</label>
                        <input  v-model="user.email" required placeholder="Enter your email" class="shadow-lg rounded-md  outline-none border w-full sm:px-2 px-1 sm:py-1" type="email">
                    </div>
                    <div class="flex flex-wrap sm:w-1/2 w-full p-2">
                        <label  for="password">Password</label>
                        <input v-model="user.password" required  placeholder="Enter your password"  class="shadow-lg rounded-md outline-none border w-full sm:px-2 px-1 sm:py-1" type="password">
                    </div>
                    <div class="flex flex-wrap sm:w-1/2 w-full p-2">
                        <label   for="cpassword"> Confirm Password</label>
                        <input v-model="user.confirm_password" required placeholder="Confirm your password" class="shadow-lg rounded-md  outline-none border w-full sm:px-2 px-1 sm:py-1" type="password">
                    </div>
                    
                    <div class="sm:pt-8   w-full p-2 ">
                        <button class="w-full rounded-md sm:p-2 p-1  mt-6 bg-pink-600">Sign up</button>
                    </div>
                    <div class="sm:flex justify-center sm:mt-6 text-center  w-full ">
                        <span class="sm:text-lg text-xs ">Or,continue with  <span class=" text-blue-700">Google</span>  or  <span class=" text-blue-700">Facebook</span> </span>
                    </div>
                </div>
                <div class="sm:flex justify-center text-center">
                    <p class="sm:text-lg text-xs pt-0">Already have an account? <router-link class="px-2" :to="{name : 'Login' }">Sign In</router-link> </p>

                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return {
                image : "./images/register.jpg",
                user : {
                    name : '',
                    email : '',
                    password : '',
                    confirm_password : '',
                    role : 'admin'
                }
            }
        },
        methods : {
            register(){
                axios.post('http://localhost:3000/users',this.user).then((res)=>{
                    localStorage.setItem('email', res.data.email)
                    this.$router.push({name : 'Categories'})
                }).catch((res)=>{
                 alert('Error!')
                 console.log(res);
                })
            }
        }
    }
</script>

<style  scoped>

</style>