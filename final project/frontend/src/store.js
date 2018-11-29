import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theaters:[],
    movies: []
  },
  mutations: {
    registerTheaters(state, data){
      state.theaters = data
    },
    registerMovies(state, data){
      state.movies = data
    }
  },
  actions: {
    async fetchTheaters({commit}){
      const theaters = await axios.get('http://localhost:3000/theaters')
      commit('registerTheaters', theaters.data)
    },
    async fetchMovies({commit}){
      const movies = await axios.get('http://localhost:3000/movies')
      commit('registerMovies', movies.data)
    }
  }
})
