
<template>
  <div class="center examplex">
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
      <vs-navbar-item :active="active == 'guide'" id="guide">
        <router-link to="/" :class="{'text-white':!active2}">Home</router-link>
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'docs'" id="docs">
        <router-link to="/about" :class="{'text-white':!active2}">About</router-link>
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'docs'" id="docs">
        <router-link to="#" :class="{'text-white':!active2}">Components</router-link>
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'docs'" id="docs">
        <router-link to="#" :class="{'text-white':!active2}">Links</router-link>
      </vs-navbar-item>
      <template #right>
        <vs-switch :color="active2?'dark':'warn'" square v-model="active2" />
        <!-- <vs-button flat>Login</vs-button> -->
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
    <!-- <div id="padding-scroll-content" class="square">
      <div class="child">child 1</div>
      <div class="child">child 2</div>
      <div class="child">child 3</div>
    </div>-->
  </div>
</template>
<script>
export default {
  data: () => ({
    active: "guide",
    active2: true,
  }),
};
</script>

        