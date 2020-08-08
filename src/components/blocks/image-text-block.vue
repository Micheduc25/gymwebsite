<template>
  <div class="middle-block1 mb-16">
    <div :class="'my-container '+ (reversed?'reversed':'')">
      <div class="my-container__left">
        <div class="block_upper mb-10">
          <div class="title flex items-start fontB">
            <div class="title-bullet"></div>
            <span class="text-2xl md:text-3xl font-bold leading-none">
              <slot name="title1"></slot>
            </span>
          </div>
          <div class="m-text-content text pt-2">
            <p>
              <slot name="text1"></slot>
            </p>
            <div class="fontB">
              Qu'est ce qui est unique chez
              <span style="color: rgb(1, 1, 34)" class="font-bold">G.Y.M</span>
            </div>
          </div>
        </div>
        <div class="block_lower">
          <div class="title flex items-start fontB">
            <div class="title-bullet"></div>
            <span class="text-2xl md:text-3xl font-bold leading-none">
              <slot name="title2"></slot>
            </span>
          </div>
          <div class="m-text-content text pt-2">
            <p>
              <slot name="text2"></slot>
            </p>

            <div class="font-bold">
              <span class="mr-1" v-for="(value, index) in tags" :key="index">{{value}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="my-container__right flex items-center">
        <img :src=" `/images/` +imageSrc" alt="block image" class="block__image" />
      </div>
    </div>
  </div>
</template>

<script>
// import preTitle from "../../pretitle/pre-title";

export default {
  name: "middle-block1",
  props: {
    imageSrc: String,
    reversed: {
      type: Boolean,
      default: false,
    },
    tags: {
      type: Array,
      default: ()=>[]
    },
  },

};
</script>

<style lang="scss" scoped >
.my-container {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  box-sizing: border-box;
  padding: 0 4vw !important;
  width: 100%;
  @media (max-width: 950px) {
    padding: 0 2vw !important;
  }
  /*@media(max-width: 825px){*/
  /*    flex-direction: column-reverse;*/
  /*    align-items: center;*/
  /*}*/

  &.reversed {
    flex-direction: row-reverse;
  }
  &,
  &.reversed {
    @media (max-width: 825px) {
      flex-direction: column-reverse;
      align-items: center;
    }
  }

  &__left {
    flex: 2 1 50%;
  }

  &__right {
    flex: 1 2 50%;
    display: flex;
    justify-content: center;
    @media (max-width: 825px) {
      width: max-content;
      height: max-content;
    }
    .block__image {
      $n_width: 273px;
      $n-height: 403px;
      transform: scale(0.85);
      @media (max-width: 1010px) {
        transform: scale(0.65);
      }
      @media (max-width: 825px) {
        transform: scale(1);
        width: $n_width;
        height: $n_height;
        margin-bottom: 20px;
      }

      @media (max-width: 640px) {
        width: $n_width * 0.8;
        height: $n_height * 0.8;
      }
      @media (max-width: 400px) {
        width: $n_width * 0.7;
        height: $n_height * 0.7;
      }
    }
  }

  .m-text-content {
    margin-left: 35px;
    text-align: left;
    @media (max-width: 769px) {
      margin-left: 0;
    }
  }
}
</style>
