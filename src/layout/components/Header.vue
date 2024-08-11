<template>
  <div>
    <header>
      <!-- 상단 영역 -->
      <div class="topmenu">
        <div class="contentbox">
          <div class="logo">
            <button v-on:click="goToPage('/main')">
              <img src="/images/logo.png" alt="로고">
            </button>
          </div>
          <div class="system">
            <button class="login">로그인</button>
            <button class="member">회원가입</button>
          </div>
        </div>
      </div>
      <nav>
        <div class="contentbox">
          <ul>
            <!-- <li><button>도서 소개</button></li>
            <li><button>자료실</button></li>
            <li><button>동영상 강의</button></li>
            <li><button>교재 샘플</button></li>
            <li><button>회사 소개</button></li> -->
            <li v-for="(item, index) in menulists" :key="index" v-on:click="goToPage(item.link)">
              <button v-html="item.menutext"></button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // menulists: ["도서 소개", "자료실", "동영상 강의", "교재 샘플", "회사 소개"],
        menulists: [
          {menutext: "도서 소개", link: "/book"},
          {menutext: "자료실", link: "/reference"},
          {menutext: "동영상 강의", link: "/movieclass"},
          {menutext: "교재 샘플", link: "/classsample"},
          {menutext: "회사 소개", link: "/company"},
        ]
      };
    },
    methods: {
      goToPage(target) {
        if (this.$router.currentRoute.path !== target) {
          this.$router.push(target);
        }
      },
    },
  };
</script>

