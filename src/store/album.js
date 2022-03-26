import { reqTopAlbum, reqAlbumNew, reqAlbumInfo } from "@/api";
const state = {
  topAlbum: {},
  albumNew: {},
  albumInfo: {},
};
const mutations = {
  GETTOPALBUM(state, topAlbum) {
    state.topAlbum = topAlbum;
  },
  GETALBUMNEW(state, albumNew) {
    state.albumNew = albumNew;
  },
  GETALBUMINFO(state, albumInfo) {
    state.albumInfo = albumInfo;
  },
};
const actions = {
  // 新碟上架
  async getTopAlbum({ commit }, params) {
    let result = await reqTopAlbum(params);
    if (result.status == 200) {
      commit("GETTOPALBUM", result.data);
    }
  },
  //   全部新碟
  async getAlbumNew({ commit }, params) {
    let result = await reqAlbumNew(params);
    if (result.status == 200) {
      commit("GETALBUMNEW", result.data);
    }
  },
  // 获取新碟上架列表
  async getAlbumInfo({ commit }, id) {
    let result = await reqAlbumInfo(id);
    if (result.status == 200) {
      commit("GETALBUMINFO", result.data);
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
