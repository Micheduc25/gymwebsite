<template>
  <div class="service-card2 bg-white shadow-xl p-3 rounded">
      <div class="card-upper mb-4 flex">
        <img class="" width="70" height="70" :src="`/images/icons/${icon}`" alt="icon">
        <h1 class="text-3xl text-left ml-4 font-bold text-black">{{title}}</h1>
      </div>
    <div class="text-left card-text">
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
name: "service-card2",
  props:{
  icon:String,
    text:String,
    title:String
  }
}
</script>

<style scoped>
  .service-card2{
    height: 270px;
    width: 320px;
  }
</style>