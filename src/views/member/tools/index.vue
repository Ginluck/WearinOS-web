<template>

  <van-cell-group inset class="gridmain">
    <van-cell to="/ev_heart" :title="$t('evaluate.heart')" is-link />
    <van-cell to="/ev_bo" :title="$t('evaluate.bo')" is-link />
    <van-cell to="/ev_bs" :title="$t('evaluate.bs')" is-link />
    <van-cell to="/ev_bp" :title="$t('evaluate.bp')" is-link />
    <van-cell to="/ev_sleep" :title="$t('evaluate.sleep')" is-link />
    <van-cell to="/ev_pressure" :title="$t('evaluate.pressure')" is-link />
    <van-cell to="/ev_meto" :title="$t('evaluate.meto')" is-link />
    <van-cell to="/ev_breathe" :title="$t('evaluate.breathe')" is-link />
    <van-cell to="/ev_heart" :title="$t('evaluate.female')" is-link />
  </van-cell-group>
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

  const changeLang = (type) => {
    setLang(type);
  };
  const changeLang1 = (type) => {
    console.log(type);
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
    .nut-cell-group__title {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  .btn-wrap {
    margin: 20px;
  }
  .gridmain {
    margin-top: 30px;

    div {
      div{
        margin-top: 10px;
        margin-bottom: 10px;
        color: #101010;
        font-weight: bold;
      }

    }
  }
  .gridmain2 {

    margin-right: 13px;
    view {
      padding-top: 3px;
      padding-bottom: 8px;
      color: #101010;
      border-radius: 20px;
      font-weight: bold;
      font-size: 20px;
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
