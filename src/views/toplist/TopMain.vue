<template>
  <div class="top_main">
    <div class="header">
      <div class="header_picture">
        <img :src="playlist.coverImgUrl" alt="" />
        <div class="detail">
          <div class="title">{{ playlist.name }}</div>
          <div class="time">最近更新：03月09日（刚刚更新）</div>
          <div class="header_info"></div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content_header">
        <h3>歌曲列表</h3>
        <span class="music_list1">100首歌</span>
        <span class="music_num">播放：xxxxxxx次</span>
        <hr class="line" />
      </div>
    </div>
    <el-table
      :data="playlist.tracks"
      stripe
      style="width: 100%"
      @cell-click="goPlayer"
    >
      <el-table-column prop="" type="index" label="序号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="歌名" width="180"> </el-table-column>
      <el-table-column prop="ar[0].name" label="歌手"> </el-table-column>
      <el-table-column prop="al.name" label="专辑"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
//引入mapState
import { mapState, mapGetters } from "vuex";
export default {
  name: "TopMain",
  data() {
    return {};
  },
  methods: {
    goPlayer(event) {
      // let element = event.target;
      // let { id } = element.dataset;
      // 如果id存在跳转到aplayer播放器
      let id = event.id;
      if (id) {
        let location = { name: "player" };
        let query = { id: id };
        location.query = query;
        this.$router.push(location);
      }
    },
    // 发请求
    req() {
      let params = this.$route.query;
      this.$store.dispatch("getTopDetail", params);
    },
  },
  created() {
    //发请求获取榜单详细信息
    this.req();
  },
  mounted() {},
  computed: {
    ...mapState({
      topDetail: (state) => state.toplist.topDetail,
    }),
    ...mapGetters(["playlist"]),
  },

  watch: {
    $route(to, from) {
      this.req();
    },
  },
};
</script>

<style lang="less" scoped>
.top_main {
  position: relative;
  bottom: 1850px;
  width: 70%;
  left: 270px;
  height: auto;
  .header {
    position: relative;
    width: 100%;
    height: 250px;
    .header_picture img {
      position: relative;
      width: 150px;
      height: 150px;
      margin: 10px 10px 10px 10px;
      border-radius: 5px;
    }
    .detail {
      position: relative;
      width: 60%;
      left: 30%;
      bottom: 130px;
      .title {
        font-size: 25px;
        font-weight: bolder;
      }
      .header_info span {
        position: relative;
        margin: 15px 15px 15px 15px;
        right: 30px;
      }
      .time {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
  .content {
    position: relative;
    width: 100%;
    height: 60%;
    .content_header h3 {
      position: relative;
      left: 20px;
    }
    .content_header .music_list1 {
      position: relative;
      bottom: 38px;
      left: 120px;
    }
    .content_header .music_num {
      position: relative;
      bottom: 38px;
      left: 65%;
    }
    .content_header .line {
      position: relative;
      border: 1px solid red;
      width: 100%;
      height: 0.1px;
    }
    .listContent {
      font-size: 10px;
    }
  }
}
</style>
