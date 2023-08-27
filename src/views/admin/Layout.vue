<template>
    <div class="text-gray-800 ">
        <nav class="flex justify-between p-2 bg-slate-600 sticky top-0 z-50 shadow-lg">
            <h1 class="text-3xl text-lime-300 italic"> Welcome to GYM Zone!</h1>
            <ul class="flex my-auto">
                
                <li class="flex justify-end">
                    <button  class="text-slate-300 rounded-sm px-4 py-1 mx-auto mt-1  border-sm bg-slate-800 border border-slate-200 hover:bg-transparent transition" >Logout</button>
                </li>
            </ul>
        </nav>   
        <div class="flex h-screen">
            <div class="w-[20%] shadow-lg bg-gray-200">
                <h1 class=" text-xl italic text-center py-4 "> <i class="fa-solid fa-heart-crack"></i> Khin Bhone Thet Wai Gallery</h1>
                    <h1 class="text-center text-slate-300 bg-slate-600 py-2">Admin Dashboard</h1>
                    <ul class="flex flex-col my-auto py-4 w-full">
                        <li v-for="item in navitems" :key="item.name" class="w-full">
                            <router-link class="text-slate-600 w-full block p-4 hover:border-b hover:text-slate-900 hover:border-slate-900" :to="{name : item.path}"><i class="m-1" :class="item.icon"></i>{{ item.name }}</router-link>
                        </li>
                        
                    </ul>
             
            </div>
            <div class="w-[80%] z-10">
                <router-view></router-view>
            </div>
        </div> 
    </div>
        
    
    
</template>

<script>
    export default {
        data(){
            return {
                navitems : [
                    {
                        name : 'UserView',
                        path : 'HomeView',
                        icon : 'fa-solid fa-user'
                    },
                    
                    {
                        name : 'Categories',
                        path : 'Categories',
                        icon : 'fa-solid fa-bars-staggered'
                    },
                    {
                        name : 'Workouts',
                        path : 'Workouts',
                        icon : 'fa-solid fa-users-rectangle'
                    },
                    {
                        name : 'Blogs',
                        path : 'Blogs',
                        icon : 'fa-solid fa-blog'
                    
                    },
                    {
                        name : 'Maps',
                        path : 'MapView',
                        icon : 'fa-solid fa-location-dot'
                    },
                    {
                        name : 'Documents',
                        path : '',
                        icon : 'fa-solid fa-file'
                    }
                    
                    
                ]
        }
    }
    }
    </script>

<style  scoped>

</style>