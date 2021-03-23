<template>
  <b-card
    :img-src="product.picture"
    :img-alt="product.name"
    img-top
    style="max-width: 30rem"
    class="mb-2"
  >
    <n-link
      :to="{
        name: 'products-permalink',
        params: { permalink: product.id },
      }"
    >
      {{ product.name }}
    </n-link>
    <b-button block variant="warning" @click="$emit('addToCart', product)">
      Añadir al carrito
    </b-button>
  </b-card>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>
