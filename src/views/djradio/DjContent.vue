<template>
  <div class="radio_content">
    <div class="new_radio">
      <!-- 优秀新电台 -->
      <h3>优秀新电台</h3>
      <hr class="line" />
      <div class="new_radio_content">
        <ul>
          <li
            @click="goToProgram"
            v-for="(item, index) in djType.djRadios.slice(0, 5)"
            :key="index"
            :data-id="item.id"
          >
            <img v-lazy="item.picUrl" alt="" :data-id="item.id" />
            <div class="describe">{{ item.name }}</div>
            <div class="name">{{ item.rcmdtext }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="radio_top">
      <!-- 电台排行榜 -->
      <h3>电台排行榜</h3>
      <hr class="line" />
      <div class="top_list">
        <ul>
          <li
            v-for="(item, index) in hotProgram.djRadios"
            :key="index"
            :data-id="item.id"
            @click="goToProgram"
          >
            <img v-lazy="item.picUrl" alt="" :data-id="item.id" />
            <h3 class="title">{{ item.rcmdtext }}</h3>
            <div class="author">{{ item.name }}</div>
            <!-- <div class="num">共1期 订阅924次</div> -->
          </li>
        </ul>
      </div>
      <!-- <el-pagination
        class="pagination"
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :page-size="5"
        :page-count="5"
        :total="limit"
      >
      </el-pagination> -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DjContent",
  data() {
    return {
      limit: 16,
      offset: 1,
      cateId: 0,
    };
  },
  created() {
    //  优秀电台
    this.req();
    // 电台排行榜
    this.getDjProgram();
  },
  computed: {
    ...mapState({
      djType: (state) => state.djradio.djType,
      hotProgram: (state) => state.djradio.hotProgram,
    }),
  },
  methods: {
    req() {
      let params = this.$route.query.type;
      this.$store.dispatch("getDjType", params);
    },
    getDjProgram() {
      // 请求电台-节目
      let cateId = this.$route.query.type;
      this.$store.dispatch("getHotProgram", cateId);
    },
    handleCurrentChange(pager) {
      // 修改参数
      this.params.offset = pager * 16;
      this.getDjProgram();
    },
    goToProgram(event) {
      // 跳转到DjProgram
      let element = event.target;
      let { id } = element.dataset;
      if (id) {
        let location = { name: "djprogram" };
        let query = { id: id };
        location.query = query;
        this.$router.push(location);
      }
    },
  },
  watch: {
    $route(to, from) {
      this.req();
      this.getDjProgram();
    },
  },
};
</script>
<style lang="less" scoped>
.radio_content {
  width: 1100px;
  height: auto;
  .new_radio {
    position: relative;
    height: 300px;
    width: 100%;
    h3 {
      position: relative;
      left: 30px;
    }
    .line {
      width: 95%;
      height: 2px;
      background: red;
    }
    .new_radio_content ul li {
      cursor: pointer;
      border-radius: 10px;
      list-style: none;
      position: relative;
      border: 1px solid rgb(233, 224, 224);
      width: 190px;
      height: 210px;
      display: block;
      float: left;
      margin: 10px;
      bottom: 10px;
      img {
        border-radius: 10px;
        width: 100%;
        height: 68%;
      }
      .describe {
        font-size: 13px;
        font-weight: bolder;
      }
      .name {
        font-size: 10px;
        color: rgb(215, 211, 219);
      }
    }
  }
  .radio_top {
    width: 100%;
    height: auto;
    border: 1xp solid red;
    h3 {
      position: relative;
      left: 20px;
    }
    .line {
      width: 98%;
      height: 2px;
      background: red;
    }
    .top_list {
      position: relative;
      li {
        border-radius: 10px;
        position: relative;
        display: block;
        width: 450px;
        height: 180px;
        border: 1px rgb(231, 225, 231) solid;
        float: left;
        margin-left: 40px;
        margin-top: 10px;
        img {
          width: 180px;
          height: 100%;
        }
        .title {
          position: relative;
          left: 200px;
          width: 200px;
          bottom: 170px;
        }
        .author {
          display: block;
          position: relative;
          bottom: 180px;
          left: 220px;
          width: 200px;
        }
        .num {
          position: relative;
          bottom: 150px;
          left: 180px;
          width: 200px;
        }
      }
    }
  }
  .pagination {
    position: absolute;
    width: 250px;
    height: 30px;
    bottom: 230px;
    right: 450px;
  }
}
</style>
