<template>
  <div id="app" class="mt-5">
    <h2>{{ categoryName }}</h2>
    <shop-layout>
      <template slot="product-list">
        <product-list :id-category="slug"></product-list>
      </template>
      <template slot="cart">
        <cart></cart>
      </template>
    </shop-layout>
  </div>
</template>

<script>
import ShopLayout from '@/components/ShopLayout'
import ProductList from '@/components/ProductList'
import Cart from '@/components/Cart'

export default {
  components: {
    ShopLayout,
    ProductList,
    Cart,
  },
  asyncData({ params }) {
    const { slug } = params
    const { categoryName } = params

    return {
      slug,
      categoryName,
    }
  },
}
</script>
