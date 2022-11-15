<template>
  <div class="container-cards">
    <!-- <VueSlickCarousel v-bind="settings" v-if="products.length"> -->
        <Card v-for="product in products" :key="product.id" :product="product" />
    <!-- </VueSlickCarousel> -->
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import Card from "./Card.vue";
export default {
  name: "SliderComponent",
  components: { Card, VueSlickCarousel },
  computed: {
    products () {
      return this.$store.state.products;
    },
  },
  data () {
    return {
      settings: {
          "dots": true,
          "dotsClass": "slick-dots custom-dot-class",
          "edgeFriction": 0.35,
          "infinite": false,
          "speed": 500,
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "adaptiveHeight": true
      },
    }
  },
  mounted () {
    this.fetchProducts();
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch("fetchProducts");
    },
  },
};
</script>

<style lang="scss" scoped>
.container-cards {
  margin-left: 1rem;
  gap: 10px;
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
