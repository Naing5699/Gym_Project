<template>
    <div class="" >
        <nav class="bg-slate-600 text-white hidden sm:flex justify-between p-2 my-auto w-full sticky top-0 z-50 ">
            <h1 class="text-4xl text-lime-400 italicvw-2/3">GYM Zone!</h1>
                <ul class="flex my-auto">
                    <li class="mx-4 my-auto hover:text-lime-400" v-for="item in navitems" :key="item.name">
                        <router-link  :to="{name :item.path}">{{ item.name }}</router-link>
                    </li>
                    <router-link class=" text-slate-300 rounded-sm px-4 py-1 mx-auto mt-1  border-sm bg-slate-800 border border-slate-200 hover:bg-transparent transition " :to="{name : 'Login' }" >Login</router-link>
                </ul>   
        </nav>
        <nav class="bg-slate-600 text-white sm:hidden flex justify-between p-2 my-auto w-full sticky top-0 z-50 ">
            <h1 class="text-4xl text-lime-400 italicvw-2/3">GYM Zone!</h1>
                
            <div class="my-auto">
               <button @click="sideBar = !sideBar"> <i class="fa-solid fa-bars text-white fa-lg"></i> </button> 
            </div>
        </nav>
        <Transition name="side">
            <div v-if="sideBar" class="fixed h-screen right-0 px-12 p-4 bg-slate-600 z-50">
            <ul  @click="sideBar = !sideBar" class=" my-auto">
                    <li class="p-3 my-auto text-white hover:text-lime-400 underline" v-for="item in navitems" :key="item.name">
                        <router-link  :to="{name :item.path}">{{ item.name }}</router-link>
                    </li>
                    <router-link class=" text-slate-300 rounded-sm px-4 py-1 mx-auto mt-1  border-sm bg-slate-800 border border-slate-200 hover:bg-transparent transition " :to="{name : 'Login' }" >Login</router-link>
                </ul>   
        </div>
        </Transition>
        <div>
            <router-view ></router-view>
        </div>
        
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                sideBar : false,
                navitems : [
                    {
                        name : "Home",
                        path : "HomeView"
                    },
                    {
                        name : "Categories",
                        path : "CategoriesView"
                    },
                    {
                        name : "Workouts",
                        path : "WorkoutsView"
                    },
                    {
                        name : "Blogs",
                        path : "BlogsView"
                    },
                    {
                        name : "Contact Us",
                        path : "ContactUs"
                    },
                    {
                        name : "About Us",
                        path : "AboutUs"
                    }
                ]
            }
        }
        
    }
</script>

<style  scoped>
.side-enter-from , .side-leave-to {
    transform: translateX(100px);
    opacity: 0.5;
}
.side-enter-active , .side-leave-active {
    transition: all 0.3s ease;
}
</style>