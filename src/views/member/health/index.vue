<template>


<!-- tools:{
    tell: string;
    music_control: string;
    camera: string;
    clock: string;
    second_clock: string;
    time_manager: string;
    find_phone: string;
    cash_card: string;
    card: string;
    note: string;
    health_remind: string;
    speech: string;
    car_code: string;

  }; -->


  <van-cell-group inset class="gridmain">
    <van-cell to="/music" :title="$t('tools.music_control')" is-link />
    <van-cell to="/camera" :title="$t('tools.camera')" is-link />
    <van-cell to="/clock" :title="$t('tools.clock')" is-link />
    <van-cell to="/second" :title="$t('tools.second_clock')" is-link />
    <van-cell to="/time" :title="$t('tools.time_manager')" is-link />
    <van-cell to="/find_phone" :title="$t('tools.find_phone')" is-link />
    <van-cell to="/cash" :title="$t('tools.cash_card')" is-link />
    <van-cell to="/card" :title="$t('tools.card')" is-link />
    <van-cell to="/note" :title="$t('tools.note')" is-link />
    <van-cell to="/health_remind" :title="$t('tools.health_remind')" is-link />
    <van-cell to="/car" :title="$t('tools.car_code')" is-link />
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
