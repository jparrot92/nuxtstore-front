<template>
  <div>
    <h1>{{ product[0].name }}</h1>
    <p>{{ product[0].price }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $commerce }) {
    const { permalink } = params

    const urlProduct = 'http://localhost:3004/products?id=' + permalink
    const data = await fetch(urlProduct)
    const product = await data.json()

    return {
      product,
    }
  },
}
</script>
