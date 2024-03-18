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
          name: 'tools',
          path: '/tools',
          component: () => import('@/views/member/tools/index.vue'),
          meta: {
            title: 'home.tools',

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
