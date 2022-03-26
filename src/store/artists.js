import {
  reqHotArtists,
  reqArtistList,
  reqHotSong,
  reqAllSongs,
  reqAritistInfo,
} from "@/api";
const state = {
  hotAritists: {},
  artistList: {},
  hotSong: {},
  allSongs: {},
  aritistInfo: {},
};
const mutations = {
  GETHOTARTISTS(state, hotAritists) {
    state.hotAritists = hotAritists;
  },
  GETARTISTLIST(state, artistList) {
    state.artistList = artistList;
  },
  GETHOTSONG(state, hotSong) {
    state.hotSong = hotSong;
  },
  GETALLSONGS(state, allSongs) {
    state.allSongs = allSongs;
  },
  GETARITISTINFO(state, aritistInfo) {
    state.aritistInfo = aritistInfo;
  },
};
const actions = {
  // 获取热门歌手
  async getHotArtists({ commit }, limit, offset) {
    let result = await reqHotArtists(limit, offset);
    if (result.status == 200) {
      commit("GETHOTARTISTS", result.data);
    }
  },
  //   获取歌手分类
  async getArtistList({ commit }, area) {
    let result = await reqArtistList(area);
    if (result.status == 200) {
      commit("GETARTISTLIST", result.data);
    }
  },
  //   获取歌手热门 50 首歌曲
  async getHotSong({ commit }, id) {
    let result = await reqHotSong(id);
    if (result.status == 200) {
      commit("GETHOTSONG", result.data);
    }
  },
  //   获取歌手全部歌曲
  async getAllSongs({ commit }, id) {
    let result = await reqAllSongs(id);
    if (result.status == 200) {
      commit("GETALLSONGS", result.data);
    }
  },
  // 获取歌手信息
  async getAritistInfo({ commit }, id) {
    let result = await reqAritistInfo(id);
    if (result.status == 200) {
      commit("GETARITISTINFO", result.data);
    }
  },
};
const getters = {
  Songs(state) {
    return state.hotSong.songs || [];
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
