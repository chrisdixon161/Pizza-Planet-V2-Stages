const state = {
  orders: []
}

const mutations = {
  addOrder: (state, orders) => state.orders.push(orders)
}

const getters = {
  numberOfOrders: state => state.orders.length

}

const actions = {

}

export default {
  state,
  mutations,
  getters,
  actions
}