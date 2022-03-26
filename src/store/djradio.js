import {
  reqCateList,
  reqDjRecommend,
  ReqDjTopList,
  reqCategoryRecommend,
  reqDjType,
  reqHotProgram,
  reqDjDetail,
  reqProgramDetail,
} from "@/api";
const state = {
  cateList: {},
  djRecommend: {},
  djTopList: {},
  categoryRecommend: {},
  djType: {},
  hotProgram: {},
  djDetail: {},
  programDetail: {},
};
const mutations = {
  GETCATELIST(state, cateList) {
    state.cateList = cateList;
  },
  GETDJRECOMMEND(state, djRecommend) {
    state.djRecommend = djRecommend;
  },
  GETDJTOPLIST(state, djTopList) {
    state.djTopList = djTopList;
  },
  GETCATEGORYRECOMMEND(state, categoryRecommend) {
    state.categoryRecommend = categoryRecommend;
  },
  GETDJTYPE(state, djType) {
    state.djType = djType;
  },
  GETHOTPROGRAM(state, hotProgram) {
    state.hotProgram = hotProgram;
  },
  GETDJDETAIL(state, djDetail) {
    state.djDetail = djDetail;
  },
  GETPROGRAMDETAIL(state, programDetail) {
    state.programDetail = programDetail;
  },
};
const actions = {
  // 获取头部小图标
  async getCateLsit({ commit }) {
    let result = await reqCateList();
    if (result.status == 200) {
      commit("GETCATELIST", result.data);
    }
  },
  //   获取电台推荐
  async getDjRecommend({ commit }) {
    let result = await reqDjRecommend();
    if (result.status == 200) {
      commit("GETDJRECOMMEND", result.data);
    }
  },
  // 获取电台排行
  async getDjTopList({ commit }) {
    let result = await ReqDjTopList();
    if (result.status == 200) {
      commit("GETDJTOPLIST", result.data);
    }
  },
  // 电台 - 推荐类型
  async getCategoryRecommend({ commit }) {
    let result = await reqCategoryRecommend();
    if (result.status == 200) {
      commit("GETCATEGORYRECOMMEND", result.data);
    }
  },
  //  电台 - 分类推荐
  async getDjType({ commit }, params) {
    let result = await reqDjType(params);
    if (result.status == 200) {
      commit("GETDJTYPE", result.data);
    }
  },
  // 电台 - 热门
  async getHotProgram({ commit }, cateId) {
    let result = await reqHotProgram(cateId);
    if (result.status == 200) {
      commit("GETHOTPROGRAM", result.data);
    }
  },
  // 电台-节目
  async getDjDetail({ commit }, rid) {
    let result = await reqDjDetail(rid);
    if (result.status == 200) {
      commit("GETDJDETAIL", result.data);
    }
  },
  // 电台节目详情
  async getProgramDetail({ commit }, rid) {
    let result = await reqProgramDetail(rid);
    if (result.status == 200) {
      commit("GETPROGRAMDETAIL", result.data);
    }
  },
};
const getters = {
  programs(state) {
    return state.programDetail.programs;
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
