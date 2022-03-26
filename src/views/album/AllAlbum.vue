<template>
  <div class="all_album">
    <h2>全部新碟</h2>
    <div class="line"></div>
    <div class="all_album_lists">
      <ul>
        <li v-for="(list, index) in albumNew.albums.slice(0, 25)" :key="index">
          <img
            :src="list.picUrl"
            alt=""
            @click="goAlbumInfo"
            :data-id="list.id"
          />
          <div class="title">{{ list.name }}</div>
          <div class="name">{{ list.artist.name }}</div>
        </li>
      </ul>
    </div>
    <el-pagination
      @current-change="handleCurrentChange"
      class="pagination"
      :page-size="25"
      :pager-count="11"
      layout="prev, pager, next"
      :total="156"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AllAlbum",
  data() {
    return {
      params: {
        limit: 25,
        offset: 0,
        area: "",
      },
    };
  },
  created() {},
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      const { params } = this;
      this.$store.dispatch("getAlbumNew", params);
    },
    handleCurrentChange(pager) {
      //  修改参数
      this.params.offset = pager * 25;
      this.getInfo();
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
      albumNew: (state) => state.album.albumNew,
    }),
  },
};
</script>

<style lang="less" scoped>
.all_album {
  position: relative;
  width: 1200px;
  height: 1200px;
  border: 1px solid red;
  bottom: 1250px;
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
  .all_album_lists ul li {
    list-style: none;
    position: relative;
    display: block;
    float: left;
    margin: 10px;
    width: 180px;
    height: 180px;
    img {
      width: 100%;
      height: 80%;
      border-radius: 10px;
      &:hover {
        width: 105%;
        height: 85%;
      }
    }
    .title {
      position: relative;
      text-align: center;
      font-size: 12px;
    }
    .name {
      position: relative;
      text-align: center;
      color: rgb(189, 183, 183);
      font-size: 15px;
    }
  }
  .pagination {
    position: relative;
    top: 1050px;
    right: 650px;
  }
}
</style>
