import Vue from "vue";
//使用Vue.directive()定义一个全局指令
//1.参数一：指令的名称，定义时指令前面不需要写v-
//2.参数二：是一个对象，该对象中有相关的操作函数
//3.在调用的时候必须写v-
const drag = Vue.directive("drag", {
  //1.指令绑定到元素上回立刻执行bind函数，只执行一次
  //2.每个函数中第一个参数永远是el，表示绑定指令的元素，el参数是原生js对象
  //3.通过el.focus()是无法获取焦点的，因为只有插入DOM后才生效
  bind: function (el) {
    el.style.cursor = "move"; //鼠标样式变move样式
  },
  //inserted表示一个元素，插入到DOM中会执行inserted函数，只触发一次
  inserted: function (el) {
    el.onmousedown = function (e) {
      var distX = e.pageX - el.offsetLeft;
      var distY = e.pageY - el.offsetTop;
      console.log(
        "元素本身的高：" + el.clientHeight + ",元素本身的宽：" + el.clientWidth
      );

      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      } //解决快速拖动滞后问题

      document.onmousemove = function (e) {
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - distX;
        let top = e.clientY - distY;

        if (left <= 0) {
          left = 5; //设置成5是为了不离边缘太近
        } else if (
          left >
          document.documentElement.clientWidth - el.clientWidth
        ) {
          //document.documentElement.clientWidth 屏幕的可视宽度
          left = document.documentElement.clientWidth - el.clientWidth - 5;
        }
        if (top <= 0) {
          top = 5;
        } else if (
          top >
          document.documentElement.clientHeight - el.clientHeight
        ) {
          top = document.documentElement.clientHeight - el.clientHeight - 5;
        }
        el.style.left = left + "px";
        el.style.top = top + "px";
      };
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null;
      };
    };
  },
  //当VNode更新的时候会执行updated，可以触发多次
  updated: function (el) {},
});
export default drag;
