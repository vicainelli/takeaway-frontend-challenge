import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 15 * 60 * 1000
})

const api = axios.create({
  adapter: cache.adapter
})

const _activeOrder = {
  FVVAWO: {
    orderTime: '2019-07-15 16:44:06',
    restaurantName: 'Big Burger Joint',
    orderTotal: '16.95',
    deliveryAddress: 'Streetname 1',
    status: 'In transit'
  }
}

const state = {
  orders: {},
  order: {},
  activeOrder: null
}

const getters = {
  allOrders: state => state.orders,
  getOrder: state => state.order,
  getActiveOrder: state => state.activeOrder
}

const actions = {
  async fetchOrders({ commit }) {
    commit('CHANGE_ORDERS_LOADED_STATE', false)
    const response = await api({
      url: 'https://api.myjson.com/bins/19f9bd',
      method: 'get'
    })
    commit('SET_ORDERS', response.data.last5Orders)
    commit('CHANGE_ORDERS_LOADED_STATE', true)
  },
  async fetchOrder({ commit }) {
    commit('CHANGE_ORDER_LOADED_STATE', false)
    const response = await api({
      url: 'https://api.myjson.com/bins/o1sp5',
      method: 'get'
    })
    commit('SET_ORDER', response.data)
    commit('CHANGE_ORDER_LOADED_STATE', true)
  },
  async setActiveOrder({ commit }) {
    commit('SET_ACTIVE_ORDER', _activeOrder)
  }
}
const mutations = {
  SET_ORDERS(state, orders) {
    state.orders = orders
  },
  SET_ORDER(state, order) {
    state.order = order
  },
  SET_ACTIVE_ORDER(state, activeOrder) {
    state.activeOrder = activeOrder
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
