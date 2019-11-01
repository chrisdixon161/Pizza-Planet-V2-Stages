<template>
  <div id="app">
    <app-header />
    <Home />
    <Admin />
  </div>
</template>

<script>
import Header from "./components/Header";
import Home from "./components/Home";
// import Menu from "./components/Menu";
import Admin from "./components/Admin";

export default {
  name: "app",
  components: {
    appHeader: Header,
    Home,
    // Menu,
    Admin
  }
};
</script>

<style>
</style>
