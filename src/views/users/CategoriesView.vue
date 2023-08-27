<template>
    <div>
        <h1>hello</h1>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return {
                categories : []
            }
        },
        mounted(){
            axios.get('http://localhost:3000/categories').then((res)=>{
                this.categories = res.data
            }).catch((res)=>{
                console.log(res);
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>