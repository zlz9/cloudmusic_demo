<template>
  <div class="album">
    <p>新碟上架</p>
    <span><a href="">更多</a></span>
    <div class="bj"></div>
    <div class="title">
      <li v-for="(album, index) in albumList" :key="album.id">
        <img v-lazy="album.blurPicUrl" :data-id="album.id" @click="goAlbum" />
      </li>
    </div>
  </div>
</template>

<script>
//引入映射函数
import { mapState } from "vuex";
export default {
  name: "MusicAlbum",
  mounted() {
    this.$store.dispatch("getAlbum");
  },
  methods: {
    // 整理参数，跳转路由
    goAlbum(event) {
      let element = event.target;
      let { id } = element.dataset;
      //如果标签的身上拥有id一定是a标签
      if (id) {
        //整理路由跳转的参数
        let location = { name: "albumInfo" };
        let query = { id: id };
        location.query = query;
        this.$router.push(location);
      }
    },
  },
  computed: {
    ...mapState({
      albumList: (state) => state.home.albumList,
    }),
  },
};
</script>

<style lang="less" scoped>
.album {
  cursor: pointer;
  margin: 0 auto;
  position: relative;
  width: 1100px;
  height: 280px;
  // border: 1px red solid;
  p {
    position: relative;
    font-size: 23px;
    font-weight: bolder;
    left: 20px;
  }
  span {
    position: relative;
    left: 95%;
    bottom: 45px;
  }
  .bj {
    position: relative;
    margin: 0 auto;
    width: 95%;
    border: 2px solid red;
    bottom: 40px;
  }
  .title {
    width: 1100px;
    height: 180px;
    li {
      list-style: none;
      width: 20%;
      height: 100%;
      float: left;
      position: relative;
      margin-right: 20px;
      margin-left: 25px;
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
}
</style>
