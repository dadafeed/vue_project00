<template>
  <div>
    <Subpage :pagetit="'자료실'">
      <div class="referencepage">
        <div class="subpageguide">
          도서와 관련된 추가 자료를 다운로드할 수 있습니다.
        </div>
        <div class="listwrap">
          <div class="listnum">
            <!-- 총 <strong>237</strong>건이 등록되어 있습니다. -->
            총 <strong v-html="lists.length"></strong>건이 등록되어 있습니다.
          </div>
          <div class="list">
            <!-- <div class="listitem"> -->
            <div class="listitem" v-for="(item, index) in lists" :key="index">
              <div class="listthum">
                <!-- <img src="/images/books_image/book01.jpg" alt="" /> -->
                <img :src="item.img" alt="">
              </div>
              <div class="listdetail">
                <!-- <strong>Do it! 실습 파일과 학습 파일 내려받기</strong> -->
                <strong v-html="item.title"></strong>
                <!-- <div class="listdate">등록일: 2023.04.15</div> -->
                <div class="listdate">등록일: {{ item.date }}</div>
                <!-- <div class="listdec">
                  책을 다 공부한 독자를 위한 실전 프로젝트입니다.<br /> 웹 사이트에서 자주 사용하는 '이미지 슬라이드 쇼' 프로그램을만드는 방법을 단계별로 공부할 수 있습니다.
                </div> -->
                <div class="listdec" v-html="item.dec"></div>
                <div class="itembtns">
                  <!-- <b-button variant="listdown"> -->
                  <b-button variant="listdown" :href="item.link1">
                    <i class="bi bi-folder-symlink" />소스 파일 내려받기
                  </b-button>
                  <!-- <b-button variant="listdown"> -->
                  <b-button variant="listdown" :href="item.link2">
                    <i class="bi bi-table" />정오표
                  </b-button>
                </div>
                <div class="downguide">
                  다운로드가 안 될 경우 <br/>회사에서 접속한 경우 사내 보안 등의 이유로 다운로드가 되지 않을 수 있습니다. <br/>고객센터로 연락주시면 별도로 송부학겠습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Subpage>
  </div>
</template>

<script>
  import Subpage from '@/layout/components/Subpage.vue';

  export default {
    components: { Subpage },
    data() {
      return {
        lists: [
          {
            img: "/images/books_image/book01.jpg", // 이미지 경로
            title: "Do it! 실습 파일과 학습 파일 내려받기", // 제목
            date: "2023.04.15", // 등록일
            dec: "책을 다 공부한 독자를 위한 실전 프로젝트입니다.<br /> 웹 사이트에서 자주 사용하는 '이미지 슬라이드 쇼' 프로그램을만드는 방법을 단계별로 공부할 수 있습니다.", // 설명
            link1: "", // 소스 파일 경로
            link2: "", // 정오표 경로
          },
          {
            img: "/images/books_image/book02.jpg", // 이미지 경로
            title: "Do it! 첫 알고리즘", // 제목
            date: "2021.04.15", // 등록일
            dec: "알고리즘, 정렬 알고리즘, 보안과 인공지능까지 160가지 그림을 제공합니다.", // 설명
            link1: "", // 소스 파일 경로
            link2: "", // 정오표 경로
          },
        ],
      };
    },
  };
</script>
