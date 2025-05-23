import { createWebHistory, createRouter } from 'vue-router'

import PostsList from '../PostsList.vue';
import Login from '../Login.vue';

const routes = [
  { path: '/', component: PostsList },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const userData = JSON.parse(localStorage.getItem('userData'));

  if (to.path !== '/login' && !userData) {
    next('/login');
  }
  else if (to.path === '/login' && userData && userData.id) {
    next('/');
  }
  else {
    next();
  }
});

export default router;