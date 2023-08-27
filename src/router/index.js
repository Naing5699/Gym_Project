import { createRouter, createWebHistory } from 'vue-router'

import IndexView from "../views/users/index.vue";
import HomeView from "../views/users/Home.vue";
import WorkoutByCategory from "../views/users/WorkoutByCategory.vue"
import BlogView from "../views/users/BlogView.vue"
import BlogsView from "../views/users/BlogsView.vue"
import WorkoutsView from "../views/users/WorkoutsView.vue"
import AboutUs from "../views/users/AboutUs.vue"
import ContactUs from "../views/users/ContactUs.vue"
import CategoriesView from "../views/users/CategoriesView.vue"



import Login from "../views/auth/login.vue"
import Register from "../views/auth/register.vue"

import Layout from '../views/admin/Layout.vue';

import Categories from '../views/admin/categories/index.vue';
import Createcategory from '../views/admin/categories/create.vue';
import Editcategory from '../views/admin/categories/Edit.vue';

import Workouts from "../views/admin/workouts/Index.vue"
import Createworkout from "../views/admin/workouts/create.vue"
import Editworkout from "../views/admin/workouts/Edit.vue"

import Blogs from "../views/admin/blogs/index.vue"
import CreateBlogs from "../views/admin/blogs/create.vue"
import Editblog from "../views/admin/blogs/Edit.vue"
import Showblog from "../views/admin/blogs/Show.vue"

import MapView from "../views/admin/MapView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : "IndexView",
      component : IndexView,
      children : [
        {
          path : '',
          name  : "HomeView",
          component : HomeView
        },
        {
          path : 'categories/:id',
          name  : "WorkoutByCategory",
          component : WorkoutByCategory
        },
        {
          path : 'blogs',
          name  : "BlogsView",
          component :BlogsView
        },
        {
          path : 'categories',
          name  : "CategoriesView",
          component :CategoriesView
        },
        {
          path : 'blogs/:id',
          name  : "BlogView",
          component :BlogView
        },
        {
          path : 'workouts',
          name  : "WorkoutsView",
          component :WorkoutsView
        },
        {
          path : 'aboutus',
          name  : "AboutUs",
          component :AboutUs
        },
        {
          path : 'contactus',
          name  : "ContactUs",
          component :ContactUs
        }
      ]
    },
    {
      path : '/login',
      name : "Login",
      component : Login
    },
    {
      path : '/register',
      name : "Register",
      component : Register
    },
    {
      path : '/admin',
      name : "Layout",
      component : Layout,
      meta : {
        middleware : 'admin'
      },
      children : 
      [
        {
            path : 'categories',
            name : "Categories",
            component :Categories
        },
        {
          path : 'categories/create',
          name : "Createcategory",
          component :Createcategory
        },
        {
          path : 'categories/:id',
          name : "Editcategory",
          component :Editcategory
        },
        {
          path : 'workouts',
          name : "Workouts",
          component :Workouts
        },
        {
          path : "workouts/create",
          name : "Createworkout",
          component : Createworkout
        },
        {
          path : 'workout/:id',
          name : "Editworkout",
          component :Editworkout
        },
        {
          path : 'blogs',
          name : "Blogs",
          component :Blogs
        },
        {
          path : 'blogs/create',
          name : "CreateBlogs",
          component :CreateBlogs
        },
        {
          path : 'blogs/:id',
          name : "Editblog",
          component :Editblog
        },
        {
          path : 'blogs/show/:id',
          name : "Showblog",
          component :Showblog
        },
        {
          path : 'map',
          name : "MapView",
          component : MapView
        }
        
      ]
    }
    
  ]

})

router.beforeEach((to, from, next)=>{
if (to.meta.middleware == 'admin') {
  let email =   localStorage.getItem('email')
    if (email) {
      next()
    }else{
      window.location.assign('/login')
    }
}else{
  next()
}
})

export default router
