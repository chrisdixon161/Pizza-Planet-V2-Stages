import { firebaseAuth } from '../firebase'

export const signIn = async ({ commit }, user) => {
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
}
export const signOut = async ({ commit }) => {
  try {
    await firebaseAuth.signOut();
  } catch (error) {
    alert(`error signing out, ${error}`);
  }
  commit('userStatus', null)
}