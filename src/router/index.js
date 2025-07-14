import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/Home.vue'
import About from '@/views/About/About.vue'
import Case from '@/views/Case/Case.vue'
import News from '@/views/News/News.vue'
import System from '@/views/Product/System.vue'
import Device from '@/views/Product/Device.vue'
import Community from '@/views/Product/Community.vue'
import Information from '@/views/News/Information.vue'
import Dynamic from '@/views/News/Dynamic.vue'
import EnterpriseLogin from '@/views/Login/EnterpriseLogin.vue'
import IndividualLogin from '@/views/Login/IndividualLogin.vue'
import Sojourning from '@/views/Product/Sojourning.vue'
import Apartment from '@/views/Product/Apartment.vue'
import Tryout from '@/views/Tryout/Tryout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/home', redirect:'/' },
    { path: '/', name: 'home-root', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/community', name: 'community', component: Community },
    { path: '/case', name: 'case', component: Case },
    { path: '/news', name: 'news', component: News },
    { path: '/dynamic', name: 'dynamic', component: Dynamic },
    { path: '/information', name: 'information', component: Information },
    { path: '/apartment', name: 'Apartment', component: Apartment },
    { path: '/sojourning', name: 'Sojourning', component: Sojourning },
    { path: '/system', name: 'system', component: System },
    { path: '/device', name: 'device', component: Device },
    { path: '/enterpriseLogin', name: 'enterpriseLogin', component: EnterpriseLogin },
    { path: '/individualLogin', name: 'individualLogin', component: IndividualLogin },
    { path: '/tryout', name: 'tryout', component: Tryout },

  ],




   scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
})

export default router
