<template>


<div class="gridmain">
    <div class="Title">{{ $t('others.info') }}</div>
    <div class="paratext_bot"></div>

    <div class="Title_minor">{{ $t('others.info_mac_title') }}</div>
    <li class="paratext">{{ $t('others.info_mac_desc') }}</li>
    <div class="paratext_bot"></div>

    <div class="Title_minor">{{ $t('others.info_ble_title') }}</div>
    <li class="paratext">{{ $t('others.info_ble_desc1') }}</li>
    <li class="paratext">{{ $t('others.info_ble_desc2') }}</li>
    <div class="paratext_bot"></div>

    <div class="Title_minor">{{ $t('others.info_version_title') }}</div>
    <li class="paratext">{{ $t('others.info_version_desc1') }}</li>
    <li class="paratext">{{ $t('others.info_version_desc2') }}</li>
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

  .gridmain {
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
  .paratext2 {
    color: #a19f9f;
    font-size: 26px;
    padding-right: 26px;
    padding-left: 26px;
    padding-top: 20px;
  }
  .paratext_bot {
    padding-bottom: 40px;
  }

</style>
