<template>
  <!--  <header class="header">
      <img src="https://cdn.jsdelivr.net/gh/fonghehe/picture/vue-h5-template/logo.png" /><span> {{ $t('title') }}</span>
    </header>-->
  <!--  <div class="intro-header">
      <div>{{ $t('introduction') }}</div>
      <a href="https://github.com/sunniejs/vue-h5-template.git">
        <Github />
      </a>

    </div>-->
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="image in images" :key="image">
      <img class="imgbanner" :src="image" />
    </van-swipe-item>
  </van-swipe>
  <nut-cell-group :title="$t('home.Usage')" class="supportList"> </nut-cell-group>
  <nut-grid class="gridmain" :gutter="5" :column-num="2">
    <nut-grid-item to="/startsport" :text="$t('home.sportstart')"><div :class="['grad1', locale]" /></nut-grid-item>
    <nut-grid-item to="/steps" :text="$t('home.walk')"><div :class="['grad1', locale]" /></nut-grid-item>
  </nut-grid>

  <nut-cell-group :title="$t('home.Guess')" class="supportList">
  </nut-cell-group>
  <nut-grid class="gridmain2" :center="false" :gutter="0" :column-num="1">
    <nut-grid-item to="/ques3" :text="$t('questions.question3')"></nut-grid-item>
    <nut-grid-item to="/ques4" :text="$t('questions.question4')"></nut-grid-item>
    <nut-grid-item to="/ques5" :text="$t('questions.question5')"></nut-grid-item>
  </nut-grid>
  <!--  <nut-cell-group :title="$t('home.cssMultiLanguage')" class="supportList">
      <nut-cell>
        <div :class="['btn-confirm', locale]"></div>
      </nut-cell>
    </nut-cell-group>
    <div class="btn-wrap">
      <nut-button shape="square" size="small" type="default" @click="changeLang('zh-cn')">
        {{ $t('language.zh') }}
      </nut-button>
      <nut-button shape="square" size="small" type="default" @click="changeLang('en-us')">
        {{ $t('language.en') }}
      </nut-button>
    </div>-->
  {{ getUserInfo }}
</template>

<script lang="ts" setup name="HomePage">
  import { computed } from 'vue';
import { useUserStore } from '@/store/modules/user';
import { setLang } from '@/i18n';
import { useI18n } from 'vue-i18n';
import { Github, Check } from '@nutui/icons-vue';

const { locale } = useI18n();
const images = ['https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg'];
let cellList = ['vue3', 'vite', 'vue-router', 'axios', 'Pinia', 'vue-i18n', 'postcss-px-to-viewport', 'varlet / vant / nutUI', 'eruda'];
const userStore = useUserStore();
const getUserInfo = computed(() => {
  const { name = '' } = userStore.getUserInfo || {};
  return name;
});
const changeLang1 = (type) => {
  console.log(type);
};
const changeLang = (type) => {
  setLang(type);
};
</script>
<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  font-size: 40px;

  img {
    width: 90px;
    height: 90px;
  }
}

.intro-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 16px;
}

.my-swipe .van-swipe-item {
  font-size: 20px;
  line-height: 250px;
  text-align: center;
  height: 300px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.imgbanner {
  height: 300px;
  text-align: center;
  border-radius: 15px;
}

.supportList {
  margin: 0 16px;
  display: inline;
  view {
    color: #000000;
    border-radius: 20px;
    font-weight: bold;
  }
  .nut-cell-group__title {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

.btn-wrap {
  margin: 20px;
}
.gridmain {
  border-radius: 15px;
  margin-top: 10px;
  view {
    color: #000000;
    border-radius: 20px;
    font-weight: bold;
  }
}
.gridmain2 {
  margin-top: 10px;
  margin-right: 13px;
  view {
    margin-left: 8px;
    padding-top: 3px;
    padding-bottom: 8px;
    color: #3d3d3d;
    border-radius: 20px;
    font-weight: bold;
    font-size: 18px;
    view {
      text-align: left;

    }
  }
}
.btn-confirm {
  @include main-lang-bg(302px, 82px, '/@/assets/button', 'confirm.png');
}

.btn-wrap2 {
  padding: 10px;
}
.grad1 {
  @include main-lang-bg(1.5rem, 1.5rem, '/@/assets/button', 'logo2.png');
  border: none;
}
.grad2 {
  @include main-lang-bg(302px, 82px, '/@/assets/button', 'confirm.png');
}
.grad3 {
  @include main-lang-bg(302px, 82px, '/@/assets/button', 'confirm.png');
}
</style>
