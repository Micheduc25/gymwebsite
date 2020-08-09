<template>
<transition type="fade">
  <div class="app-home">
    <swiper  :options="swiperOption">
      <swiper-slide :key="`slide${index}`" v-for="(image,index) in slide_images" class="swiper-slide">
        <img :src="'/images/'+image" :alt="`slide image ${index+1}`">
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <section class="mt-4">
        <middle-block  image-src="p6.png" :tags="['ux design', 'professionalism', 'experience']">
          <div slot="title1">
            Engineering at its Purest Form
          </div>
          <div slot="title2">
            Science at the Service of Humanity
          </div>
          <p slot="text1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores
            deleniti dolor doloremque eum excepturi nesciunt sed vitae? Aperiam asperiores
            assumenda, dolor dolore dolores ducimus enim explicabo fugiat harum incidunt
            ipsam itaque minima minus molestias, necessitatibus nihil nulla optio perferendis
            provident quae saepe sunt tempore!
          </p>
          <p slot="text2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores
            deleniti dolor doloremque eum excepturi nesciunt sed vitae? Aperiam asperiores
            assumenda, dolor dolore dolores ducimus enim explicabo fugiat harum incidunt
            ipsam itaque minima minus molestias, necessitatibus nihil nulla optio perferendis
            provident quae saepe sunt tempore!
          </p>

        </middle-block>

      <middle-block :reversed="true"  image-src="p3.png" :tags="['ux design', 'professionalism', 'experience']">
          <div slot="title1">
            Engineering at its Purest Form
          </div>
          <div slot="title2">
            Science at the Service of Humanity
          </div>
          <p slot="text1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores
            deleniti dolor doloremque eum excepturi nesciunt sed vitae? Aperiam asperiores
            assumenda, dolor dolore dolores ducimus enim explicabo fugiat harum incidunt
            ipsam itaque minima minus molestias, necessitatibus nihil nulla optio perferendis
            provident quae saepe sunt tempore!
          </p>
          <p slot="text2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores
            deleniti dolor doloremque eum excepturi nesciunt sed vitae? Aperiam asperiores
            assumenda, dolor dolore dolores ducimus enim explicabo fugiat harum incidunt
            ipsam itaque minima minus molestias, necessitatibus nihil nulla optio perferendis
            provident quae saepe sunt tempore!
          </p>

        </middle-block>
    </section>

    <h1 class="text-3xl font-bold text-center mb-6">What We Do?</h1>
    <section class="services mb-6 flex flex-wrap justify-center">
        <service-card :items="[
            'Web and Mobile App Development',
            'IT System Security ',
            'Big Data and Neural Networks',
             'Network Installation'
        ]" icon="com" title="IT Services">

        </service-card>

      <service-card :items="[
            'House and Company wiring',
            'Smart Devices and Buildings ',
            'Electronics Creation Maintenance',
             'Robotics and AI'
        ]" icon="ee" title="Electronics Services">

        </service-card>

      <service-card :items="[
            'Design and Creation of Mechanical Systems',
            'Automobile Maintenance and Repair',
            'Technical Advice'
        ]" icon="mec" title="Mechanical Services">

        </service-card>

      <service-card :items="[
            'CAD of Buildings',
            'Architectural Plans and Prototypes',
            'Physical Implementation of Structures',

        ]" icon="civ" title="Architectural Design">

        </service-card>
    </section>
  </div>
</transition>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import middleBlock from "@/components/blocks/image-text-block";
import {mapGetters} from "vuex";
import serviceCard from "@/components/service-card";
import "swiper/swiper-bundle.css";
export default {
  name: "Home",
  title: "3D Coverflow effect",
  components: {
    Swiper,
    SwiperSlide,
    middleBlock,
    serviceCard
  },
  data() {
    return {
      swiperOption: {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        // loop: true,
        autoplay: {
          delay: 3000,

        },
      },

      slide_images:[
        "slide1.jpg",
        "slide2.jpg",
        "slide3.jpg",
        "slide4.jpg",
        "slide5.jpg"
      ]
    };
  },

  computed:{
    ...mapGetters("header",["header_height"])
  },

};
</script>

<style lang="scss" scoped>
@import "../assets/styles/swiper.css";
.swiper-container {
  width: 100%;
  height: 500px;

}

.swiper-wrapper {
  height: 100%;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width:100%;
    text-align: center;
    font-weight: bold;

    background-color: #2c8dfb;
    background-position: center;
    background-size: cover;
    color: white;
    //border: red solid 1px;
    //-webkit-box-reflect: below 1px linear-gradient(transparent, transparent, #0006);
  }
  // .swiper-slide {
  //   background-position: center;
  //   background-size: cover;
  //   width: 300px;
  //   height: 300px;
  //   background: #000;
  //   -webkit-box-reflect: below 1px
  //     linear-gradient(transparent, transparent, #0006);
  // }

  .swiper-pagination {
    /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: red;
    }
  }
}
</style>
