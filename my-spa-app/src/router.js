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
      path: '/product',
      component: ProductList
    },
    {
      // name: 'product',
      path: '/product/:id(\\d+)',
      component: Product,
      // パラメータをpropsとしてコンポーネントに渡す
      // props: true
      // => [Vue warn]: Invalid prop: type check failed for prop "id". Expected Number with value 1, got String with value "1".
      props: route => ({
        id: Number(route.params.id)
      })
    }
  ]
})
export default router
