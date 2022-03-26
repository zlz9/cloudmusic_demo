<template>
  <div class="content">
    <div class="recommend">
      <div class="title">
        <h3>推荐节目</h3>
        <a href="#">更多</a>
        <div class="lists">
          <ul>
            <li v-for="(list, index) in djRecommend.programs" :key="index">
              <img v-lazy="list.coverUrl" alt="" />
              <div class="topic">
                <a href="#">{{ list.name }}</a>
              </div>
              <div class="describe">
                <a href="#">{{ list.dj.brand }}</a>
              </div>
              <div class="tag">{{ list.radio.category }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="top_list">
      <div class="title">
        <h3>节目排行榜</h3>
        <a href="#">更多</a>
        <div class="lists">
          <ul>
            <li
              v-for="(list, index) in djTopList.toplist.slice(0, 10) || []"
              :key="index"
            >
              <img v-lazy="list.program.coverUrl" alt="" />
              <div class="topic">
                <a href="#">{{ list.program.name }}</a>
              </div>
              <div class="describe">
                <a href="#">{{ list.program.radio.name }}</a>
              </div>
              <div class="tag">{{ list.program.radio.category }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="dj"
      v-for="(list, index) in categoryRecommend.data.slice(0, 5)"
      :key="index"
    >
      <h2 class="dj_title">
        <a href="#">{{ list.categoryName }}</a
        ><span>·</span>电台
      </h2>
      <hr class="line" />
      <div class="dj_item" v-for="(item, index) in list.radios" :key="item.id">
        <div class="dj_block" @click="goToProgram" :data-id="item.id">
          <img v-lazy="item.picUrl" alt="" :data-id="item.id" />
          <h6 class="dj_block_title">
            <a href="">{{ item.lastProgramName }}</a>
          </h6>
          <p class="dj_describe">{{ item.rcmdText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DjContent",
  created() {
    this.$store.dispatch("getDjRecommend");
    this.$store.dispatch("getDjTopList");
    this.$store.dispatch("getCategoryRecommend");
  },
  computed: {
    ...mapState({
      djRecommend: (state) => state.djradio.djRecommend,
      djTopList: (state) => state.djradio.djTopList,
      categoryRecommend: (state) => state.djradio.categoryRecommend,
    }),
  },
  methods: {
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
};
</script>
<style lang="less" scoped>
.content {
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 720px;

  .recommend {
    border-radius: 10px;
    position: relative;
    left: 40px;
    width: 450px;
    height: 720px;
    border: 0.1px rgb(231, 226, 226) solid;
    .title {
      position: relative;
      h3 {
        position: relative;
        width: 100px;
        left: 5%;
      }
      a {
        position: relative;
        left: 400px;
        bottom: 40px;
      }
      .lists ul li {
        :hover {
          color: #a399a8;
        }
        position: relative;
        border-radius: 5px;
        margin-top: 10px;
        right: 20px;
        list-style: none;
        width: 100%;
        height: 50px;
        background: rgb(237, 235, 238);
        img {
          position: relative;
          height: 100%;
          width: 45px;
          margin-left: 5px;
        }
        .topic a {
          text-align: center;
          position: relative;
          text-overflow: ellipsis;
          overflow: hidden;
          display: block;
          white-space: nowrap;
          width: 270px;
          height: 20px;
          left: 55px;
          bottom: 50px;
        }
        .describe a {
          font-size: 12px;
          color: rgb(144, 150, 156);
          text-align: center;
          position: relative;
          display: block;
          width: 240px;
          height: 20px;
          left: 55px;
          bottom: 48px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .tag {
          color: #999;
          text-align: center;
          width: 74px;
          height: 30px;
          line-height: 30px;
          position: relative;
          bottom: 85px;
          left: 330px;
          border: 1px #999 solid;
        }
      }
    }
  }
  .top_list {
    border-radius: 10px;
    position: relative;
    width: 450px;
    height: 720px;
    left: 600px;
    bottom: 722px;
    border: 0.1px rgb(231, 226, 226) solid;
    .title {
      position: relative;
      h3 {
        position: relative;
        width: 100px;
        left: 5%;
      }
      a {
        position: relative;
        left: 400px;
        bottom: 40px;
      }
      .lists ul li {
        :hover {
          color: #a399a8;
        }
        position: relative;
        margin-top: 10px;
        right: 20px;
        list-style: none;
        width: 100%;
        height: 50px;
        background: #edebee;
        img {
          position: relative;
          height: 100%;
          width: 45px;
          margin-left: 5px;
        }
        .topic a {
          text-align: center;
          position: relative;
          text-overflow: ellipsis;
          overflow: hidden;
          display: block;
          white-space: nowrap;
          width: 270px;
          height: 20px;
          left: 55px;
          bottom: 50px;
        }
        .describe a {
          font-size: 12px;
          color: rgb(144, 150, 156);
          text-align: center;
          position: relative;
          display: block;
          width: 240px;
          height: 20px;
          left: 55px;
          bottom: 48px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .tag {
          color: #999;
          text-align: center;
          width: 74px;
          height: 30px;
          line-height: 30px;
          position: relative;
          bottom: 85px;
          left: 330px;
          border: 1px #999 solid;
        }
      }
    }
  }
  .dj {
    position: relative;
    bottom: 650px;
    width: 100%;
    height: 280px;
    .dj_title {
      position: relative;
      left: 40px;
    }
    .line {
      margin: 0 auto;
      width: 92%;
      height: 3px;
      background: red;
    }
    .dj_item {
      border-radius: 10px;
      left: 40px;
      position: relative;
      display: inline-block;
      margin: 10px;
      margin-top: 5px;
      border: 1px rgb(231, 228, 228) solid;
      width: 320px;
      height: 180px;
      img {
        position: relative;
        width: 160px;
        height: 160px;
        left: 10px;
        top: 10px;
      }
      .dj_block_title a {
        width: 130px;
        position: relative;
        bottom: 130px;
        left: 180px;
        display: block;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .dj_describe {
        width: 130px;
        font-size: 12px;
        width: 100px;
        position: relative;
        left: 175px;
        bottom: 130px;
        display: block;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
}
</style>
