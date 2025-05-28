import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SobreView from '../views/SobreView.vue'
import contatoView from '@/views/contatoView.vue'
import projetosView from '@/views/projetosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: SobreView,
    },
        {
      path: '/contato',
      name: 'contato',
      component: contatoView,
    },
        {
      path: '/projetos',
      name: 'projetos',
      component: projetosView,
    },
  ],
})

export default router
