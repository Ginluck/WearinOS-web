<template>

  <div class="gridmain3">
      <div class="Title">{{ $t('member.quick_start.keypad') }}</div>

      <div class="paratext">{{ $t('member.quick_start.keypad1') }}</div>
    <div class="Title_minor">{{ $t('member.quick_start.keypad2') }}</div>

    <div :class="['big-confirm2', locale]"></div>
    <table class="paratext_bot_table">
      <tbody>
      <tr>
        <td colspan="1" rowspan="1" width="190" style="text-align: center;">
          <span style="font-size: 14px;">{{ $t('member.quick_start.keypad3') }}</span>
        </td>
        <td colspan="1" rowspan="1" width="571" style="text-align: center;">
          <span style="font-size: 14px;">{{ $t('member.quick_start.keypad4') }}</span>
        </td>
      </tr>
      <tr>
        <td colspan="1" rowspan="1" width="auto" style="text-align: center;">
          <span style="color: rgb(89, 89, 89); font-size: 13px;">{{ $t('member.quick_start.keypad5') }}</span>
        </td>
        <td colspan="1" rowspan="1" width="auto" style="text-align: center;"><span style="color: rgb(89, 89, 89); font-size: 13px;">{{ $t('member.quick_start.keypad6') }}</span>
        </td>
      </tr>
      <tr>
        <td colspan="1" rowspan="1" width="auto" style="text-align: center;"><span style="color: rgb(89, 89, 89); font-size: 13px;">{{ $t('member.quick_start.keypad7') }}</span>
        </td>
        <td colspan="1" rowspan="1" width="auto" style="text-align: center;"><span style="color: rgb(89, 89, 89); font-size: 13px;">{{ $t('member.quick_start.keypad8') }}</span></td>
      </tr>
      <tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;"><span style="color: rgb(89, 89, 89); font-size: 13px;">{{ $t('member.quick_start.keypad9') }}</span></td>
        <td colspan="1" rowspan="1" width="auto" style="text-align: center;"><span style="color: rgb(89, 89, 89); font-size: 13px;">{{ $t('member.quick_start.keypad10') }}</span></td>
      </tr>
      <tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;"><span style="color: rgb(89, 89, 89); font-size: 13px;">{{ $t('member.quick_start.keypad11') }}</span>
      </td><td colspan="1" rowspan="1" width="auto" style="text-align: center;"><span style="color: rgb(89, 89, 89); font-size: 13px;">{{ $t('member.quick_start.keypad12') }}</span></td>
      </tr>
      <tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;"><span style="color: rgb(89, 89, 89); font-size: 13px;">{{ $t('member.quick_start.keypad13') }}</span></td>
        <td colspan="1" rowspan="1" width="auto" style="text-align: center;"><span style="color: rgb(89, 89, 89); font-size: 13px;">{{ $t('member.quick_start.keypad14') }}</span></td>
      </tr>
      <tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;"><span style="color: rgb(89, 89, 89); font-size: 13px;">{{ $t('member.quick_start.keypad15') }}</span></td>
        <td colspan="1" rowspan="1" width="auto" style="text-align: center;"><span style="color: rgb(89, 89, 89); font-size: 13px;">{{ $t('member.quick_start.keypad16') }}</span></td>
      </tr>
      </tbody>
    </table>
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
  .big-confirm2 {

    @include main-lang-bg(100%, 290px, '/@/assets/button', 'rict_wear.jpg');
  }
</style>
