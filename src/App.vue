<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- App.vue -->
<template>
  <div id="app">
    <h1>Product Page</h1>
    <Product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import Product from './Product.vue';

export default {
  components: {
    Product,
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', image: '/images/product1.jpg', price: 19.99, inStock: true },
        { id: 2, name: 'Product 2', image: '/images/product2.jpg', price: 29.99, inStock: false },
        // Add more products as needed
      ],
    };
  },
};
</script>

<style>
#app {
  text-align: center;
  padding: 20px;
}
</style>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
