import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/Home.vue'
import About from '@/views/About/About.vue'
import Case from '@/views/Case/Case.vue'
import Device from '@/views/Product/Device.vue'
import Information from '@/views/News/Information.vue'
import Dynamic from '@/views/News/Dynamic.vue'
import NewsDetail from '@/views/News/NewsDetail.vue'
import EnterpriseLogin from '@/views/Login/EnterpriseLogin.vue'
import IndividualLogin from '@/views/Login/IndividualLogin.vue'
import Tryout from '@/views/Tryout/Tryout.vue'
import Coordination from '@/views/Product/Coordination.vue'
import EntityItems from '@/views/Product/EntityItems.vue'
import EscrowFranchise from '@/views/Product/EscrowFranchise.vue'
import SalesPlatform from '@/views/Product/SalesPlatform.vue'
import EcologicalExpansion from '@/views/Product/EcologicalExpansion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
       redirect:'/'
      },
    {
      path: '/',
       name: 'home-root',
        component: Home
      },
    {
      path: '/about',
       name: 'about',
        component: About
      },
    {
      path: '/salesPlatform',
      name: 'SalesPlatform',
      component: SalesPlatform
      },
    {
      path: '/case',
      name: 'case',
      component: Case
      },
    {
      path: '/information',
      name: 'information',
      component: Information,
      meta: { title: '新闻资讯' }
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: Dynamic,
      meta: { title: '行业动态' }
    },
    {
      path: '/news/:id',
      name: 'NewsDetail',
      component: NewsDetail,
      props: true,
      meta: { title: '新闻详情' }
    },
    { path: '/ecologicalExpansion', name: 'EcologicalExpansion', component: EcologicalExpansion },
    { path: '/coordination', name: 'Coordination', component: Coordination },
    { path: '/entityItems', name: 'EntityItems', component: EntityItems },
    { path: '/escrowFranchise', name: 'EscrowFranchise', component: EscrowFranchise },
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
