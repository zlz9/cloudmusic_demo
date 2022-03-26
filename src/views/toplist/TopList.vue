<template>
  <div class="toplist">
    <div class="title">
      <div class="header">
        <h3>云音乐特色</h3>
        <ul>
          <li
            @click="goTopMain"
            :data-id="item.id"
            class="header_content"
            v-for="(item, index) in (List.list || []).slice(0, 4)"
            :key="item.id"
          >
            <img v-lazy="item.coverImgUrl" /><span
              ><div class="topDetail">{{ item.name }}</div>
              <div class="top_time">{{ item.updateFrequency }}</div></span
            >
          </li>
        </ul>
      </div>
      <div class="header_2">
        <h3>全球媒体榜</h3>
        <ul>
          <li
            @click="goTopMain"
            :data-id="item.id"
            class="header_content"
            v-for="(item, index) in (List.list || []).slice(5, 34)"
            :key="item.id"
          >
            <img v-lazy="item.coverImgUrl" /><span
              ><div class="topDetail">{{ item.name }}</div>
              <div class="top_time">{{ item.updateFrequency }}</div></span
            >
          </li>
        </ul>
      </div>
    </div>
    <top-main></top-main>
  </div>
</template>

<script>
//引入mapState
import { mapState } from "vuex";
import TopMain from "./TopMain.vue";
export default {
  components: { TopMain },
  name: "TopList",
  methods: {
    //点击跳转路由
    goTopMain(event) {
      let element = event.target;
      let { id } = element.dataset;
      //如果标签的身上拥有id一定是a标签
      if (id) {
        //整理路由跳转的参数
        let location = { name: "topmain" };
        let query = { id: id };
        location.query = query;
        this.$router.push(location);
      }
    },
  },
  created() {
    this.$store.dispatch("getTop");
  },
  mounted() {},
  computed: {
    ...mapState({
      List: (state) => state.toplist.List,
    }),
  },
  // watch: {
  //   $route(to, from) {
  //     if (to !== from) {
  //       location.reload();
  //     }
  //   },
  // },
};
</script>

<style lang="less">
.toplist {
  .header_content:hover {
    background: rgb(184, 174, 174);
  }
  cursor: pointer;
  list-style: none;
  position: relative;
  width: 900px;
  margin: 0 auto;
  height: auto;
  .title {
    position: relative;
    width: 30%;
    height: 100%;
    left: 0;
    .header h3 {
      position: relative;
      left: 10px;
    }
    .header_content {
      list-style: none;
      position: relative;
      width: 100%;
      height: 50px;
      right: 40px;
      margin-top: 3px;
      margin-bottom: 3px;
      img {
        position: relative;
        width: 20%;
        height: 100%;
        left: 5%;
      }
      .topDetail {
        position: relative;
        left: 40%;
        bottom: 50px;
        font-weight: bold;
        font-size: 12px;
      }
      .top_time {
        position: relative;
        left: 40%;
        bottom: 50px;
        color: rgb(194, 191, 191);
        font-size: 12px;
      }
    }
    .header_2 {
      position: relative;
      left: 10px;
      .header_content {
        position: relative;
        right: 48px;
      }
    }
  }
}
</style>
