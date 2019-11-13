<template>
  <section class="container">
    <div v-if="product">
      <h1 class="title">API Proxy Example</h1>
      <h2 class="subtitle">{{ product.name }}</h2>
      <img
        :src="product.image.mediaDetails.sizes[4].sourceUrl"
        :width="product.image.mediaDetails.sizes[4].width"
        :height="product.image.mediaDetails.sizes[4].height"
      />
      <div>{{ product.description }}</div>
      <strong>{{product.sku }} {{ id }}</strong>

      <h2>Related</h2>
      <ul class="related">
        <li v-for="p in product.related.nodes" :key="p.id">
            <img :src="p.image.mediaDetails.sizes[4].sourceUrl" width="250" height="250" />
        </li>
      </ul>

    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  async asyncData({ store, $axios }) {
    const getProductbyId = await $axios.$get(
      `${process.env.API_URL}/api/getproduct?id=13747`
    );

    const getProductbyId2 = await $axios.$get(
      `${process.env.API_URL}/api/getproduct?id=51401`
    );

    const getProductbyId3 = await $axios.$get(
      `${process.env.API_URL}/api/getproduct?id=8128`
    );

        const getProductbyId4 = await $axios.$get(
      `${process.env.API_URL}/api/getproduct?id=12477`
    );

            const getProductbyId5 = await $axios.$get(
      `${process.env.API_URL}/api/getproduct?id=8124`
    );
    return {
      product: getProductbyId.productBy,
      product2: getProductbyId2.productBy,
      product3: getProductbyId3.productBy,
      product4: getProductbyId4.productBy,
      product5: getProductbyId5.productBy,
      id: 13747
    };
  },
  components: {
    Logo
  }
};
</script>

<style>
.related li {
  list-style-type: none;
  display: inline-block;
}
.container {
  min-height: 100vh;
  display: flex;
  max-width: 900px;
  margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
