<template>
  <div class="program">
    <img v-lazy="djDetail.data.picUrl" alt="" />
    <div class="header">
      <div class="title">
        <span>电台</span>
        <h3>{{ djDetail.data.name }}</h3>
      </div>
      <div class="author">
        <img v-lazy="djDetail.data.dj.avatarUrl" alt="" />
        <span>{{ djDetail.data.dj.nickname }}</span>
      </div>
      <div class="describe">
        <div class="describe_detail">
          <span>{{ djDetail.data.category }}</span
          >{{ djDetail.data.desc }}
        </div>
      </div>
    </div>
    <el-table
      :data="programs"
      stripe
      style="width: 100%; align: center; bottom: 350px"
      @cell-click="goPlayer"
    >
      <el-table-column prop="" type="index" label="序号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="歌名" width="180"> </el-table-column>
      <el-table-column prop="mainSong.album.name" label="专辑">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "DjProgram",
  created() {
    this.getDjInfo();
    this.getProgramInfo();
  },
  methods: {
    getProgramInfo() {
      let rid = this.$route.query.id;
      this.$store.dispatch("getProgramDetail", rid);
    },
    getDjInfo() {
      let rid = this.$route.query.id;
      this.$store.dispatch("getDjDetail", rid);
    },
    goPlayer(event) {
      let id = event.mainSong.id;
      // let element = event.target;
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
      djDetail: (state) => state.djradio.djDetail,
      programDetail: (state) => state.djradio.programDetail,
    }),
    ...mapGetters(["programs"]),
  },
};
</script>

<style lang="less">
.program {
  cursor: pointer;
  position: relative;
  margin: 0 auto;
  width: 900px;
  height: auto;
  img {
    border-radius: 10px;
    position: relative;
    margin-top: 20px;
    margin-left: 20px;
    width: 250px;
    height: 250px;
  }
  .header {
    position: relative;
    width: 500px;
    height: 400px;
    bottom: 250px;
    left: 300px;
    .title {
      span {
        position: relative;
        width: 80px;
        margin: 10px;
        top: 40px;
        left: 20px;
        font-size: 20px;
        color: red;
        font-weight: bold;
      }
      h3 {
        position: relative;
        left: 80px;
        bottom: 5px;
      }
    }
    .author {
      img {
        position: relative;
        width: 30px;
        height: 30px;
      }
      span {
        font-size: 18px;
        position: relative;
        width: auto;
        left: 20px;
        bottom: 10px;
      }
    }
    .describe {
      position: relative;
      width: 100%;
      height: auto;
      .describe_detail {
        font-style: italic;
        position: relative;
        width: 480px;
        height: 230px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        span {
          top: 2px;
          width: auto;
          padding: 0px 5px;
          font-style: italic;
          position: relative;
          margin: 10px;
          font-size: 20px;
          color: rgb(192, 184, 184);
          border: 1px solid rgb(209, 198, 198);
        }
      }
    }
  }
}
</style>
