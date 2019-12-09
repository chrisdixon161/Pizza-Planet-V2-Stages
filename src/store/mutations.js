export const addOrder = (state, orders) => state.orders.push(orders)
export const userStatus = (state, user) => {
  user === null
    ? state.currentUser = null
    : state.currentUser = user.email
}