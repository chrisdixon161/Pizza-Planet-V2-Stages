<template>
  <div class="login_wrapper">
    <form>
      <div>
        <label for="email">Email address</label>
        <input type="email" id="email" placeholder="Enter email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Password" />
      </div>
      <button type="button" class="btn_green" @click.prevent="signIn">Sign in</button>
    </form>
  </div>
</template>
<script>
import { firebaseAuth } from "../firebase";

export default {
  name: "login",
  methods: {
    signIn() {}
  }
};
</script>