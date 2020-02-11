import Vue from 'vue'
import VueRouter from 'vue-router'

// ルート用のコンポーネントを読み込む
import Home from '@/views/Home'
import Product from '@/views/Product'

Vue.use(VueRouter);

// VueRouterインスタンスを作成
const router = new VueRouter({
  mode: history, // ヒストリーモードに変更
  routes: [
    { path: '/', component: Home },
    { path: '/product', component: Product }
  ]
})
export default router
