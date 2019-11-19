<template>
  <div class="login_wrapper">
    <form>
      <div>
        <label for="email">Email address</label>
        <input type="email" v-model="email" id="email" placeholder="Enter email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" placeholder="Password" />
      </div>
      <button type="button" class="btn_green" @click.prevent="signIn">Sign in</button>
    </form>
  </div>
</template>
<script>
import { firebaseAuth } from "../firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async signIn() {}
  }
};
</script>