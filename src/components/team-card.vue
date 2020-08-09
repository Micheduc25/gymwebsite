<template>
  <div class="team-card">
    <div class="team-card-image rounded-sm overflow-hidden">
      <img :src="'/images/'+image" alt="team member">
    </div>
    <div class="team-card-desc mt-4">
        <div class="member-name text-xl font-bold mb-1">{{name}}</div>
        <div class="member-qualification ">{{qualification}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "team-card",
  props:{
    image:String,
    name:String,
    qualification:String
  }
}
</script>

<style lang="scss" scoped>
    .team-card{
      padding:20px;
      background-color: white;
      border-radius: 5px;
      width:220px;
      height:auto;
      transition:.3s;
      cursor:pointer;
      &:hover{
        transform:translateY(-10px);
        box-shadow: 0 2px 5px 2px rgba(0,0,0,.4);
      }

      &-image{
        width:100%;
        height:190px;
        img{
          height: 100%;
          width:100%;
        }

      }

      &-desc{
        .member-name{
          text-transform: capitalize;
        }
        .member-qualification{
          text-transform: capitalize;
        }

      }
    }
</style>