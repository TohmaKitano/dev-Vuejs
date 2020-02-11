import Vue from 'vue'
import VueRouter from 'vue-router'

// ルート用のコンポーネントを読み込む
import Home from '@/views/Home'
import Product from '@/views/Product'

Vue.use(VueRouter);

// VueRouterインスタンスを作成
const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/product', component: Product }
  ]
})
export default router
