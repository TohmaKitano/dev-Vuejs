import Vue from 'vue'
import VueRouter from 'vue-router'

// ルート用のコンポーネントを読み込む
import Home from '@/views/Home'
import Product from '@/views/Product'
import ProductList from '@/views/ProductList'

// ネスト用のコンポーネントを読み込む
import ProductHome from '@/views/Product/Home'
import ProductReview from '@/views/Product/Review'
import ProductReviewDetail from '@/views/Product/ReviewDetail'

Vue.use(VueRouter);

// VueRouterインスタンスを作成
// スラッシュから始まるパスは絶対パスになるので注意する
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
      }),
      children: [
        {
          name: 'product-home',
          path: '',
          component: ProductHome
        },
        {
          name: 'product-review',
          path: 'review',
          component: ProductReview
        },
        {
          name: 'review-detail',
          path: 'review/:rid',
          component: ProductReviewDetail
        }
      ]
    }
  ]
})
export default router
