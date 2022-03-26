<template>
  <div class="album_home">
    <div class="album_new">
      <h2>热门新碟</h2>
      <div class="line"></div>
      <div album_lists>
        <ul>
          <li
            v-for="(item, index) in topAlbum.weekData.slice(0, 10)"
            :key="index"
          >
            <img
              v-lazy="item.picUrl"
              alt=""
              @click="goAlbumInfo"
              :data-id="item.id"
            />
            <div class="title">{{ item.name }}</div>
            <div class="artist">{{ item.artist.name }}</div>
          </li>
        </ul>
      </div>
    </div>
    <all-album></all-album>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AllAlbum from "./AllAlbum.vue";
export default {
  components: { AllAlbum },
  name: "AblumHome",
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.$store.dispatch("getTopAlbum");
    },
    goAlbumInfo(event) {
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
      topAlbum: (state) => state.album.topAlbum,
    }),
  },
};
</script>

<style lang="less" scoped>
.album_home {
  cursor: pointer;
  margin: 0 auto;
  width: 1200px;
  height: 1800px;
  .album_new {
    position: relative;
    width: 100%;
    height: 100%;
    h2 {
      position: relative;
      left: 20px;
    }
    .line {
      margin: 0 auto;
      position: relative;
      width: 95%;
      border: 2px solid red;
    }
  }
  ul li {
    list-style: none;
    height: 200px;
    width: 200px;

    display: block;
    float: left;
    margin: 10px;
    .artist {
      text-align: center;
      position: relative;
      font-size: 12px;
      color: rgb(182, 169, 169);
    }
    .title {
      position: relative;
      text-align: center;
    }
    img {
      border-radius: 10px;
      width: 100%;
      height: 80%;
      &:hover {
        width: 105%;
        height: 85%;
      }
    }
  }
}
</style>
