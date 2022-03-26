const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    // proxy: {
    //   "/api": {
    //     target: "https://netease-cloud-music-api-1-rgak5d383-zlz9.vercel.app",
    //     secure: false,
    //   },
    // },
  },
});
// 配置代理
// module.exports = {
//   devServer: {
//     proxy: {
//       "/api": {
//         target: "https://172.31.52.8",
//         secure: false,
//       },
//     },
//   },
// };
