<template>
  <div class="header">
    <div
      class="bj"
      style="background: #242424; width: 100%; height: 79px; position: absolute"
    ></div>
    <div class="logo">
      <img src="../assets/logo.png" alt="" />
      <div class="logo_text"><a ref="#" class="logo_text">网易云音乐</a></div>
      <div class="nav">
        <ul class="nav_text">
          <li><a href="#">发现音乐</a></li>
          <li><a href="#">我的音乐</a></li>
          <li><a href="#">关注</a></li>
          <li><a href="#">商城</a></li>
          <li><a href="#">音乐人</a></li>
          <li><a href="#">下载客户端</a></li>
        </ul>
      </div>
    </div>
    <div class="search">
      <input
        type="text"
        placeholder="音乐/电台/视频/用户"
        @keyup.enter="goSearch"
        v-model="keyWord"
      />
    </div>
    <div class="creator">
      <button>创作者中心</button>
    </div>
    <div class="login">
      <!-- 点击展示login界面 -->
      <a href="#" @click="goLogin">登录</a>
    </div>
    <div class="nav_2">
      <ul>
        <li><router-link to="/">推荐</router-link></li>
        <li><router-link to="/toplist?id=19723756">排行榜</router-link></li>
        <li><router-link to="/playlist">歌单</router-link></li>
        <li><router-link to="/radio">主播电台</router-link></li>
        <li><router-link to="/artists">歌手</router-link></li>
        <li><router-link to="/album">新碟上架</router-link></li>
      </ul>
    </div>
    <!-- 登录组件 -->
  </div>
</template>
<script>
export default {
  name: "MyHeader",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    goLogin() {
      this.$router.push({
        name: "login",
      });
    },
    goSearch() {
      if (this.keyWord == "") {
        return alert("内容不能为空");
      }
      let keyWord = this.keyWord;
      this.$router.push({
        name: "search",
        query: { keyWord: keyWord },
      });
      this.keyWord = "";
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
li:hover {
  background: rgb(161, 131, 131);
}
li {
  position: relative;
  bottom: 5px;
  list-style: none;
  height: 30px;
  /* width: 50px; */
}
.header {
  margin-top: 10px;
  width: 100%;
  height: 120px;
  position: relative;

  z-index: 1000;
  box-sizing: border-box;
  display: block;
}
.header .logo {
  margin-left: 20%;
  width: 240px;
  height: 69px;
}
.header .logo img {
  margin-top: 2px;
  margin-bottom: 1px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 60px;
  height: 60px;
  position: relative;
  border-radius: 10px;
}
.logo_text {
  display: inline;
  position: relative;
  bottom: 10px;
  margin-bottom: 20px;
  font-size: 28px;
  color: #fff;
}
.nav {
  display: inline-block;
  position: relative;
  width: 600px;
  /* border: 1px red solid; */
  left: 100%;
  bottom: 80%;
}
.nav_text li a {
  font-size: 15px;
  color: #fff;
}
.nav_text li {
  display: block;
  float: left;
  margin-left: 5px;
  margin-right: 5px;
}
.search input {
  outline: none;
  border-radius: 10px;
  border-color: #fff;
  position: relative;
  width: 180px;
  height: 25px;
  left: 1050px;
  bottom: 40px;
}
.creator button {
  position: relative;
  font-size: 10px;
  width: 80px;
  height: 40px;
  border-radius: 20px;
  left: 1250px;
  bottom: 72px;
  /* color: #242424; */
  color: #fff;
  background-color: #242424;
}
.login {
  position: relative;
  font-size: 15px;
  width: 60px;
  height: 40px;
  left: 1350px;
  bottom: 100px;
}
.login a {
  color: #fff;
}
.nav_2 {
  width: 100%;
  height: 40px;
  background-color: red;
  position: absolute;
  bottom: 14px;
  z-index: 1000;
}
.nav_2 li {
  display: block;
  float: left;
  width: 120px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  left: 30%;
  border-radius: 20px;
  bottom: 10px;
}
.nav_2 li a {
  color: #fff;
}
</style>
