<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#">Inicio</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Categorias" right>
          <b-dropdown-item
            :to="{
              name: 'categories-slug',
              params: { slug: 1, categoryName: 'Dulce' },
            }"
            >Dulce</b-dropdown-item
          >
          <b-dropdown-item
            :to="{
              name: 'categories-slug',
              params: { slug: 2, categoryName: 'Salado' },
            }"
            >Salado</b-dropdown-item
          >
        </b-nav-item-dropdown>

        <b-nav-form>
          <b-form-input
            v-model="search"
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>
          <b-button
            variant="outline-success"
            class="my-2 my-sm-0"
            @click="searchProduct()"
            >Search</b-button
          >
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      search: '',
    }
  },
  computed: {
    ...mapState('cart', ['cart']),
    ...mapGetters('cart', ['totalCost']),
  },
  methods: {
    ...mapMutations('search', ['setSearch']),
    searchProduct() {
      this.setSearch(this.search)
    },
  },
}
</script>
