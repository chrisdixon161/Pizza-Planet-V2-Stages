<template>
  <div id="app">
    <app-header />
    <Home />
    <Menu />
  </div>
</template>

<script>
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";

export default {
  name: "app",
  components: {
    appHeader: Header,
    Home,
    Menu
  }
};
</script>

<style>
</style>
