<template>
  <div class="swiper-container">
    <swiper class="swiper-wrapper" :options="swiperOption">
      <swiper-slide class="swiper-slide">Slide 1</swiper-slide>
      <swiper-slide class="swiper-slide">Slide 2</swiper-slide>
      <swiper-slide class="swiper-slide">Slide 3</swiper-slide>
      <swiper-slide class="swiper-slide">Slide 4</swiper-slide>
      <swiper-slide class="swiper-slide">Slide 5</swiper-slide>
      <swiper-slide class="swiper-slide">Slide 6</swiper-slide>
      <swiper-slide class="swiper-slide">Slide 7</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/swiper-bundle.css";
export default {
  name: "Home",
  title: "3D Coverflow effect",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        effect: "coverflow",
        spaceBetween: 30,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        loop: true,
        autoplay: {
          delay: 500,
          disableOnInteraction: false,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/swiper.css";
.swiper-container {
  width: 100%;
  height: 400px;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-wrapper {
  height: 100%;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    text-align: center;
    font-weight: bold;

    background-color: #2c8dfb;
    background-position: center;
    background-size: cover;
    color: white;
    border: red solid 1px;
    -webkit-box-reflect: below 1px
      linear-gradient(transparent, transparent, #0006);
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
