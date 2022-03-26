<template>
  <div class="myswiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(carousel, index) in getbanner.banners"
          :key="index"
        >
          <!--使用后 :key="carousel.encodeId 报重复的错误" -->
          <img :src="carousel.imageUrl" alt="" srcset="" />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Arrows -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
// 引入是swiper
import Swiper from "swiper";
import { mapState } from "vuex";
export default {
  name: "SwiperTop",
  mounted() {
    this.$store.dispatch("getbanner");
  },
  methods: {},
  computed: {
    ...mapState({
      getbanner: (state) => state.swiper.getbanner,
    }),
  },
  watch: {
    getbanner: {
      handler() {
        this.$nextTick(() => {
          var swiper = new Swiper(".swiper-container", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style scoped>
/* html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
} */
.myswiper {
  height: 400px;
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 10px;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
