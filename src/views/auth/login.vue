<template>
    <div class="sm:flex justify-center w-full  mt-10  ">
        <div class="sm:w-1/3  w-2/3  sm:ml-10 ml-16 shadow-2xl sm:mt-6 mt-0 ">
           <img class="w-full " :src="Image" alt="">
        </div>
        <div class="sm:w-1/3 w-2/3 ml-16  sm:ml-0 sm:mt-6 mt-0 sm:p-6 p-3 border sm:shadow-2xl shadow-xs">
            <h1 class="sm:text-3xl text-xl text-indigo-800 italic text-center sm:text-left">Psycho Zone!</h1>
            <form @submit.prevent="loginUser" >
                <div class="mt-4">
                    <label  class="sm:text-lg text-sm italic " for="email">Email</label>
                    <input v-model="user.email" placeholder="johndoe@email.com" required class="w-full border outline-none sm:px-2 sm:py-1 px-1 py-0 sm:mt-2 mt-1 rounded-md" type="text">
                </div>
                <div class="mt-4">
                    <label  class="sm:text-lg text-sm italic mt-10 " for="email">Password</label>
                    <input  v-model="user.password" placeholder="Enter your password" required class="w-full border outline-none sm:px-2 px-1 sm:py-1 py-0 sm:mt-2 mt-1 rounded-md" type="password">
                </div>
                <div class="mt-4">
                    <button class="w-full text-white bg-pink-600 rounded-md sm:py-2 py-1   ">Login</button>
                </div>
                <div>
                    <p class="flex justify-end text-sm sm:text-lg">Forget Password? </p>
                        <br><br>
                    <hr><hr><hr>
                </div>
                <div class="flex justify-center mt-10 ">
                    <i class="fa-brands fa-instagram fa-2xl px-4  "></i>
                    <i class="fa-brands fa-facebook fa-2xl px-4 "></i>
                    <i class="fa-brands fa-viber fa-2xl px-4"></i>
                </div>
                <div class="flex justify-center mt-8 ">
                     <router-link  class="sm:text-lg text-sm font-medium " :to="{name : 'Register'}">Create Account?</router-link>
                </div>                
            </form>
        </div>

    </div>
        
</template>

<script>
import axios from 'axios'

    export default {
        data(){
            return{
                Image: "./images/gym.jpg",
                user : {
                    email : '',
                    password : '',
                }
            }
        },
        methods : {
            loginUser() {
                axios.get(`http://localhost:3000/users?email=${this.user.email}`).then((res) => {
                    if (res.data.length) {
                        if (res.data[0].password == this.user.password) {
                            localStorage.setItem('email' , res.data[0].email)
                            this.$router.push({name : 'Categories'})
                        } else {
                            alert('please try again')
                        }
                    } else {
                        alert('please try again')
                    }
                }).catch((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style  scoped>

</style>