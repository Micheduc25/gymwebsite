<template>
  <div class="stats-band mt-6 flex justify-around">
    <stat-item v-for="(item, index) in stats_data" :svg="item.icon" :count="item.count" :desc="item.desc" :key="index"></stat-item>
  </div>
</template>

<script>
import statItem from "./stat-item";
export default {
name: "stats-band",

  data(){
  return {
    stats_data:[
      {
        icon:"smile.svg",
        count:50,
        desc:"Happy Clients"
      },
      {
        icon:"award.svg",
        count:10,
        desc:"Skilled Experts"
      },
      {
        icon:"strength.svg",
        count:25,
        desc:"Finished Projects"
      },
      {
        icon:"bullhorn.svg",
        count:150,
        desc:"Media Posts"
      },
    ]
  };
  },
  components:{
  statItem
  }
}
</script>

<style lang="scss" scoped>
  .stats-band{
    padding:35px 0;
    background-color: #ccc;
    margin-bottom: 30px;
  }
</style>