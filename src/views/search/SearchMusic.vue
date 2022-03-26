<template>
  <div class="search">
    <div class="nav">
      <ul>
        <li>单曲</li>
        <li>歌手</li>
        <li>专辑</li>
        <li>视频</li>
      </ul>
    </div>
    <search-content />
  </div>
</template>

<script>
import SearchContent from "./SearchContent.vue";
export default {
  components: { SearchContent },
  name: "SearchMusic",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.search {
  cursor: pointer;
  margin: 0 auto;
  width: 1100px;
  height: auto;
  border: 1px solid red;
  .nav ul li {
    position: relative;
    left: 200px;
    list-style: none;
    display: inline-block;
    margin: 20px;
    width: 80px;
    text-align: center;
    font-size: 18px;
    border-radius: 10px;
    &:hover {
      background: rgb(194, 188, 188);
    }
  }
  .content {
    width: 100%;
    height: auto;
    border: 1px solid black;
  }
  .content {
    position: relative;
  }
}
</style>
