import Vue from "vue";
import Vuex from "vuex";
//引入swiper
import swiper from "./swiper";
//引入 Login.js
import login from "./login";
//引入home.js
import home from "./home";
//引入toplist.js
import toplist from "./toplist";
//引入player
import player from "./player";
// 引入playlist
import playlist from "./playlist";
// 引入musiclist
import musiclist from "./musiclist";
// 引入djradio
import djradio from "./djradio";
// 引入artists
import artists from "./artists";
import album from "./album";
import search from "./search";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    //轮播图
    swiper,
    //登录
    login,
    //主页
    home,
    //排行榜
    toplist,
    //播放器
    player,
    // 歌单
    playlist,
    // 详细歌单
    musiclist,
    // dj
    djradio,
    // 歌手
    artists,
    // 新碟上架
    album,
    search,
  },
});
