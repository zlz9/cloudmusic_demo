<template>
  <div class="SearchArtist">
    <ul>
      <li>
        <img src="" alt="" />
        <div class="name"></div>
        <div class="describe"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SearchArtist",
};
</script>

<style lang="less" scoped>
.SearchArtist {
  margin: 0 auto;
  width: 1100px;
  height: 500px;
  border: 1px solid red;
  ul li {
    display: block;
    float: left;
    width: 150px;
    height: 120px;
    border: 1px solid red;
  }
}
</style>
