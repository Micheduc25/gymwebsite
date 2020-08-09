<template>
  <div class="about-card">
    <div class="about-img"><img :src="'/images/'+image" alt="an image"></div>
    <div class="about-desc">
      <div class="desc-wrapper">
        <h1 class="text-2xl">{{title}}</h1>
        <h2 class="tex-xl">{{subTitle}}</h2>

        <p>{{description}}</p>

        <div class="desc-but">
          <button class="go-button cursor-pointer  text-2xl "><span>&#10137;</span></button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "about-card",
  props:{
  image:String,
    title:String,
    subTitle:String,
    description:String
  }
}
</script>

<style lang="scss" scoped>
    .about-card{
      width:320px;
      height: 320px;
      border-radius: 10px;
      transition:.3s;
      overflow: hidden;

      position:relative;
      cursor: pointer;

      &:hover{
        transform:translateY(-10px);
        box-shadow: 0 2px 5px 2px rgba(0,0,0,.4);
        .about-desc{
          top: 50%
        ;
          opacity: 1;
        }
      }

      .about-img{
        width:100%;
        height:100%;
        border-radius: 10px;
        overflow: hidden;
        img{
          width:100%;
          height:100%;
        }
      }

      .about-desc{
        position:absolute;
        opacity: 0;
        transition:.3s;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        top:80%;
        left:50%;
        transform:translate(-50%,-50%);
        //margin:30px;
        width:290px;
        height:290px;
        background:white;
        border-radius: 10px;

        .desc-wrapper
        {
          width:100%;
          height: 100%;
          padding:18px 30px;
          text-align: left;
          .desc-but{
            .go-button{

              padding:15px;
              outline:none;
              border-radius: 50%;

              background:#ef3139;
              color:white;
              font-weight: bold;
              &:hover{
                color:rgb(1, 1, 34)
              }
              span{
                transition: .3s;
              }

              &:focus{
                outline:none;
              }

            }
          }
        }

      }
    }
</style>