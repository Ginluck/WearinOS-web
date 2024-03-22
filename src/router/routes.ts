export const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/basic/index.vue'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: 'tabbar.home',
          keepAlive: true,
        },
      },
      {
        path: 'health',
        component: () => import('@/views/home/health/index.vue'),
        meta: {
          title: 'tabbar.health',
          keepAlive: true,
        },
      },
      {
        path: 'person',
        component: () => import('@/views/home/person/index.vue'),
        meta: {
          title: 'tabbar.person',
          keepAlive: true,
        },
      },
      {
        path: 'list',
        component: () => import('@/views/list/index.vue'),
        meta: {
          title: 'tabbar.list',
          keepAlive: true,
        },
      },
      {
        path: 'member',
        component: () => import('@/views/member/index.vue'),
        meta: {
          title: 'tabbar.member',
          keepAlive: true,
        },
      },
      {
        path: 'demo',
        component: () => import('@/views/demo/index.vue'),
        meta: {
          title: 'tabbar.demo',
          keepAlive: true,
        },
      },
      {
        name: 'listDetails',
        path: '/details',
        component: () => import('@/views/list/details/index.vue'),
        meta: {
          title: 'list.details',
          border: false,
        },
      },
      {
        name: 'heart_rate',
        path: '/heart_rate',
        component: () => import('@/views/home/health/item/heart_rate/index.vue'),
        meta: {
          title: 'home.heart',
          border: false,
        },
      },
      {
        name: 'sleep',
        path: '/sleep',
        component: () => import('@/views/home/health/item/sleep/index.vue'),
        meta: {
          title: 'home.sleep',
          border: false,
        },
      },
      {
        name: 'blood_oxgeon',
        path: '/blood_oxgeon',
        component: () => import('@/views/home/health/item/blood_oxgeon/index.vue'),
        meta: {
          title: 'home.blood_oxgeon',
          border: false,
        },
      },
      {
        name: 'blood_pressure',
        path: '/blood_pressure',
        component: () => import('@/views/home/health/item/blood_pressure/index.vue'),
        meta: {
          title: 'home.blood_pressure',
          border: false,
        },
      },
      {
        name: 'blood_sugar',
        path: '/blood_sugar',
        component: () => import('@/views/home/health/item/blood_sugar/index.vue'),
        meta: {
          title: 'home.blood_sugar',
          border: false,
        },
      },
      {
        name: 'breathe',
        path: '/breathe',
        component: () => import('@/views/home/health/item/breathe/index.vue'),
        meta: {
          title: 'home.breathe',
          border: false,
        },
      },
      {
        name: 'meto',
        path: '/meto',
        component: () => import('@/views/home/health/item/meto/index.vue'),
        meta: {
          title: 'home.meto',
          border: false,
        },
      },
      {
        name: 'info',
        path: '/info',
        component: () => import('@/views/home/person/item/info/index.vue'),
        meta: {
          title: 'home.info',
          border: false,
        },
      },
      {
        name: 'account',
        path: '/account',
        component: () => import('@/views/home/person/item/account/index.vue'),
        meta: {
          title: 'home.account',
          border: false,
        },
      },
      {
        name: 'feedback',
        path: '/feedback',
        component: () => import('@/views/home/person/item/feedback/index.vue'),
        meta: {
          title: 'home.feedback',
          border: false,
        },
      },
      {
        name: 'pressure',
        path: '/pressure',
        component: () => import('@/views/home/health/item/pressure/index.vue'),
        meta: {
          title: 'home.pressure',
          border: false,
        },
      },
      {
        name: 'quick_start',
        path: '/quick_start',
        component: () => import('@/views/member/quick_start/index.vue'),
        meta: {
          title: 'home.pressure',
          border: false,
        },
      },
      {

        name: 'appearance',
        path: '/appearance',
        component: () => import('@/views/member/quick_start/appearance/index.vue'),
        meta: {
          title: 'home.pressure',
          border: false,
        },
      },
      {
        name: 'startsport',
        path: '/startsport',
        component: () => import('@/views/list/startsport/index.vue'),
        meta: {
          title: 'home.startsport',

          border: false,
        },
      },
      {
        name: 'sport',
        path: '/sport',
        component: () => import('@/views/member/sport/index.vue'),
        meta: {
          title: 'home.sport',

          border: false,
        },
      },
      {

        name: 'wear',
        path: '/wear',
        component: () => import('@/views/member/quick_start/wear/index.vue'),
        meta: {
          title: 'home.pressure',

          border: false,
        },
      },
      {
        name: 'steps',
        path: '/steps',
        component: () => import('@/views/list/steps/index.vue'),
        meta: {
          title: 'home.steps',

          border: false,
        },
      },
      {

        name: 'electricity',
        path: '/electricity',
        component: () => import('@/views/member/quick_start/electricity/index.vue'),
        meta: {
          title: 'home.pressure',
          border: false,
        },
      },
      {
        name: 'sos',
        path: '/sos',
        component: () => import('@/views/member/quick_start/sos/index.vue'),
        meta: {
          title: 'home.pressure',
          border: false,
        },
      },
      {
        name: 'keypad',
        path: '/keypad',
        component: () => import('@/views/member/quick_start/keypad/index.vue'),
        meta: {
          title: 'home.pressure',
          border: false,
        },
      },
      {
        name: 'tools',
        path: '/tools',
        component: () => import('@/views/member/tools/index.vue'),
        meta: {
          title: 'home.tools',

          border: false,
        }
      },
      {
          name: 'healthy',
          path: '/healthy',
          component: () => import('@/views/member/health/index.vue'),
          meta: {
            title: 'home.tools',

            border: false,
          },
        },



        {
          name: 'ev_heart',
          path: '/ev_heart',
          component: () => import('@/views/member/tools/item/heart/index.vue'),
          meta: {
            title: 'home.ev_heart',

            border: false,
          },
        },
        {
          name: 'ev_bo',
          path: '/ev_bo',
          component: () => import('@/views/member/tools/item/bo/index.vue'),
          meta: {
            title: 'home.ev_bo',

            border: false,
          },
        },
        {
          name: 'ev_bp',
          path: '/ev_bp',
          component: () => import('@/views/member/tools/item/bp/index.vue'),
          meta: {
            title: 'home.ev_bp',

            border: false,
          },
        },
        {
          name: 'ev_bs',
          path: '/ev_bs',
          component: () => import('@/views/member/tools/item/bs/index.vue'),
          meta: {
            title: 'home.ev_bs',

            border: false,
          },
        },
        {
          name: 'ev_sleep',
          path: '/ev_sleep',
          component: () => import('@/views/member/tools/item/sleep/index.vue'),
          meta: {
            title: 'home.ev_sleep',

            border: false,
          },
        },
        {
          name: 'ev_breathe',
          path: '/ev_breathe',
          component: () => import('@/views/member/tools/item/breathe/index.vue'),
          meta: {
            title: 'home.ev_breathe',

            border: false,
          },
        },
        {
          name: 'ev_meto',
          path: '/ev_meto',
          component: () => import('@/views/member/tools/item/meto/index.vue'),
          meta: {
            title: 'home.ev_meto',

            border: false,
          },
        },
        {
          name: 'ev_pressure',
          path: '/ev_pressure',
          component: () => import('@/views/member/tools/item/pressure/index.vue'),
          meta: {
            title: 'home.ev_pressure',

            border: false,
          },
        },
        {
          name: 'camera',
          path: '/camera',
          component: () => import('@/views/member/health/item/camera/index.vue'),
          meta: {
            title: 'home.camera',

            border: false,
          },
        },
        {
          name: 'card',
          path: '/card',
          component: () => import('@/views/member/health/item/card/index.vue'),
          meta: {
            title: 'home.card',

            border: false,
          },
        },
        {
          name: 'car',
          path: '/car',
          component: () => import('@/views/member/health/item/car/index.vue'),
          meta: {
            title: 'home.car',

            border: false,
          },
        },
        {
          name: 'cash',
          path: '/cash',
          component: () => import('@/views/member/health/item/cash/index.vue'),
          meta: {
            title: 'home.cash',

            border: false,
          },
        },
        {
          name: 'clock',
          path: '/clock',
          component: () => import('@/views/member/health/item/clock/index.vue'),
          meta: {
            title: 'home.clock',

            border: false,
          },
        },
        {
          name: 'find_phone',
          path: '/find_phone',
          component: () => import('@/views/member/health/item/find_phone/index.vue'),
          meta: {
            title: 'home.find_phone',

            border: false,
          },
        },
        {
          name: 'health_remind',
          path: '/health_remind',
          component: () => import('@/views/member/health/item/health_remind/index.vue'),
          meta: {
            title: 'home.health_remind',

            border: false,
          },
        },
        {
          name: 'music',
          path: '/music',
          component: () => import('@/views/member/health/item/music/index.vue'),
          meta: {
            title: 'home.music',

            border: false,
          },
        },
        {
          name: 'note',
          path: '/note',
          component: () => import('@/views/member/health/item/note/index.vue'),
          meta: {
            title: 'home.note',

            border: false,
          },
        },
        {
          name: 'second',
          path: '/second',
          component: () => import('@/views/member/health/item/second/index.vue'),
          meta: {
            title: 'home.second',

            border: false,
          },
        },
        {
          name: 'speech',
          path: '/speech',
          component: () => import('@/views/member/health/item/speech/index.vue'),
          meta: {
            title: 'home.speech',

            border: false,
          },
        },
        {
          name: 'tell',
          path: '/tell',
          component: () => import('@/views/member/health/item/tell/index.vue'),
          meta: {
            title: 'home.tell',

            border: false,
          },
        },
        {
          name: 'time',
          path: '/time',
          component: () => import('@/views/member/health/item/time/index.vue'),
          meta: {
            title: 'home.time',

            border: false,
          },
        },

        {
          name: 'others',
          path: '/others',
          component: () => import('@/views/member/others/index.vue'),
          meta: {
            title: 'home.others',

            border: false,
          },
        },
        {
          name: 'info',
          path: '/info',
          component: () => import('@/views/member/others/info/index.vue'),
          meta: {
            title: 'home.info',

            border: false,
          },
        },
        {
          name: 'lan',
          path: '/lan',
          component: () => import('@/views/member/others/lan/index.vue'),
          meta: {
            title: 'home.lan',

            border: false,
          },
        },
        {
          name: 'light',
          path: '/light',
          component: () => import('@/views/member/others/light/index.vue'),
          meta: {
            title: 'home.light',

            border: false,
          },
        },
        {
          name: 'lock',
          path: '/lock',
          component: () => import('@/views/member/others/lock/index.vue'),
          meta: {
            title: 'home.lock',

            border: false,
          },
        },
        {
          name: 'ota',
          path: '/ota',
          component: () => import('@/views/member/others/ota/index.vue'),
          meta: {
            title: 'home.ota',

            border: false,
          },
        },
        {
          name: 'reset',
          path: '/reset',
          component: () => import('@/views/member/others/reset/index.vue'),
          meta: {
            title: 'home.reset',

            border: false,
          },
        },
        {
          name: 'ques1',
          path: '/ques1',
          component: () => import('@/views/home/ques/ques1/index.vue'),
          meta: {
            title: 'home.ques1',

            border: false,
          },
        },
        {
          name: 'ques2',
          path: '/ques2',
          component: () => import('@/views/home/ques/ques2/index.vue'),
          meta: {
            title: 'home.ques2',

            border: false,
          },
        },
        {
          name: 'ques3',
          path: '/ques3',
          component: () => import('@/views/list/ques/ques3/index.vue'),
          meta: {
            title: 'home.ques3',

            border: false,
          },
        },
        {
          name: 'ques4',
          path: '/ques4',
          component: () => import('@/views/list/ques/ques4/index.vue'),
          meta: {
            title: 'home.ques4',

            border: false,
          },
        },
        {
          name: 'ques5',
          path: '/ques5',
          component: () => import('@/views/list/ques/ques5/index.vue'),
          meta: {
            title: 'home.ques5',

            border: false,
          },
        },
        {
          name: 'ques6',
          path: '/ques6',
          component: () => import('@/views/home/ques/ques6/index.vue'),
          meta: {
            title: 'home.ques6',

            border: false,
          },
        },
        {
          name: 'ques7',
          path: '/ques7',
          component: () => import('@/views/member/ques/ques7/index.vue'),
          meta: {
            title: 'home.ques7',

            border: false,
          },
        },
        {
          name: 'ques8',
          path: '/ques8',
          component: () => import('@/views/member/ques/ques8/index.vue'),
          meta: {
            title: 'home.ques8',

            border: false,
          },
        },
        {
          name: 'ques9',
          path: '/ques9',
          component: () => import('@/views/member/ques/ques9/index.vue'),
          meta: {
            title: 'home.ques9',

            border: false,
          },
        },
        {
          name: 'ques10',
          path: '/ques10',
          component: () => import('@/views/member/ques/ques10/index.vue'),
          meta: {
            title: 'home.ques10',

            border: false,
          },
        },
        
    ],
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  // 匹配不到重定向会主页
  {
    // 找不到路由重定向到404页面
    path: '/:pathMatch(.*)',
    redirect: '/Home',
  },
];

export default routes;
