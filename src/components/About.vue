<template>
  <div>
    <h3>~ Click on the link below for more info ~</h3>
    <nav>
      <ul>
        <router-link :to="{name: 'historyLink'}" tag="li">
          <a class="nav-link">our history</a>
        </router-link>
        <span>~</span>
        <router-link :to="{name: 'orderingGuideLink'}" tag="li">
          <a class="nav-link">ordering guide</a>
        </router-link>
        <span>~</span>
        <router-link :to="{ name: 'deliveryLink'}" tag="li">
          <a class="nav-link">delivery</a>
        </router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "about"
};
</script>

<style scoped>
h3 {
  text-align: center;
}
</style>