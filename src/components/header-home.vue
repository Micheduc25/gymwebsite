<template>
  <header class="header-home text-white  w-full py-6 items-center flex justify-around bgcolor-primary">
    <div class="nav-wrapper flex justify-around w-8/12">
      <div class="gym-logo flex items-center w-3/12">
        <img width="70" height="70" src="/images/logo.png" alt="gym logo">
        <h1 class="ml-2 text-3xl">G.Y.M</h1>

      </div>
      <nav class="navigation flex items-center ml-3 w-9/12">
        <div class="nav-item">
          <router-link to="/" exact>Home</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/services" exact>Our Services</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/about" exact>About Us</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/contact" exact>Contact Us</router-link>
        </div>
      </nav>
    </div>

    <div class="auth-links color-text-primary bg-white p-3 rounded-sm">
      <router-link to="/auth/login" exact>Login</router-link> /
      <router-link to="/auth/signup" exact>SignUp</router-link>
    </div>
  </header>
</template>

<script>
import {mapActions} from "vuex";

export default {
name: "header-home",
  methods:{
    ...mapActions("header",["setHeaderHeight"])

  },

  mounted() {

    const header_height = this.$el.clientHeight;
    // console.log("header height is ", header_height);
    this.setHeaderHeight(header_height);
  }
}
</script>

<style lang="scss" scoped>
  .header-home{
    position:fixed;
    z-index: 10;
    box-shadow: 0 2px 2px 1px rgba(0,0,0,.6);
    .auth-links{
      width:max-content;

      a{
        transition:.3s;
        border-bottom: 1px solid transparent;
        &:hover{
          border-bottom: 1px solid rgb(1, 1, 34);
        }
      }
    }
    .navigation{
      .nav-item{
        &:not(:first-child){
          margin-left:30px;

        }

        a{
          border-bottom: 1px solid transparent;
          padding-bottom: 20px;
          transition:.5s;
        }

       .router-link-exact-active.router-link-active{
          border-color: white;
       }
      }
    }
  }
</style>