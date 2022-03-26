<template>
  <div class="album_info">
    <img v-lazy="albumInfo.album.picUrl" alt="" />
    <div class="info">
      <h2>{{ albumInfo.album.name }}</h2>
      <div class="artist">歌手：{{ albumInfo.album.artist.name }}</div>
      <div class="time">发行时间：2022-03-23</div>
      <div class="company">发行公司：{{ albumInfo.album.company }}</div>
    </div>
    <div class="describe">
      <span>专辑介绍</span>
      {{ albumInfo.album.description }}
    </div>
    <el-table
      class="table"
      :data="albumInfo.songs"
      stripe
      style="width: 100%"
      @cell-click="goPlayer"
    >
      <el-table-column prop="name" label="歌名" width="180"> </el-table-column>
      <el-table-column prop="dt" label="时长" width="180"> </el-table-column>
      <el-table-column prop="ar[0].name" label="歌手"> </el-table-column>
      <el-table-column prop="al.name" label="专辑"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AlbumInfo",
  created() {
    this.getAlbumInfo();
  },
  methods: {
    getAlbumInfo() {
      let id = this.$route.query.id;
      this.$store.dispatch("getAlbumInfo", id);
    },
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
      albumInfo: (state) => state.album.albumInfo,
    }),
  },
};
</script>

<style lang="less" scoped>
.album_info {
  position: relative;
  margin: 0 auto;
  width: 1100px;
  height: auto;
  img {
    border-radius: 10px;
    position: relative;
    margin-left: 40px;
    margin-top: 40px;
    width: 250px;
    height: 250px;
  }
  .info {
    position: relative;
    left: 400px;
    bottom: 200px;
    width: 400px;
    height: 200px;
  }
  .describe {
    margin-left: 30px;
    width: 600px;
    position: relative;
    bottom: 150px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
  .table {
    position: relative;
    bottom: 130px;
  }
}
</style>
