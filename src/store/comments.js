import { reqMusicComments } from "@/api";
const state = {
  musicComments: {},
};
const mutations = {
  GETMUSICCOMMENTS(state, musicComments) {
    state.musicComments = musicComments;
  },
};
const actions = {
  // 获取歌曲评论
  async getMusicComments({ commit }, params) {
    let result = await reqMusicComments(params);
    if (result.status == 200) {
      commit("GETMUSICCOMMENTS", result.data);
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
