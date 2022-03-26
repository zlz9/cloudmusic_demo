import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
// push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};
// replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject);
  return originalReplace.call(this, location).catch((err) => err);
};
const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("../views/home/MusicMain.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/MusicLogin.vue"),
  },
  {
    path: "/toplist",
    name: "toplist",
    component: () => import("../views/toplist/TopList.vue"),
    children: [
      {
        path: "topmain",
        name: "topmain",
        component: () => import("../views/toplist/TopMain.vue"),
      },
    ],
  },
  {
    path: "/playlist",
    name: "playlist",
    component: () => import("../views/playlist/PlayList.vue"),
  },
  // aplayer播放器
  {
    path: "/song/url",
    name: "player",
    component: () => import("../views/aplayer/MusicPlayer.vue"),
  },
  {
    path: "/musiclist",
    name: "muscilist",
    component: () => import("../views/musiclist/MusicList.vue"),
  },
  // 主播电台
  {
    path: "/radio",
    name: "radio",
    component: () => import("../views/djradio/DjRadio.vue"),
    children: [
      {
        path: "",
        name: "",
        component: () => import("../views/djradio/DjHome.vue"),
      },
      {
        path: "",
        name: "DjContent",
        component: () => import("../views/djradio/DjContent.vue"),
      },
    ],
  },
  {
    path: "",
    name: "djprogram",
    component: () => import("../views/djradio/DjProgram.vue"),
  },
  {
    path: "/artists",
    name: "artists",
    component: () => import("../views/artists/AritistsHome.vue"),
  },
  {
    path: "/song",
    name: "song",
    component: () => import("../views/artists/AritistInfo.vue"),
  },
  {
    path: "/album",
    name: "album",
    component: () => import("../views/album/AlbumHome.vue"),
  },
  {
    path: "/albumInfo",
    name: "albumInfo",
    component: () => import("../views/album/AlbumInfo.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/search/SearchMusic.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
