<template>
    <div>
        
        <Swiper class="sm:h-[91vh] w-screen z-50"/>
        <h1 class="absolute top-[15%] sm:top-[30%] z-10 w-1/2 left-[25%] sm:text-7xl font-bold text-gray-300 text-center">ONE BAR FOR EVERY WORKOUT</h1>
        <router-link :to="{name : 'Register'}" class="text-white z-10 absolute sm:top-[60%]  top-[20%] left-[35%] sm:left-[45%] rounded-sm sm:p-2  m-3 p-1   border-sm bg-slate-800 border border-slate-200 hover:bg-transparent transition" > Register Now </router-link>
        
        <!-- marketing -->
        <Marketing/>

        <!-- categories -->
        <Categories/>

        <!-- blog -->
        <Blogs/>
    
    </div>
</template>

<script>
import Swiper from '../../components/Swiper.vue';
import Marketing from '../../components/Marketing.vue'
import Blogs from '../../components/Blogs.vue'
import Categories from '../../components/Categories.vue';
    export default {
        components : {
            Swiper,Marketing,Blogs,
                Categories
        }
        
    }
</script>

<style  scoped>

</style>