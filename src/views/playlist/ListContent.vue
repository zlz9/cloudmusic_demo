<template>
  <!-- 歌单分类--主体内容 -->
  <div class="content">
    <!-- 歌单信息 -->
    <div class="top_list">
      <div class="list" v-for="(item, index) in playlists" :key="item.id">
        <img
          v-lazy="item.coverImgUrl"
          alt=""
          :data-id="item.id"
          @click="goMusicList"
        />
        <p class="name">{{ item.name }}</p>
      </div>
    </div>
    <!-- 分页器 -->
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        :page-size="5"
        :pager-count="5"
        layout="prev, pager, next"
        :total="params.limit"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "ListContent",
  props: ["cat"],
  data() {
    return {
      params: {
        cat: "",
        limit: 25,
        offset: 10,
      },
    };
  },
  created() {
    // 整理参数。跳转路由
    this.reqInfo();
  },
  methods: {
    reqInfo(pager = 1) {
      const { params } = this;
      this.$store.dispatch("getTopList", params);
    },
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
    handleCurrentChange(pager) {
      // 修改参数
      this.params.offset = pager * 25;
      this.reqInfo();
    },
  },
  computed: {
    ...mapState({
      toplist: (state) => state.toplist.toplist,
    }),
    ...mapGetters(["playlists"]),
  },
};
</script>
<style lang="less" scoped>
.content {
  position: relative;
  width: 1100px;
  margin: 0 auto;
  height: 1100px;
  .top_list {
    position: relative;
    width: 100%;
    height: 1100px;
    .list {
      display: inline-block;
      margin: 10px 20px 10px 20px;
      position: relative;
      width: 160px;
      height: 150px;
      left: 30px;
      img {
        border-radius: 8px;
        height: 100%;
        width: 100%;
        &:hover {
          width: 105%;
          height: 105%;
        }
      }
      .name {
        // 一行显示不完隐藏
        color: rgb(255, 253, 253);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .pagination {
    position: relative;
    text-align: center;
    // top: 1050px;
  }
}
</style>
