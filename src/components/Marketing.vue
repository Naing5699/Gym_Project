<template>
    <div class="p-8">
        <h1 class="sm:text-4xl text-xl font-bold text-center mt-8 ">YOUR SUCCESS MADE SIMPLER</h1>
        <p class="sm:text-xl  text-sm text-center">Enjoy proven results already achieved by over 20,000 clubs worldwide</p>
        <div class="sm:flex justify-center mt-4">
            <div class="sm:w-1/5 sm:px-4" data-aos="zoom-in" data-aos-duration="1000" v-for="part in parts" :key="part.heading">
                <img   :src="part.image" class="sm:w-full w-1/2 sm:ml-[0%] ml-[25%]" alt="">
                <h1  class="text-center text-xl my-2 font-bold  ">{{ part.heading }}</h1>
                <p  class="text-center  font-normal " >{{ part.para }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                parts : [
                    {
                        image : './images/Member.png',
                        heading : 'MORE MEMBER',
                        para : `6/10 members* say a club's group fitness timetable influences their decision to join.`
                    },
                    {
                        image : './images/ENGAGEMENT.png',
                        heading : 'MORE ENGAGEMENT',
                        para : `Over 85% of group exercise participants* visit their club at least twice a week.`
                    },
                    {
                        image : './images/REFERRALS.png',
                        heading : 'MORE REFERRALS',
                        para : `95% of members who do LES MILLS® classes* would recommend them to others.`
                    }

                ]
            }
        }
    }
</script>

<style scoped>

</style>