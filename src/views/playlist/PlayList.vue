<template>
  <!-- 歌单组件 -->
  <div class="list_head">
    <div class="list_header">
      <h2>全部分类</h2>
      <button class="categrory_btn" @click="choose">
        选择分类<span class="arrow"></span>
      </button>
      <!-- 分隔线 -->
      <hr style="border: 2px red solid; position: relative; bottom: 20px" />
      <!-- 气泡弹框 -->
      <div class="pop" id="pop" v-if="isShow">
        <div id="triangle" class="triangle-bottom"></div>
        <button class="categroy_btn2">全部分类</button>
        <div class="categroy" @click="chooseTag">
          <dl v-for="(category, index) in categories" :key="index">
            <dt>
              <img src="./img/logo.png" alt="" />
              {{ category }}
            </dt>
          </dl>
          <dl class="list_title">
            <dd
              class="categroy_list"
              v-for="(s, index) in sub"
              :key="index"
              :data-cat="s.name"
            >
              {{ s.name }}<span>|</span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <!-- 内容子组件 -->
    <list-content :cat="cat"></list-content>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ListContent from "./ListContent.vue";
export default {
  components: { ListContent },
  name: "PlayList",
  data() {
    return {
      cat: "",
      limit: 25,
      offset: 10,
      isShow: false,
    };
  },
  methods: {
    // 根据tag分类
    chooseTag(event) {
      let element = event.target;
      // 读取到自定义属性
      let { cat } = element.dataset;
      if (cat) {
        this.cat = cat;
      }
      let { limit, offset } = this;
      this.$store.dispatch("getTopList", { cat, limit, offset });
    },
    // 控制选择弹框
    choose() {
      this.isShow = !this.isShow;
    },
    //发请求
    reqInfo() {
      this.$store.dispatch("getPlayList");
    },
  },
  mounted() {
    this.reqInfo();
  },
  computed: {
    ...mapState({
      playList: (state) => state.playlist.playList,
    }),
    ...mapGetters(["all", "categories", "sub"]),
  },
};
</script>

<style lang="less" scoped>
.list_head {
  cursor: pointer;
  position: relative;
  margin: 0 auto;
  width: 1100px;
  height: 1280px;
  .list_header h2 {
    position: relative;
    left: 10px;
    top: 10px;
  }
  .list_header .categrory_btn {
    position: relative;
    width: 100px;
    height: 30px;
    bottom: 33px;
    left: 120px;
  }
  .bubble {
    width: 600px;
    height: 400px;
    border: 2px solid rgb(230, 15, 15);
    position: absolute;
    top: 70px;
    left: 50px;
  }
  .arrow {
    border-left: 2px solid #000000;
    border-bottom: 2px solid #000000;
    height: 5px;
    width: 5px;
    transform: translate(2px, -2px) rotate(-45deg);
    -webkit-transform: translate(2px, -2px) rotate(-45deg);
    border-right: 2px solid transparent;
    border-top: 2px solid transparent;
    display: inline-block;
    -moz-transform: translate(2px, -2px) rotate(-45deg);
    -ms-transform: translate(2px, -2px) rotate(-45deg);
    -o-transform: translate(2px, -2px) rotate(-45deg);
  }
  .pop {
    width: 550px;
    height: 350px;
    border: 2px solid rgb(238, 2, 2);
    border-radius: 4px;
    box-shadow: 2px 2px 2px rgb(245, 3, 3);
    position: absolute;
    background-color: white;
    top: 85px;
    left: 50px;
    z-index: 100;
  }
  .triangle-bottom {
    width: 0;
    height: 0;
    border-top: 10px solid rgb(240, 8, 8);
    border-left: 10px dashed transparent;
    border-right: 10px dashed transparent;
    position: absolute;
    left: 90px;
    top: -10px;
    transform: rotateX(180deg);
  }
  .categroy_btn2 {
    position: relative;
    top: 10px;
    left: 10px;
  }
  .categroy {
    position: relative;
    height: 90%;
    width: 100%;
    top: 10px;
  }
  #categroy_title {
    position: relative;
    left: 10px;
    width: 100px;
    height: 30px;
    bottom: 5px;
  }
  img {
    position: relative;
    width: 30px;
    height: 30px;
    top: 6px;
  }
  .list_title {
    position: relative;
    width: 400px;
    bottom: 220px;
  }
  .categroy_list {
    position: relative;
    float: left;
    left: 80px;
    bottom: 18px;
    margin: 5px 5px 5px 5px;
    font-size: 10px;
    span {
      margin-left: 5px;
      margin-right: 5px;
    }
  }
}
</style>
