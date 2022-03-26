<template>
  <div id="App">
    <my-header></my-header>
    <router-view></router-view>
    <!-- <music-main></music-main> -->
    <my-footer></my-footer>
    <!-- <music-player></music-player> -->
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
// import MusicPlayer from "./views/aplayer/MusicPlayer.vue";

export default {
  components: { MyHeader, MyFooter },
  name: "App",
};
</script>

<style>
#App {
  background: rgb(136, 120, 120);
}
#nprogress .bar {
  background: rgb(17, 13, 207) !important;
  height: 20px;
}
</style>
