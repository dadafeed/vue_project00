<template>
  <div>
    <section id="wrap">
      <h1 class="blind">Vue Project00</h1>
      <!-- <section>상단 영역</section> -->
      <Header />
      <section id="container">
        <router-view /> <!-- 각 메뉴에 따라 변경할 컴포넌트 영역의 라우터 태그-->
      </section>
      <!-- <section>하단 영역</section> -->
      <Footer />
    </section>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  
  export default {
    components: {
      Header,
      Footer,
    },
  };
</script>