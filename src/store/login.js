import { reqCellPhone } from "@/api";
const state = {
  data: "",
  token: "",
};
const mutations = {
  GETCODE(state, data) {
    state.data = data;
    state.token = data.token;
  },
};
const actions = {
  async getCode({ commit }, data) {
    let result = await reqCellPhone(data);
    if (result.status == 200) {
      commit("GETCODE", result.data);
      //打印token
      // console.log(result.data.token);
      //存储token
      localStorage.setItem("TOKEN", result.data.token);
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
