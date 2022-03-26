// 这是歌单的仓库
import { reqPlayList1, reqTopLis } from "@/api";
const state = {
  playList: {},
  all: {},
  categories: {},
  sub: {},
  // 歌单
  toplist: {},
  playlists: [],
};
const mutations = {
  GETPLAYLIST(state, playList) {
    state.playList = playList;
  },
  GETTOPLIST(state, toplist) {
    state.toplist = toplist;
  },
};
const actions = {
  async getPlayList({ commit }, cat) {
    let result = await reqPlayList1(cat);
    if (result.status == 200) {
      commit("GETPLAYLIST", result.data);
    }
  },
  // 获取歌单
  async getTopList({ commit }, params) {
    let result = await reqTopLis(params);
    if (result.status == 200) {
      commit("GETTOPLIST", result.data);
    }
  },
};
const getters = {
  all(state) {
    return state.playList.all || [];
  },
  categories(state) {
    return state.playList.categories || [];
  },
  sub(state) {
    return state.playList.sub || [];
  },
  // 获取歌单数组
  playlists(state) {
    return state.toplist.playlists || [];
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
