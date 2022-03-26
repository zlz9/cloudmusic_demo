import { reqSearch } from "@/api";
const state = {
  searchInfo: {},
};
const mutations = {
  GETSEARCH(state, searchInfo) {
    state.searchInfo = searchInfo;
  },
};
const actions = {
  async getSearch({ commit }, params) {
    let result = await reqSearch(params);
    if (result.status == 200) {
      commit("GETSEARCH", result.data);
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
