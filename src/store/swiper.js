import { getBanner } from "@/api";
const state = {
  getbanner: [],
};
const mutations = {
  GETBANNER(state, getbanner) {
    state.getbanner = getbanner;
  },
};
const actions = {
  async getbanner({ commit }) {
    let result = await getBanner();
    if (result.status == 200) {
      commit("GETBANNER", result.data);
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
