<template>
  <div>
    <Subpage :pagetit="'도서 소개'">
      <div class="bookpage"> <!-- <slot>으로 대체될 영역 -->
        <!-- Vue slick carousel -->
        <VueSlickCarousel
          class="subpageslider"
          v-bind="settings"
          @init="handleInit"
          ref="carousel"
        >
          <div
            class="rollimg"
            :class="{ active: index === tabIndex }"
            v-for="(item, index) in Newbooks"
            :key="index"
            @click="Clicklink(index)"
          >
            <span class="imgbox"><img :src="item.imgurl" /></span>
            <strong v-html="item.name"></strong>
          </div>
        </VueSlickCarousel>
        <!-- // Vue slick carousel -->

        <!-- 컴포넌트 영역 -->
        <!-- <section class="bookdetail">
          <h1 class="booktitle">
            Do it! 웹 사이트 따라 만들기
            <span>HTML, CSS, 자바스크립트, JQuery, Ajax로 웹 퍼블리싱</span>
          </h1>
          <div class="book-info">
            <div class="imgview">
              <div class="imgbook">
                <img src="/images/books_image/book01.jpg" alt="">
              </div>
              <div class="bookbtns">
                <b-button variant="lightgray">
                  <i class="bi bi-search" />책 미리보기
                </b-button>
                <b-button variant="lightgray">
                  <i class="bi bi-hdd" />전자책
                </b-button>
              </div>
            </div>
            <div class="infolist">
              <ul>
                <li v-for="(item, index) in bookinfolists" :key="index">
                  <span class="label" v-html="item.label"></span>
                  <span class="infocontent" v-html="item.content"></span>
                </li>
              </ul>
            </div>
          </div>
          <div class="book-detailinfo">
            <div class="detailTap">
              <b-form-radio
                name="detail-tap"
                v-model="tapselect"
                value="introduce"
                button
                button-varaiant="detailtap"
              >
                <i class="bi bi-mic" />책 소개
              </b-form-radio>
              <b-form-radio
                name="detail-tap"
                v-model="tapselect"
                value="review"
                button
                button-varaiant="detailtap"
              >
                <i class="bi bi-chat-left-text" />출판사 리뷰
              </b-form-radio>
              <b-form-radio
                name="detail-tap"
                v-model="tapselect"
                value="order"
                button
                button-varaiant="detailtap"
              >
                <i class="bi bi-layout-text-slidebar-reverse" />목차
              </b-form-radio>
              <b-form-radio
                name="detail-tap"
                v-model="tapselect"
                value="write"
                button
                button-varaiant="detailtap"
              >
                <i class="bi bi-journal-text" />저자 소개
              </b-form-radio>
              <b-form-radio
                name="detail-tap"
                v-model="tapselect"
                value="recommendation"
                button
                button-varaiant="detailtap"
              >
                <i class="bi bi-person-check" />추천의 글
              </b-form-radio>
              <b-form-radio
                name="detail-tap"
                v-model="tapselect"
                value="reference"
                button
                button-varaiant="detailtap"
              >
                <i class="bi bi-inboxes" />자료실
              </b-form-radio>
            </div>
            <template v-if="tapselect === 'introduce'">
              <div class="detailTapCon">
                <h1 class="tapcontit">
                  <strong>"Do it! 웹사이트 따라 만들기"</strong>를 소개합니다.
                </h1>
                <p>
                  웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의
                  작업 방식 그대로<br />웹 사이트 하나 통째로 만들면 나도 어느새 웹
                  퍼블리셔!!<br />이 책 한 권이면 웹 사이트 하나가 뚝딱 완성
                </p>
              </div>
            </template>
            <template v-if="tapselect === 'review'">
              <div class="detailTapCon">
                <h1 class="tapcontit">
                  <strong>"Do it! 웹사이트 따라 만들기"</strong>출판사 리뷰 입니다.
                </h1>
                <p>
                  자신이 알고 있는 내용은 다른 사람과 나누고, 궁금한 내용은 나와 비슷한 고민을 하는 사람들과 함께 풀어보면 어떨까요? 지식을 공유하는 뿌듯함과 함께 자신의 능력이 한층 
                  더 발전되어 가는 모습을 발견할 수 있을 거예요. 또한 Do it! 스터디룸에 공부 계획 세우고 스터디 노트를 꾸준히 올리면 새 책을 받을 수 있어요. 
                  공부하고 책 받고 다시 공부하는 행복한 무한루프에 빠져 자신의 능력을 키워보세요!<br /><br />
                  - Do it! 스터디룸 카페 [cafe.naver.com/doitstudyroom → ‘웹 사이트 따라 만들기’ 메뉴]<br />
                  - Do it! 스터디룸 카페 [cafe.naver.com/doitstudyroom → ‘Do it! 공부단 지원&책 선물 받기’ 메뉴]<br />
                </p>
              </div>
            </template>
            <template v-if="tapselect === 'order'">
              <div class="detailTapCon">
                <h1 class="tapcontit">
                  <strong>"Do it! 웹사이트 따라 만들기"</strong>목차 입니다.
                </h1>
                <p>
                  첫째마당. 웹 사이트 만들기 준비하기<br><br>
                  01장 실습 전 익혀야 할 기본 지식<br>
                  01-1 우리가 알아야 할 HTML 기본 상식<br>
                  01-2 웹 페이지를 시각화하는 CSS<br>
                  01-3 동적인 웹 페이지를 만들어 주는 자바스크립트<br>
                  01-4 알아 두면 유용한 제이쿼리<br>
                  01-5 자원과 시간 낭비를 막아주는 Ajax<br><br>
                  02장 개발 환경 준비하기<br><br>
                  02-1 개발 도구 설치하기<br>
                  02-2 브라우저의 개발자 도구<br>
                  02-3 크로스 브라우징<br>
                  스페셜 01 웹 퍼블리셔에 대해서 알아보자!
                </p>
              </div>
            </template>
            <template v-if="tapselect === 'write'">
              <div class="detailTapCon">
                <h1 class="tapcontit">
                  <strong>"Do it! 웹사이트 따라 만들기"</strong>저자소개 입니다.
                </h1>
                <p>
                  <strong>김윤미</strong><br><br>
                  그녀는 일에 대한 열정이 가득하고 언제나 두려움 없이 새로운 도전을 시작하는 실무 경력 13년 차 웹 퍼블리셔이다. 국내 웹 에이전시에서 활동하며 이니스프리, 에뛰드, 엘지 하우시스 등 유명한 쇼핑몰 제작에 참여했고 그동안 작업한 사이트 대부분은 웹 어워드 코리아에서 각 분야별로 최우수상 또는 대상을 수상하였다. 또한 웹 퍼블리싱 실무 강의로 인기를 끌기도 했다. 'Do it! 웹 사이트 따라 만들기'는 그녀의 실무 경험과 강의 경험이 결합되어 나온 책이다. 그녀의 업무 방식을 화면 그대로 정리해 이 책에 빠짐없이 옮겨 담았으며 이 책을 읽는 독자들의 시간을 절약해주기 위해 전체 소스도 공개했다. 이 소스를 그대로 활용하면 독자가 필요한 웹사이트를 빠르게 만들 수 있다. 그녀는 현재 외국계 기업에서 솔루션 프로그램을 만드는 프로젝트에 참여하고 있다.
                </p>
              </div>
            </template>
            <template v-if="tapselect === 'recommendation'">
              <div class="detailTapCon">
                <h1 class="tapcontit">
                  <strong>"Do it! 웹사이트 따라 만들기"</strong>추천의 글 입니다.
                </h1>
                <p>
                  <strong>이런분께 권해 드려요</strong><br>
                  - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자<br />
                  - 웹 퍼블리셔가 되고 싶은 취업 준비생<br />
                  - 실무에 익숙하지 않은 신입 웹 퍼블리셔<br />
                  - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자<br />
                  - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자
                </p>
              </div>
            </template>
            <template v-if="tapselect === 'reference'">
              <div class="detailTapCon">
                <h1 class="tapcontit">
                  <strong>"Do it! 웹사이트 따라 만들기"</strong>자료실 입니다.
                </h1>
                <p>자료실 메뉴로 들어가시면 더 많은 내용을 확인 할 수 있습니다.</p>
              </div>
            </template>
          </div>
        </section> -->
        <component 
          :is="componentslist[tabIndex]"
          :bookUrl="Newbooks[tabIndex].imgurl"
          :bookName="Newbooks[tabIndex].name"
          :bookDec="Newbooks[tabIndex].dec"
        > <!-- 처음에는 0이었다가 사용자가 도서를 선택하면 해당 순번으로 바뀜-->
        </component>
        <!-- // 컴포넌트 영역 -->

      </div>
    </Subpage>
  </div>
