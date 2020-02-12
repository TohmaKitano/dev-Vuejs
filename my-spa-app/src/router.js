import Vue from 'vue'
import VueRouter from 'vue-router'

// ルート用のコンポーネントを読み込む
import Home from '@/views/Home'
import Product from '@/views/Product'
import ProductList from '@/views/ProductList'

Vue.use(VueRouter);

// VueRouterインスタンスを作成
const router = new VueRouter({
  // mode: history, // ヒストリーモードに変更
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      name: 'product',
      path: '/product',
      component: Product
    },
    {
      path: '/product/:id',
      component: ProductList
    }
  ]
})
export default router
