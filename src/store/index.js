import Vue from 'vue'
import Vuex from 'vuex'
import {header} from "@/store/header";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    header:{
      namespaced:true,
      ...header
    }
  }
})
