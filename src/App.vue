<template>
  <div id="app">
    <app-header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    appHeader: Header
  }
};
</script>

<style>
body {
  font-family: "Crimson Text", "sefif";
  margin: 0;
  font-size: 1.5em;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 10px 0;
  background: #f1e6da;
}

li {
  list-style: none;
}

span {
  margin: 0 5px;
}
</style>
