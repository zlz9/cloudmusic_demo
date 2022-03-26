import { reqPlayListDetail } from "@/api";
const state = {
  playListDetail: {},
};
const mutations = {
  GETPALYLISTDETAIL(state, playListDetail) {
    state.playListDetail = playListDetail;
  },
};
const actions = {
  async getPlayListDetail({ commit }, params) {
    let result = await reqPlayListDetail(params);
    if (result.status == 200) {
      commit("GETPALYLISTDETAIL", result.data);
    }
  },
};
const getters = {
  //   musicList(state) {
  //     return state.playlist.playListDetail.tracks || [];
  //   },
  //   coverImg(state) {
  //     return state.playlist.coverImgUrl || [];
  //   },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
