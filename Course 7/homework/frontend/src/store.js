import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[]
  },
  mutations: {
    register(state, data){
      state.data = data
      console.log(state.data)
    }
  },
  actions: {
    async fetchTheaters({commit}){
      const theaters = await axios.get('http://localhost:3000/theaters')
      console.log(theaters)
      commit('register', theaters.data)
      
    }
  }
})
