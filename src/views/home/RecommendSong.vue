<template>
  <div class="recommend_song">
    <h2 class="title">每日推荐</h2>
    <div class="line"></div>
    <div class="music_info">
      <ul>
        <li v-for="(item, index) in recommend.recommend" :key="index">
          <img
            v-lazy="item.picUrl"
            alt=""
            :data-id="item.id"
            @click="goMusicList"
          />
          <div class="describ">{{ item.name }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "RecocmmendSong",
  created() {
    this.getInfo();
  },
  methods: {
    // 整理参数，跳转路由
    goMusicList(event) {
      let element = event.target;
      let { id } = element.dataset;
      //如果标签的身上拥有id一定是a标签
      if (id) {
        //整理路由跳转的参数
        let location = { name: "muscilist" };
        let query = { id: id };
        location.query = query;
        this.$router.push(location);
      }
    },
    getInfo() {
      this.$store.dispatch("getRecommend");
      this.$store.dispatch("getRecommendSongs");
    },
  },
  computed: {
    ...mapState({
      recommend: (state) => state.home.recommend,
      recommendSongs: (state) => state.home.recommendSongs,
    }),
  },
};
</script>

<style lang="less" scoped>
.recommend_song {
  cursor: pointer;
  margin: 0 auto;
  width: 1300px;
  height: 300px;
  .title {
    position: relative;
    left: 10px;
  }
  .line {
    position: relative;
    margin: 0 auto;
    width: 95%;
    height: 2px;
    background: red;
    border: 2px solid red;
  }
  .music_info ul li {
    margin-left: 15px;
    display: block;
    float: left;
    list-style: none;
    position: relative;
    width: 150px;
    height: 120px;
    img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
      &:hover {
        width: 105%;
        height: 105%;
      }
    }
  }
}
</style>
