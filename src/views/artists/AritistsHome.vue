<template>
  <div id="home">
    <!-- 热门歌手部分 -->
    <div class="top_artists">
      <h3>热门歌手</h3>
      <hr class="line" />
      <div class="lists">
        <ul>
          <li
            @click="goAritistInfo"
            v-for="(artist, index) in hotAritists.artists.slice(0, 20)"
            :key="index"
          >
            <img v-lazy="artist.picUrl" alt="" :data-id="artist.id" />
            <div class="name">{{ artist.name }}</div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 歌手分类 -->
    <div class="artists_category">
      <ul>
        <li @click="getAll">全部</li>
        <li @click="Chinese">华语</li>
        <li @click="America">欧美</li>
        <li @click="JApan">日本</li>
        <li @click="Korea">韩国</li>
        <li @click="Other">其他</li>
      </ul>
    </div>
    <div class="artists_category_lists">
      <ul>
        <li
          @click="goAritistInfo"
          v-for="(list, index) in artistList.artists.slice(0, 40)"
          :key="index"
        >
          <img v-lazy="list.picUrl" alt="" :data-id="list.id" />
          <div class="artists_category_name">{{ list.name }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AritistsHome",
  data() {
    return {
      area: -1,
    };
  },
  created() {
    this.getHotArtists();
    this.getArtistList();
  },
  methods: {
    // 获取热门歌手
    getHotArtists() {
      this.$store.dispatch("getHotArtists");
    },
    // 获取歌手分类
    getArtistList() {
      const { area } = this;
      this.$store.dispatch("getArtistList", area);
    },
    // 分类模块
    getAll() {
      this.area = -1;
      this.getArtistList();
    },
    Chinese() {
      this.area = -7;
      this.getArtistList();
    },
    America() {
      this.area = 96;
      this.getArtistList();
    },
    JApan() {
      this.area = 8;
      this.getArtistList();
    },
    Korea() {
      this.area = 16;
      this.getArtistList();
    },
    Other() {
      this.area = 0;
      this.getArtistList();
    },
    // 整理参数发请求
    goAritistInfo(event) {
      let element = event.target;
      let { id } = element.dataset;
      // 如果id存在跳转到aplayer播放器
      if (id) {
        let location = { name: "song" };
        let query = { id: id };
        location.query = query;
        this.$router.push(location);
      }
    },
  },
  computed: {
    ...mapState({
      hotAritists: (state) => state.artists.hotAritists,
      artistList: (state) => state.artists.artistList,
    }),
  },
};
</script>

<style lang="less" scoped>
#home {
  cursor: pointer;
  margin: 0 auto;
  width: 1100px;
  height: 1500px;
  .top_artists {
    margin: 0 auto;
    width: 100%;
    height: 400px;
    h3 {
      position: relative;
      left: 20px;
      color: red;
    }
    .line {
      width: 95%;
      height: 3px;
      background-color: red;
    }
    .lists {
      position: relative;
      margin: 0 auto;
      width: 100%;
      height: 300px;
      background-color: purple;
      ul li {
        top: 20px;
        position: relative;
        list-style: none;
        margin: 10px;
        display: block;
        float: left;
        right: 12px;
        img {
          position: relative;
          border-radius: 50%;
          width: 80px;
          height: 80px;
        }
        .name {
          position: relative;
          font-size: 12px;
          color: white;
          text-align: center;
          &:hover {
            color: rgb(177, 149, 149);
          }
        }
      }
    }
  }
  .artists_category {
    ul li {
      left: 150px;
      font-size: 20px;
      border-radius: 20px;
      line-height: 30px;
      height: 30px;
      width: 100px;
      text-align: center;
      position: relative;
      margin: 0 auto;
      list-style: none;
      display: inline-block;
      &:hover {
        background: rgb(167, 145, 145);
        font-size: 22px;
        color: white;
      }
    }
  }
  .artists_category_lists {
    width: 100%;
    height: 850px;
    border: 1px solid #fff;
    ul li {
      list-style: none;
      display: block;
      float: left;
      margin: 10px;
      img {
        border-radius: 50%;
        width: 100px;
        height: 100px;
      }
      .artists_category_name {
        position: relative;
        font-size: 12px;
        color: #fff;
        text-align: center;
      }
    }
  }
}
</style>