</template>

<script>
  import Subpage from "@/layout/components/Subpage.vue";
  import BookDetail1 from "./BookDetail1.vue";
  import BookDetail2 from "./BookDetail2.vue";
  import BookDetail3 from "./BookDetail3.vue";
  import BookDetail4 from "./BookDetail4.vue";
  import BookDetail5 from "./BookDetail5.vue";
  import BookDetail6 from "./BookDetail6.vue";
  import BookDetail7 from "./BookDetail7.vue";
  import BookDetail8 from "./BookDetail8.vue";
  import BookDetail9 from "./BookDetail9.vue";
  import BookDetail10 from "./BookDetail10.vue";

  export default {
    components: {
      Subpage,
      BookDetail1, BookDetail2, BookDetail3, BookDetail4, BookDetail5,
      BookDetail6, BookDetail7, BookDetail8, BookDetail9, BookDetail10
    },
    mounted() {
      // this.tabIndex = Number(this.$route.query.tabId);
      if (!this.$route.query.tabId) {
        this.tabIndex = 0;
      } else {
        this.tabIndex = Number(this.$route.query.tabId);
      }
    },
    data() {
      return {
        Newbooks: [
          {
            imgurl: "/images/books_image/book01.jpg",
            name: "Do it! 웹 사이트 따라 만들기",
            dec: "HTML, CSS, 자바스크립트, jquery, Ajax로 웹 퍼블리싱"
          },
          {
            imgurl:'/images/books_image/book02.jpg',
            name:'Do it! 첫 알고리즘', 
            dec:'160가지 그림과 스토리텔링으로 이해한다!'
          },
          {
            imgurl:'/images/books_image/book03.jpg',
            name:'Do it! C# 프로그래밍 입문',
            dec:'딱 필요한 문법만 빠르게 배우고 프로젝트 실습까지!'
          },
          {
            imgurl:'/images/books_image/book04.jpg',
            name:'IT 5분 잡학사전',
            dec:'누구나 쉽게 이해할 수 있는 IT 지식이 가득한 입문서'
          },
          {
            imgurl:'/images/books_image/book05.jpg',
            name:'Do it! SQL 입문',
            dec:'비전공자도 개발자도 쉽게 배우는 기초 문법 + 실용 예제'
          },
          {
            imgurl:'/images/books_image/book06.jpg',
            name:'Do it! 클론 코딩 줌',
            dec:'노마드 코더와 만드는 화상 채팅 서비스'
          },
          {
            imgurl:'/images/books_image/book08.jpg',
            name:'된다! 엑셀 수식 & 함수',
            dec:'복잡한 수식의 원리부터 함수 설명까지!'
          },
          {
            imgurl:'/images/books_image/book09.jpg',
            name:'일 잘하는 디자이너',
            dec:'클라이언트 설득부터 타이포그래피, 색상 선택, 면접 준비까지!'
          },
          {
            imgurl:'/images/books_image/book10.jpg',
            name:'된다! 아이패드 하루 24시간',
            dec:'굿노트, 프로크리에이트, 루마퓨전 사용법과 애플 연동, 아이패드 문제 해결까지!'
          },
          {
            imgurl:'/images/books_image/book21.jpg',
            name:'블록체인 무엇인가?',
            dec:'수학, 코딩 몰라도 이해하는 비유의 힘!'
          },
        ],
        settings: {
            slidesToShow: 8,
            arrows: true,
            dots: false,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 5,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
        },
        // bookinfolists: [
        //   { label: "저자", content: "김윤미" },
        //   { label: "발행일", content: "2019-11-28" },
        //   { label: "사양", content: "312쪽 | 188*257mm" },
        //   { label: "ISBN", content: "979-11-6303-119-2 13000" },
        //   { label: "정가", content: "16,000원" },
        //   { label: "상태", content: "정상 판매중" },
        // ],
        // tapselect: "introduce",
        componentslist: [
          BookDetail1, BookDetail2, BookDetail3, BookDetail4, BookDetail5,
          BookDetail6, BookDetail7, BookDetail8, BookDetail9, BookDetail10
        ],
        tabIndex: 0,
      };
    },
    methods: {
      Clicklink(tabIndex) {
        if (!(this.$route.query.tabId == tabIndex)) {
          this.tabIndex = tabIndex;
          return this.$router.push("/book?tabId=" + tabIndex);
        }
      },
      handleInit() {
        this.$nextTick(() => {
          this.$refs.carousel.getRootNode(this.tabIndex); 
        });
      },
    },
  };
</script>

