import { reqUrl, reqLyric, reqMusicDetail } from "@/api";
const state = {
  MusicDetial: {},
  lyric: {},
  musicDetails: {},
};
const mutations = {
  GETURL(state, MusicDetial) {
    state.MusicDetial = MusicDetial;
  },
  GETLYRIC(state, lyric) {
    state.lyric = lyric;
  },
  GETMUSICDETAILS(state, musicDetails) {
    state.musicDetails = musicDetails;
  },
};
const actions = {
  // 派发歌词url请求
  async getUrl({ commit }, params) {
    let result = await reqUrl(params);
    // console.log(result);
    if (result.status == 200) {
      commit("GETURL", result.data);
    }
  },
  async getLyric({ commit }, params) {
    let result = await reqLyric(params);
    if (result.status == 200) {
      commit("GETLYRIC", result.data);
    }
  },
  // 派发歌曲详情信息
  async getMusicDetail({ commit }, ids) {
    let result = await reqMusicDetail(ids);
    if (result.status == 200) {
      commit("GETMUSICDETAILS", result.data);
    }
  },
};
const getters = {
  // 截取歌曲封面
  getSong(state) {
    return state.musicDetails.songs;
  },
  // 截取音乐url
  getUrl2(state) {
    return state.MusicDetial.data[0] || [];
  },
  lrc(state) {
    return state.lyric.lrc || [];
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
