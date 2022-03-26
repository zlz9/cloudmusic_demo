import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//引入swiper样式
import "swiper/css/swiper.css";
import store from "./store";
Vue.config.productionTip = false;
// 引入APlayer
import APlayer from "@moefe/vue-aplayer";
// 引入分页器
import { Pagination, Table, TableColumn } from "element-ui";
// 引入lazy-load
import VueLazyload from "vue-lazyload";
// 引入加载图片
import loadImg from "@/assets/lazyLoad.gif";
// 测试一下接口
import dayjs from "dayjs";
var duration = require("dayjs/plugin/duration");
dayjs.extend(duration);
Vue.use(APlayer, {
  productionTip: true,
});
// 引入插件
Vue.use(VueLazyload, {
  loading: loadImg,
});
// 注册分页器
Vue.use(Pagination);
Vue.use(Table);
Vue.use(TableColumn);
// 注册评论组件
import MusciCommnet from "./components/comment/MusicComment.vue";
Vue.component(MusciCommnet);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
