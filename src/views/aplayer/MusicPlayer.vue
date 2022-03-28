<template>
  <div class="player">
    <div class="header" v-for="(item, index) in getSong" :key="index">
      <div class="bj"></div>
      <img :src="item.al.picUrl" alt="" />
      <div class="musicInfo">
        <div class="music_name"><span>单曲：</span>{{ item.al.name }}</div>
        <div
          class="singerInfo"
          style="position: relative; width: 50px; top: 61px; left: 10px"
        >
          歌手：
        </div>
        <div class="singer" v-for="(singer, index) in item.ar" :key="singer.id">
          {{ singer.name }}
        </div>
      </div>
    </div>
    <div class="Img_gif"></div>
    <aplayer
      :audio="audio"
      :lrcType="1"
      style="width: 60%; height: 100px; margin: 0 auto"
    />
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "MusicPlayer",
  data() {
    return {
      audio: {
        name: "",
        artist: "",
        url: "",
        cover: "",
        lrc: "",
        autoplay: true,
      },
    };
  },
  beforeMount() {},
  created() {
    this.getMusicInfo();
  },
  methods: {
    getMusicInfo() {
      // 获取歌曲详情
      let ids = this.$route.query.id;
      let params = this.$route.query;
      this.$store.dispatch("getMusicDetail", ids);
      // 获取歌曲url和歌词
      this.$store.dispatch("getUrl", params);
      this.$store.dispatch("getLyric", params);
      setTimeout(() => {
        this.audio.cover = this.getSong[0].al.picUrl || [];
        this.audio.url = this.getUrl2.url;
        this.audio.lrc = this.lrc.lyric;
      }, 800);
    },
  },
  computed: {
    ...mapState({
      MusicDetial: (state) => state.player.MusicDetial,
      lyric: (state) => state.player.lyric,
    }),
    ...mapGetters(["getUrl2", "lrc", "getSong"]),
  },
};
</script>

<style lang="less" scoped>
.player {
  .header {
    position: relative;
    margin: 0 auto;
    width: 60%;
    height: 600px;
    .bj {
      position: absolute;
      left: 12px;
      top: 7px;
      width: 250px;
      height: 250px;
      border-radius: 50%;
      background: black;
    }
    img {
      position: relative;
      top: 30px;
      left: 40px;
      border-radius: 100px;
      width: 200px;
      height: 200px;
      // 让图片旋转
      animation: rotate 10s linear infinite;
    }
    .musicInfo {
      position: relative;
      width: 600px;
      height: 300px;
      left: 350px;
      bottom: 150px;
      .singer {
        position: relative;
        width: auto;
        left: 50px;
        top: 40px;
        float: left;
        color: rgb(20, 167, 204);
      }
      .music_name {
        font-size: 25px;
        span {
          font-size: 23px;
          font-weight: bolder;
          color: rgb(170, 7, 7);
          font-style: italic;
        }
      }
    }
  }
}
</style>
