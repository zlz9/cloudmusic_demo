<template>
  <div class="content">
    <div class="content">
      <el-table
        :data="searchInfo.result.songs"
        stripe
        style="width: 100%"
        @cell-click="goPlayer"
      >
        <el-table-column prop="name" label="歌名" width="180">
        </el-table-column>
        <el-table-column prop="duration" label="时长" width="180">
        </el-table-column>
        <el-table-column prop="artists[0].name" label="歌手" width="180">
        </el-table-column>
        <el-table-column prop="album.name" label="《专辑》" width="180">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SearchContent",
  data() {
    return {
      params: {
        type: 1,
        keywords: "",
      },
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.params.keywords = this.$route.query.keyWord;
      let { params } = this;
      this.$store.dispatch("getSearch", params);
    },
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
  },
  computed: {
    ...mapState({
      searchInfo: (state) => state.search.searchInfo,
    }),
  },
  watch: {
    $route(to, from) {
      this.getInfo();
    },
  },
};
</script>

<style></style>
