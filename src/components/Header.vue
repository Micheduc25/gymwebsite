
<template>
  <div id="app-header" class=" app-header center examplex">
    <vs-navbar
      value="gradient"
      :color="active2? 'warn': 'dark'"
      target-scroll="#padding-scroll-content"
      padding-scroll
      center-collapsed
      v-model="active"
    >
      <template #left>
        <img src="/logo2.png" alt="logo" />
      </template>
      <vs-navbar-item :active="active === 'guide'" id="guide">
        <router-link to="/" :class="{'text-white':!active2}">Home</router-link>
      </vs-navbar-item>
      <vs-navbar-item :active="active === 'docs'" id="docs">
        <router-link to="/about" :class="{'text-white':!active2}">About</router-link>
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'docs'" id="docs">
        <router-link to="#" :class="{'text-white':!active2}">Components</router-link>
      </vs-navbar-item>
      <vs-navbar-item :active="active === 'docs'" id="docs">
        <router-link to="#" :class="{'text-white':!active2}">Links</router-link>
      </vs-navbar-item>
      <template #right>
        <vs-switch :color="active2?'dark':'warn'" square v-model="active2" />
        <!-- <vs-button flat>Login</vs-button> -->
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>

  </div>
</template>
<script>
import {mapActions} from "vuex";
export default {
  data: () => ({
    active: "guide",
    active2: true,
  }),

  methods:{
    ...mapActions("header",["setHeaderHeight"])

  },

  mounted() {
  //we get the height of the navigation here and set the store variable for it
   const navheight =  document.querySelector(".vs-navbar-content").clientHeight;
    this.setHeaderHeight(navheight);
  }
};
</script>

        