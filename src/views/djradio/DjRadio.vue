<template>
  <div id="DjRadio">
    <div class="header">
      <li
        @click="goContent"
        class="list"
        v-for="(item, index) in cateList.categories"
        :key="item.id"
      >
        <img v-lazy="item.pic56x56Url" alt="" :data-type="item.id" />
        <div class="name">
          <em>{{ item.name }}</em>
        </div>
      </li>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DjRadio",
  created() {
    this.$store.dispatch("getCateLsit");
  },
  computed: {
    ...mapState({
      cateList: (state) => state.djradio.cateList,
    }),
  },
  methods: {
    // 整理参数跳转路由
    goContent(event) {
      let element = event.target;
      let { type } = element.dataset;
      if (type) {
        let location = { name: "DjContent" };
        let query = { type: type };
        location.query = query;
        this.$router.push(location);
      }
    },
  },
};
</script>

<style lang="less" scoped>
#DjRadio {
  cursor: pointer;
  list-style: none;
  position: relative;
  margin: 0 auto;
  width: 1100px;
  height: 2700px;
  .header {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 300px;
    .list {
      border-radius: 10px;
      position: relative;
      display: block;
      float: left;
      top: 10px;
      margin: 10px;
      width: 100px;
      height: 100px;
      .name {
        width: 100%;
        position: relative;
        left: 20px;
      }
      img {
        width: 100%;
        height: 75%;
      }
    }
  }
}
</style>
