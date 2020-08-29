<template>
  <div class="our-services">

    <swiper :options="swiperOptions">
        <swiper-slide v-for="(image,index) in images" :key="`ser${index}`">

          <slide-item
              height="350"
              :image="image"
              action-text="See More"
              heading="The Heading here"
              sub-heading="This is the Sub Heading"
              has-bg-color

          >

          </slide-item>
        </swiper-slide>
    </swiper>

    <div class="service-content  my-6 mx-4 " >
        <service-card title="I.T Services"
                      text="`
                      Do it today. Remind yourself of someone
                       you know who died
                       suddenly and the fact that there is
                        no guarantee that tomorrow will come.
                      `"
                      icon="bullhorn.svg">

        </service-card>
      <service-card title="Information Security"
                      text="`
                      Do it today. Remind yourself of someone
                       you know who died
                       suddenly and the fact that there is
                        no guarantee that tomorrow will come.
                      `"
                      icon="bullhorn.svg">

        </service-card>
      <service-card title="Information Security"
                    text="`
                      Do it today. Remind yourself of someone
                       you know who died
                       suddenly and the fact that there is
                        no guarantee that tomorrow will come.
                      `"
                    icon="bullhorn.svg">

      </service-card>
      <service-card title="Information Security"
                    text="`
                      Do it today. Remind yourself of someone
                       you know who died
                       suddenly and the fact that there is
                        no guarantee that tomorrow will come.
                      `"
                    icon="bullhorn.svg">

      </service-card>
      <service-card title="Information Security"
                    text="`
                      Do it today. Remind yourself of someone
                       you know who died
                       suddenly and the fact that there is
                        no guarantee that tomorrow will come.
                      `"
                    icon="bullhorn.svg">

      </service-card>
      <service-card title="Information Security"
                    text="`
                      Do it today. Remind yourself of someone
                       you know who died
                       suddenly and the fact that there is
                        no guarantee that tomorrow will come.
                      `"
                    icon="bullhorn.svg">

      </service-card>
    </div>

    <div class="bg-blue-700 p-4 w-full">
        <h1 class="text-4xl mb-4 text-white font-bold">Tell us about your idea, and we’ll make it happen</h1>
        <h2 class="text-xl mb-6 text-white font-bold">Have a brand problem that needs to be solved? We’d love to hear about it!</h2>
        <button class="bg-red-600 rounded-full p-4 text-white text-2xl font-bold">Let's get Started <span class="text-2xl">&#10137;</span></button>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper';
import slideItem from "@/components/slideItem";
import serviceCard from "@/components/service-card2"
// import 'swiper/bundle/'
export default {
  name: "services",
  data(){
    return {
      swiperOptions: {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        // loop: true,
        autoplay: {
          delay: 3000,
        }

      },

      images:[
        "slide2.jpg",
        "slide3.jpg",
        "slide4.jpg",
        "slide5.jpg"
      ]


    }
  },
  components:{
    Swiper,
    SwiperSlide,
    slideItem,
    serviceCard
  },


}
</script>

<style lang="scss" scoped>
  .service-content{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    padding:0 30px;
  }
</style>