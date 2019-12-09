import { firebaseAuth } from '../../firebase'

const state = {
  currentUser: null
}

const mutations = {
  userStatus: (state, user) => {
    user === null
      ? state.currentUser = null
      : state.currentUser = user.email
  }
}

const getters = {
  currentUser: state => state.currentUser
}

const actions = {
  signIn: async ({ commit }, user) => {
    try {
      const userData = await firebaseAuth.signInWithEmailAndPassword(
        user.email,
        user.password
      );
      commit('userStatus', userData.user)
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        alert("Wrong password");
      } else {
        alert(errorMessage);
      }
    }
  },
  signOut: async ({ commit }) => {
    try {
      await firebaseAuth.signOut();
    } catch (error) {
      alert(`error signing out, ${error}`);
    }
    commit('userStatus', null)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}