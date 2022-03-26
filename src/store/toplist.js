import { reqTop, reqDetail } from "@/api";
const state = {
  List: {},
  topDetail: {},
  //获取推荐主页榜单部分
  topDetail2: {},
};
const mutations = {
  GETTOP(state, List) {
    state.List = List;
  },
  GETTOPDETAIL(state, topDetail) {
    state.topDetail = topDetail;
  },
  GETTOPDETAIL2(state, topDetail2) {
    state.topDetail2 = topDetail2;
  },
};
const actions = {
  //获取榜单
  async getTop({ commit }) {
    let result = await reqTop();
    if (result.status == 200) {
      commit("GETTOP", result.data);
    }
  },
  //获取榜单详细信息
  async getTopDetail({ commit }, params = {}) {
    let result = await reqDetail(params);
    if (result.status == 200) {
      commit("GETTOPDETAIL", result.data);
    }
  },
  // 获取主页的榜单详细信息
  async getTopDetail2({ commit }, params) {
    let result = await reqDetail(params);
    if (result.status == 200) {
      commit("GETTOPDETAIL2", result.data);
    }
  },
};
const getters = {
  playlist(state) {
    //截取播放列表
    return state.topDetail.playlist || {};
  },
  // 获取推荐主页榜单部分
  playTitle(state) {
    return state.List.list || [];
  },
  playList2(state) {
    return state.topDetail2.playlist.tracks || [];
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
