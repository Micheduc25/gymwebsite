<template>
  <div class="stat-item ">
    <div class="stat-icon mr-2"><img :src="'/images/icons/'+svg" alt="image"> </div>
    <div class="stats-info text-left">
      <div class="stat-number text-3xl mb-1 font-bold">{{currentCount}}</div>
      <div class="title text-xs">{{desc}}</div>
    </div>
  </div>
</template>

<script>
export default {
name: "stat-item",
  props:{
  svg:String,
    count:Number,
    desc:String

  }
  ,
  data(){
  return {
    currentCount:0,
    timerRef:null,
    inViewPort:false,
    animationActivated:false
  };
  },
  methods:{
    isInViewport  (elem) {
      const bounding = elem.getBoundingClientRect();
      return (
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  }
,
  mounted(){



   window.addEventListener('scroll',()=>{

     if(!this.animationActivated){
     this.inViewPort = this.isInViewport(this.$el);

      if(this.inViewPort){
        this.animationActivated=true;
        this.timerRef =  setInterval(()=>{
              if(this.currentCount===this.count) clearInterval(this.timerRef);
              else
                this.currentCount+=1;

            },
            100
        );
      }
     }
     else{
       window.removeEventListener('scroll',()=>{console.log("event listener removed")});
     }

   });
  }
}
</script>

<style lang="scss" scoped>
  .stat-item{
    padding:10px 20px;
    display:flex;
    width:max-content;
  .stat-icon{
      img{
        width:80px;
        height:80px;
      }
    };
  }
</style>