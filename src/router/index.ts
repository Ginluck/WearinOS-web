import { createRouter, createWebHistory, Router } from 'vue-router';
import routes from './routes';

const router: Router = createRouter({
  history: createWebHistory('/help'),
  routes: routes,
});

router.beforeEach(async (_to, _from, next) => {
  document.body.scrollTop = 0;
  // firefox
  document.documentElement.scrollTop = 0;
  // safari
  window.pageYOffset = 0;
  next();
});

export default router;
