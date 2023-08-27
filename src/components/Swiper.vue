<template>
    <swiper 
      :modules="modules"
      effect="slide"
      :speed="1500"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
      class="z-10"
    >
      <swiper-slide v-for="image in images" :key="image" class="w-full sticky">
          <img class="w-fit " :src="image" alt="">
      </swiper-slide>
    </swiper>
  </template>
    
  <script>
  import SwiperClass, { Pagination, Autoplay, EffectFade } from "swiper";
  import { Swiper, SwiperSlide } from "vue-awesome-swiper";
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/effect-fade";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
          images : [
              './images/slide1.jpg',
              './images/slide2.jpg',
              './images/slide3.jpg',
          ]
      }
    },
    setup() {
      return {
        modules: [Pagination, Autoplay, EffectFade],
      };
    },
  };
  </script>

<style lang="scss" scoped>

</style>