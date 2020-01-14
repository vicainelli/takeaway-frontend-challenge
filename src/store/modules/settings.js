const state = {
  languague: 'en',
  currency: 'euro',
  profileIsLoaded: false,
  ordersIsLoaded: false,
  orderIsLoaded: false
}
const getters = {
  didProfileLoad(state) {
    return state.profileIsLoaded
  },
  didOrdersLoad(state) {
    return state.ordersIsLoaded
  },
  didOrderLoad(state) {
    return state.orderIsLoaded
  }
}
const actions = {}
const mutations = {
  CHANGE_PROFILE_LOADED_STATE(state, status) {
    state.profileIsLoaded = status
  },
  CHANGE_ORDERS_LOADED_STATE(state, status) {
    state.ordersIsLoaded = status
  },
  CHANGE_ORDER_LOADED_STATE(state, status) {
    state.orderIsLoaded = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
