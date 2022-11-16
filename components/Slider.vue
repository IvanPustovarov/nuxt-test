<template>
    <VueSlickCarousel v-bind="settings" v-if="products.length">
        <Card v-for="product in products" :key="product.id" :product="product" />
    </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
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
          "arrows": true,
          "dots": true,
          "dotsClass": "slick-dots custom-dot-class",
          "edgeFriction": 0.35,
          "infinite": false,
          "speed": 500,
          "slidesToShow": 6,
          "slidesToScroll": 1,
          "responsive": [
            {
              "breakpoint": 2560,
              "settings": {
                "slidesToShow": 5,
              }
            },
            {
              "breakpoint": 1920,
              "settings": {
                "slidesToShow": 5,
              }
            },
            {
              "breakpoint": 1440,
              "settings": {
                "slidesToShow": 4,
              }
            },
            {
              "breakpoint": 1150,
              "settings": {
                "slidesToShow": 3,
              }
            },
            {
              "breakpoint": 910,
              "settings": {
                "slidesToShow": 2,
              }
            },
            {
              "breakpoint": 610,
              "settings": {
                "slidesToShow": 1,
              }
            },
            {
              "breakpoint": 390,
              "settings": {
                 "slidesToShow": 1,
                "dots": false,
              }
            }
          ]
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
// .container-cards {
//   margin-left: 1rem;
//   gap: 10px;
//   padding-top: 1rem;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
// }
</style>
