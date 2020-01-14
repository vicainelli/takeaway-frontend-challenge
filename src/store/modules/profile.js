import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 15 * 60 * 1000
})

const api = axios.create({
  adapter: cache.adapter
})

const state = {
  profile: {}
}
const getters = {
  getProfile: state => state.profile
}
const actions = {
  async fetchProfile({ commit }) {
    commit('CHANGE_PROFILE_LOADED_STATE', false)
    const response = await api({
      url: 'https://api.myjson.com/bins/pdefl',
      method: 'get'
    })
    commit('SET_PROFILE', response.data)
    commit('CHANGE_PROFILE_LOADED_STATE', true)
  }
}
const mutations = {
  SET_PROFILE(state, profile) {
    state.profile = profile
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
