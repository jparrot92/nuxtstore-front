<template>
  <div v-if="productsSearch.length">
    <paginate name="products" :list="productsSearch" :per="perPage">
      <b-card-group columns>
        <product-item
          v-for="product in paginated('products')"
          :key="product.id"
          :product="product"
          @addToCart="addProductToCart"
        ></product-item>
      </b-card-group>
    </paginate>

    <paginate-links
      for="products"
      :classes="{
        ul: 'pagination',
        li: 'page-item',
        'li > a': 'page-link',
      }"
    >
    </paginate-links>
  </div>
  <b-alert v-else show variant="info">No hay productos que mostrar</b-alert>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import ProductItem from './ProductItem'
export default {
  components: {
    ProductItem,
  },
  props: {
    idCategory: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      products: [],
      productsSearch: [],
      paginate: ['products'],
      perPage: 3,
    }
  },
  computed: {
    ...mapGetters('search', ['getSearch']),
  },
  watch: {
    getSearch(val) {
      if (val === '') {
        this.productsSearch = this.products
      } else {
        this.productsSearch = this.products.filter((o) =>
          o.name.toUpperCase().includes(val.toUpperCase())
        )
      }
    },
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    ...mapActions('products', ['fetchProducts']),
    ...mapMutations('cart', ['addProduct']),
    async fetchProducts() {
      let urlProducts = 'http://localhost:3004/products'
      if (this.idCategory !== 0) {
        urlProducts = urlProducts + '?idCategory=' + this.idCategory
      }

      const data = await fetch(urlProducts)
      this.products = await data.json()
      this.productsSearch = this.products
    },
    addProductToCart(product) {
      this.addProduct(product)
    },
  },
}
</script>
