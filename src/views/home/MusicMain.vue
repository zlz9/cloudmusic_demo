<template>
  <div>
    <swiper-top></swiper-top>
    <recommend-music></recommend-music>
    <recommend-song></recommend-song>
    <music-album></music-album>
  </div>
</template>

<script>
import RecommendMusic from "@/views/home/RecommendMusic.vue";

import MusicAlbum from "@/views/home/MusicAlbum.vue";
import SwiperTop from "@/views/home/SwiperTop.vue";
import RecommendSong from "./RecommendSong.vue";

export default {
  components: { RecommendMusic, MusicAlbum, SwiperTop, RecommendSong },
  name: "MusicMain",
};
</script>

<style></style>
