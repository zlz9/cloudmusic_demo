<template>
  <div class="music_list">
    <div class="head">
      <img :src="playListDetail.playlist.coverImgUrl || []" alt="" />
      <div class="music_info">
        <div class="name">歌单：{{ playListDetail.playlist.name }}</div>
        <div class="tag">tags:</div>
        <div
          class="tags"
          v-for="(tag, index) in playListDetail.playlist.tags"
          :key="index"
        >
          {{ tag }}
        </div>
        <div class="description">
          介绍：{{ playListDetail.playlist.description }}
        </div>
      </div>
    </div>
    <div class="content">
      <el-table
        :data="playListDetail.playlist.tracks"
        stripe
        style="width: 100%"
        @cell-click="goPlayer"
      >
        <el-table-column prop="" type="index" label="序号" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="ar[0].name" label="地址"> </el-table-column>
        <el-table-column prop="dt" label="时长"> </el-table-column>
      </el-table>
    </div>
    <music-comment />
  </div>
</template>

<script>
import MusicComment from "@/components/comment/MusicComment.vue";
import { mapState } from "vuex";
export default {
  components: { MusicComment },
  name: "MusicList",
  beforeMount() {
    let params = this.$route.query;
    this.$store.dispatch("getPlayListDetail", params);
  },
  mounted() {},
  methods: {
    // 整理参数跳转路由
    goPlayer(event) {
      let id = event.id;
      // let { id } = element.dataset;
      // 如果id存在跳转到aplayer播放器
      if (id) {
        let location = { name: "player" };
        let query = { id: id };
        location.query = query;
        this.$router.push(location);
      }
    },
  },
  computed: {
    ...mapState({
      playListDetail: (state) => state.musiclist.playListDetail,
    }),
  },
};
</script>

<style lang="less" scoped>
.music_list {
  cursor: pointer;
  margin: 0 auto;
  width: 800px;
  height: auto;
  .head {
    position: relative;
    width: 100%;
    height: 400px;
    img {
      position: relative;
      border-radius: 5px;
      width: 35%;
      height: 60%;
      top: 80px;
      left: 20px;
    }
    .music_info {
      position: relative;
      width: 50%;
      height: 60%;
      left: 350px;
      bottom: 160px;
      .name {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
      }
      .tag {
        position: relative;
        left: 30px;
        top: 25px;
        width: 50px;
        font-size: 20px;
        color: red;
      }
      .tags {
        position: relative;
        float: right;
        margin: 5px;
        right: 150px;
      }
      .tr td {
        outline: none;
        background: grey;
      }
      .description {
        position: relative;
        right: 30px;
        margin: 0 auto;
        width: 300px;
        color: rgb(143, 14, 14);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
      }
    }
  }
}
</style>
