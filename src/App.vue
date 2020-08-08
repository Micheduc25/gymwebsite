<template>
  <div id="app" class="flex flex-col">
    <header-home></header-home>
<!--    <div id="nav"></div>-->
<!--    <app-header></app-header>-->

    <div class="router_view_holder">
      <router-view />
    </div>
    <app-footer></app-footer>
  </div>
</template>
<script>
// import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderHome from "./components/header-home";
export default {
  components: {
    // "app-header": Header,
    "header-home":HeaderHome,
    "app-footer": Footer,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .router_view_holder {
    min-height: 50vh;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
