<template>
  <div id="footer">
    <div class="footer_text">
      <ul>
        <li>
          <a href="#">服务条款<span>|</span></a>
        </li>
        <li>
          <a href="#">隐私政策<span>|</span></a>
        </li>
        <li>
          <a href="#">儿童隐私政策<span>|</span></a>
        </li>
        <li>
          <a href="#">版权投诉指引<span>|</span></a>
        </li>
        <li>
          <a href="#">联系我们<span>|</span></a>
        </li>
        <li>
          <a href="#">广告合作<span>|</span></a>
        </li>
      </ul>
    </div>
    <div class="footer_text2">
      <a href="#">网易公司版权所有©1997-2022</a>
      杭州乐读科技有限公司运营<a href="">浙网文【2021】1186-054号</a>
      <div class="footer_text3">
        <a href="#"> 粤B2-20090191-18 工业和信息化部备案管理系统网站 </a>
        <a href="#"> 浙公网安备 33010902002564号</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
};
</script>
<style lang="less">
#footer {
  position: relative;
  border: 1px red solid;
  width: 100%;
  height: 200px;
  background: #f2f2f2;

  .footer_text2 {
    left: 400px;
    width: 400px;
    position: relative;
    top: 60px;
    height: 100px;
    .footer_text3 {
      position: relative;
    }
  }
  li {
    position: relative;
    list-style: none;
    width: 100px;
    height: 20px;
    display: block;
    float: right;
    text-align: center;
    font-size: 12px;
    right: 50%;
    a {
      text-decoration: none;
      span {
        margin-left: 10px;
      }
    }
  }
}
</style>
