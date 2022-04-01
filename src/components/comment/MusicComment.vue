<template>
  <div id="music_comment">
    <ul>
      <li v-for="(comment, index) in musicComments.comments" :key="index">
        <img :src="comment.user.avatarUrl" alt="" />
        <div class="nickname">{{ comment.user.nickname }}</div>
        <div class="comment">{{ comment.content }}</div>
        <div class="timeStr">{{ comment.timeStr }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MusciComment",
  props: ["id"],
  data() {
    return {
      params: {
        limit: 20,
        offset: 20,
        before: 0,
        id: 0,
      },
    };
  },
  created() {
    this.params.id = this.id;
    let { params } = this;
    this.$store.dispatch("getMusicComments", params);
  },
  mounted() {
    console.log(this.id);
  },
  computed: {
    ...mapState({
      musicComments: (state) => state.comments.musicComments,
    }),
  },
};
</script>

<style lang="less" scoped>
#music_comment {
  margin: 0 auto;
  position: relative;
  width: 1100px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  ul li {
    position: relative;
    width: 700px;
    height: 80px;
    list-style: none;
    margin-bottom: 10px;
    img {
      position: absolute;
      border-radius: 5px;
      height: 100%;
      width: 80px;
    }
    .nickname {
      position: absolute;
      top: 2px;
      width: 500px;
      height: auto;
      left: 90px;
      font-style: italic;
      color: rgb(194, 182, 182);
    }
    .comment {
      position: absolute;
      top: 30px;
      width: 500px;
      height: auto;
      left: 90px;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .timeStr {
      position: absolute;
      width: 80px;
      height: 60px;
      line-height: 60px;
      right: 20px;
      text-align: center;
      color: rgb(169, 179, 183);
    }
  }
}
</style>
