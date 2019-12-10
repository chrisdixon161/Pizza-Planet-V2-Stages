import { firestoreAction } from 'vuexfire'
import { dbMenuRef } from '../../firebase'

const state = {
  menuItems: []
}

const getters = {
  getMenuItems: state => state.menuItems
}

const mutations = {

}

const actions = {
  setMenuRef: firestoreAction(context => {
    return context.bindFirestoreRef('menuItems', dbMenuRef)
  })
}

export default {
  state,
  mutations,
  getters,
  actions
}