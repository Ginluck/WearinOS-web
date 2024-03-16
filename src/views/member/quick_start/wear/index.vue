<template>

  <div class="gridmain3">
    <div class="Title">{{ $t('member.quick_start.wear') }}</div>
    <li class="paratext">{{ $t('member.quick_start.wear0') }}</li>
    <li class="paratext">{{ $t('member.quick_start.wear1') }}</li>
    <li class="paratext">{{ $t('member.quick_start.wear2') }}</li>
    <div class="paratext">{{ $t('member.quick_start.wear3') }}</div>
    <div class="Title_minor">{{ $t('member.quick_start.wear4') }}</div>
    <div :class="['big-confirm2', locale]"></div>

    <div class="paratext_bot"></div>

  </div>

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

  .gridmain3 {
    background: white;
    border-radius: 20px;
    margin-right: 30px;
    margin-left: 30px;
    margin-top: 40px;
  }

  .Title {
    color: #1b1b1b;
    font-size: 40px;
    font-weight: bold;
    padding-right: 26px;
    padding-left: 26px;
    padding-top: 40px;
  }
  .Title_minor {
    color: #1b1b1b;
    font-size: 30px;
    font-weight: bold;
    padding-right: 26px;
    padding-left: 26px;
    padding-top: 25px;
  }
  .paratext {
    color: #727272;
    font-size: 26px;
    padding-right: 26px;
    padding-left: 26px;
    padding-top: 20px;
  }
  .paratext_bot {
    padding-bottom: 40px;
  }
  .paratext_bot_table {
    width: auto;
    padding-bottom: 40px;
    border-collapse: collapse;
    margin-right: 30px;
    margin-left: 30px;
    margin-top: 20px;
    td{
      min-width: 150px;
      height: 50px;
      border: 1px solid #ccc;
    }
  }
  .big-confirm1 {

    @include main-lang-bg(100%, 260px, '/@/assets/button', 'fang_wear.jpg');
  }
  .big-confirm2 {

    @include main-lang-bg(100%, 290px, '/@/assets/button', 'rict_wear.jpg');
  }
</style>
