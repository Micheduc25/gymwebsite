<template>
<transition type="fade">
  <div class="app-home">
    <swiper  :options="swiperOption">
      <swiper-slide :key="`slide${num}`" v-for="num in 7" class="swiper-slide">Slide{{num}}</swiper-slide>

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
  </div>
</transition>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import middleBlock from "@/components/blocks/image-text-block";
import {mapGetters} from "vuex";
// import "swiper/swiper-bundle.css";
export default {
  name: "Home",
  title: "3D Coverflow effect",
  components: {
    Swiper,
    SwiperSlide,
    middleBlock
  },
  data() {
    return {
      swiperOption: {
        effect: "coverflow",

        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        // coverflowEffect: {
        //   rotate: 20,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // },
        loop: true,
        autoplay: {
          delay: 5000,
          // disableOnInteraction: false,
        },
      },
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
