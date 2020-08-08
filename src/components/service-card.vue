<template>
    <div class="service-card ">
      <div class="service-card__wrapper">
        <div class="card-main">

          <div class="card-icon">
            <component :is="cardIcon "></component>
          </div>

              <h1 class="title text-2xl font-bold">
                {{title}}
              </h1>




        </div>
        <div class="aux">
          <div class="aux-item mb-4" v-for="(item,index) in items" :key="index">
            {{item}}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Computer from "./icons/computer";
import Circuit from "./icons/circuit";
import Mechanical from "./icons/mechanical";
import Urban from "./icons/urban";
export default {
name: "service card",
  props:{
  title:String,
    icon:String,
    items:Array
  },

  data(){
  return {
    svg:''
  }

  },
  computed:{

  cardIcon(){
    return this.icon==='com'?Computer:this.icon==='ee'?Circuit:this.icon==='mec'?Mechanical:Urban;
  }
  },
  components:{
Computer,
    Circuit,
    Mechanical,
    Urban
  },

  created() {

  },

  mounted() {

  }
}
</script>

<style lang="scss" scoped>
  .service-card{
    border-radius: 6px;
    padding: 35px 40px;
    transition:.4s;
    color: rgb(1, 1, 34);
    cursor:pointer;
    &:not(:last-child){
      margin-right: 20px;
    }
    svg{
      margin-top: 10px;
      margin-bottom: 20px;
      color:#ef3139;
      fill: #ef3139;
    }

    &:hover{
      background-color: rgb(1, 1, 34);
      color:#fff;
      svg{
        color:white;
        fill: white;
      }

      .service-card__wrapper{
        .aux{
          opacity: 1;

        }
      }

    }
    .service-card__wrapper{
      display: flex;
      flex-direction:column;
      .card-main{
          margin-bottom: 20px;
          .card-icon{
            width: max-content;
            margin:0 auto;
          }
      }

      .aux{
        transition: .4s;
        opacity: 0;
        .aux-item{
            color:white;
        }
      }
    }
  }
</style>