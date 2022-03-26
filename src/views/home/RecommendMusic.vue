<template>
  <!-- 发现音乐目录下的推荐菜单 -->
  <div class="recommend">
    <div class="title">
      <div class="title_2">热门推荐</div>
      <ul>
        <li><a href="">华语</a></li>
        <li><a href="">流行</a></li>
        <li><a href="">摇滚</a></li>
        <li><a href="">民谣</a></li>
        <li><a href="">电子</a></li>
      </ul>
    </div>
    <div class="wire"></div>
    <div class="recomList">
      <!-- 推荐歌单 -->
      <div class="list" v-for="(list, index) in musicList.result" :key="index">
        <!-- 图片 -->
        <img v-lazy="list.picUrl" :data-id="list.id" @click="goMusicList" />
        <div class="text">{{ list.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "RecommendMusic",
  mounted() {
    //挂在派发getPersonlized
    this.$store.dispatch("getPersonlized");
  },
  methods: {
    // 整理参数，跳转路由
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
  },
  computed: {
    ...mapState({
      musicList: (state) => state.home.musicList,
    }),
  },
};
</script>

<style lang="less" scoped>
.recommend {
  cursor: pointer;
  position: relative;
  // border: 1px solid red;
  width: 1100px;
  height: 600px;
  margin: 0 auto;
  .wire {
    margin: 0 auto;
    position: relative;
    top: 15px;
    width: 90%;
    height: 1px;
    border: 1px red solid;
    background: red;
  }
  .recomList {
    position: relative;

    height: 400px;
    width: 900px;
    left: 100px;
    margin-top: 50px;
    .list {
      position: relative;
      width: 200px;
      height: 250px;
      // border: 1px red solid;
      float: left;
      margin: 5px 5px 5px 10px;
      img {
        position: relative;
        border-radius: 10px;
        width: 100%;
        height: 180px;
        &:hover {
          width: 105%;
          height: 200px;
        }
      }
      .text {
        &:hover {
          font-size: 18px;
          color: aqua;
        }
      }
    }
  }
  .title_2 {
    display: block;
    font-size: 23px;
    color: rgb(34, 17, 17);
    font-weight: bolder;
    position: relative;
    left: 30px;
    top: 30px;
  }
  li {
    position: relative;
    display: block;
    float: left;
    margin-left: 10px;
    margin-right: 10px;
    bottom: 5px;
    left: 100px;
    a {
      text-decoration: none;
    }
  }
}
</style>
