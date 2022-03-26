<template>
  <div class="login">
    <div class="MusicLog">
      <img src="./img/login_picture.jpg" alt="" />
      <div class="user">
        <input type="text" placeholder="手机号" class="phone" v-model="phone" />
        <input
          type="password"
          placeholder="密码"
          class="password"
          v-model="password"
        />
        <button class="btn" @click="getCode">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicLogin",
  data() {
    return {
      phone: "",
      password: "",
      token: "",
    };
  },
  methods: {
    getCode() {
      const { phone, password } = this;
      if (phone && password) {
        this.$store.dispatch("getCode", { phone, password });
        //跳转到首页
        this.$router.push("/");
      }
      //打印一下token
      console.log(this.$store.state.login.token);
    },
  },
};
</script>

<style lang="less" scoped>
.MusicLog {
  position: relative;
  width: 1200px;
  height: 600px;
  border: 1px red solid;
  margin: 0 auto;
  img {
    width: 500px;
    height: 600px;
  }
  .user {
    position: relative;
    width: 400px;
    height: 500px;
    border: 1px red solid;
    bottom: 550px;
    left: 600px;
    .phone {
      position: relative;
      width: 200px;
      height: 30px;
      top: 300px;
      left: 100px;
    }
    .password {
      position: relative;
      width: 200px;
      height: 30px;
      top: 300px;
      left: 100px;
      margin-top: 30px;
    }
    .btn {
      position: relative;
      width: 150px;
      height: 30px;
      background: rgb(228, 102, 102);
      top: 360px;
      right: 80px;
    }
  }
}
</style>
