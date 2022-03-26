<template>
  <div class="artist_detail">
    <div class="header">
      <img :src="aritistInfo.data.artist.cover" alt="" />
      <div class="artist_info">
        <div class="aritist_name">{{ aritistInfo.data.artist.name }}</div>
        <ul>
          <li
            class="identifyTag"
            v-for="(tag, index) in aritistInfo.data.artist.identifyTag"
            :key="index"
          >
            {{ tag }}
          </li>
        </ul>
        <div class="describe">{{ aritistInfo.data.artist.briefDesc }}</div>
      </div>
    </div>
    <div class="song_lists">
      <el-table :data="Songs" stripe style="width: 100%" @cell-click="goPlayer">
        <el-table-column prop="name" label="歌名" width="200">
        </el-table-column>
        <el-table-column prop="dt" label="时长" width="200"> </el-table-column>
        <el-table-column prop="ar[0].name" label="歌手" width="200">
        </el-table-column>
        <el-table-column prop="al.name" label="专辑" width="200">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
// import { handleMusicTime } from "@/utils/index";
import { mapState, mapGetters } from "vuex";
export default {
  name: "AritistInfo",
  data() {
    return {
      musicList: null,
    };
  },
  created() {
    this.getAritistInfo();
  },
  mounted() {
    console.log(this.Songs[10].dt);
  },
  methods: {
    // 获取参数发请求
    getAritistInfo() {
      let id = this.$route.query.id;
      //   获取歌手全部歌曲
      this.$store.dispatch("getAllSongs", id);
      //   获取歌手热门 50 首歌曲
      this.$store.dispatch("getHotSong", id);
      // 获取歌手信息
      this.$store.dispatch("getAritistInfo", id);
      // 处理时间--(时间一闪而过，暂时不知道怎么解决)
      this.Songs.forEach((item, index) => {
        this.Songs[index].dt = dayjs.duration(item.dt).format("m:s");
      });
    },
    goPlayer(event) {
      let id = event.id;
      console.log(id);
      // let element = event.target;
      // console.log("触发了函数");
      // let { id } = element.dataset;
      // 如果id存在跳转到aplayer播放器
      // console.log("触发了函数");
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
      hotSong: (state) => state.artists.hotSong,
      allSongs: (state) => state.artists.allSongs,
      aritistInfo: (state) => state.artists.aritistInfo,
    }),
    ...mapGetters(["Songs"]),
    // 获取到了时间节点
  },
};
</script>

<style lang="less" scoped>
.artist_detail {
  cursor: pointer;
  margin: 0 auto;
  width: 1100px;
  height: auto;
  border: 1px solid rgb(163, 155, 155);
  .header {
    position: relative;
    width: 100%;
    height: 360px;
    img {
      position: relative;
      border-radius: 50%;
      width: 300px;
      height: 300px;
      top: 30px;
      left: 50px;
    }
    .artist_info {
      position: relative;
      width: 500px;
      height: 300px;
      left: 500px;
      bottom: 250px;
      .aritist_name {
        position: relative;
        font-size: 20px;
        font-weight: bolder;
        font-style: italic;
        color: rgb(124, 44, 44);
        top: 10px;
        left: 30px;
      }
      .describe {
        position: relative;
        color: rgb(110, 66, 66);
        font-style: italic;
      }
    }
  }
  .song_lists table {
    position: relative;
    margin: 0 auto;
    .title {
      td {
        border-radius: 10px;
        text-align: center;
        width: 200px;
        font-size: 20px;
        color: rgb(34, 6, 6);
      }
    }
    .music_list {
      .time {
        border-radius: 10px;
        text-align: center;
        width: 200px;
        font-size: 20px;
        color: rgb(34, 6, 6);
      }
      .info {
        border-radius: 10px;
        text-align: center;
        width: 200px;
        height: 20px;
        font-size: 15px;
        color: #fff;
        &:hover {
          background: rgb(223, 218, 218);
        }
      }
    }
  }
}
</style>
