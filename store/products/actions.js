export async function fetchProducts({ commit }) {
  const data = await fetch('http://localhost:3004/products')
  const products = await data.json()
  commit('products/setProducts', products, { root: true })
}
