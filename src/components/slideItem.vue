<template>
  <div :style="`background-image:url(/images/${image});`+( height?`height:${height}px`:'')"
       class="slide-item ">

    <div :style="hasBgColor?`background-color:rgba(0,0,0,.3)`:''" class="slide-content flex items-center justify-center w-full h-full">
      <div class="container-wrapper ">
        <h1 class="heading text-5xl text-white text-center mb-5">
          {{heading}}
        </h1>
        <h2 class="subheading text-white mb-4 text-xl">
          {{subHeading}}
        </h2>

        <div class="button-container">
          <button
              @click="onAction"
              class="mx-auto action-button rounded p-4 bg-blue-700 text-white font-bold text-2xl">
            {{actionText}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "slideItem",
  props:{
    image:String,
    heading:String,
    subHeading:String,
    actionText:String,
    height:String,
    hasBgColor:{
      default:false,
      type:Boolean
    }


  },

  methods:{
    onAction(){
      this.$emit('onAction');
    }
  }
}
</script>

<style lang="scss" scoped>
    .slide-item{
      width:100%;
      background-size: cover;
      min-height: 300px;

      .action-button{
        transition:.3s;
        &:hover{
          transform:translateY(-5px);
          box-shadow: 0 1px 3px 0 rgba(0,0,0,.4);
        }
        &:active{
          transform:translateY(1px);
          box-shadow: none;
          outline:none;
        }
        &:focus{
          outline:none;
          border:none;
        }
      }
    }
</style>