import {
  reqPersonlized,
  reqAlbum,
  reqRecommend,
  reqRecommendSongs,
} from "@/api";
const state = {
  musicList: {},
  albumList: {},
  recommend: {},
  recommendSongs: {},
};
const mutations = {
  //热门推荐
  GETPERSONLIZED(state, musicList) {
    state.musicList = musicList;
  },
  //新碟上架
  GETALBUM(state, albumList) {
    state.albumList = albumList;
  },
  GETRECOMMEND(state, recommend) {
    state.recommend = recommend;
  },
  GETRECOMMENDSONGS(state, recommendSongs) {
    state.recommendSongs = recommendSongs;
  },
};
const actions = {
  async getPersonlized({ commit }) {
    let result = await reqPersonlized();
    if (result.status == 200) {
      commit("GETPERSONLIZED", result.data);
    }
  },
  async getAlbum({ commit }) {
    let result = await reqAlbum();
    if (result.status == 200) {
      //对后台数据进行截取
      commit("GETALBUM", result.data.weekData.slice(0, 4));
    }
  },
  // 获取每日推荐歌单
  async getRecommend({ commit }) {
    let result = await reqRecommend();
    if (result.status == 200) {
      commit("GETRECOMMEND", result.data);
    }
  },
  // 获取每日推荐歌曲
  async getRecommendSongs({ commit }) {
    let result = await reqRecommendSongs();
    if (result.status == 200) {
      commit("GETRECOMMENDSONGS", result.data);
    }
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
