<template>
<div>
   <b-card
      tag="article"
      class="mb-2 card"
    >
    <Promo :sticker="product.stickers[0].text" :type="product.stickers[0].type" />
    <div class="img">
      <b-card-img :src="product.image" alt="Image" class="rounded-0"></b-card-img>
    </div>

    <b-card-text class="article">
      {{product.article}}
    </b-card-text>

    <b-card-text class="name">
      {{product.category}}
    </b-card-text>

    <b-form-rating
      :value="product.rating"
      variant="warning"
      no-border
      inline
      readonly
      class="raiting"
    >
    </b-form-rating>

    <div class="prices">
      <div class="old-price" v-if="product.prices.rrc.old_price">
       {{product.prices.rrc.old_price}} руб.
      </div>
      <div class="price">
        {{product.prices.rrc.price}} руб.
      </div>
    </div>


    <div class="button-like">
        <b-button href="#" class="button-buy">
          <BIconCart3 />
        </b-button>
        <div class="like">
          <BIconHeart width="30px" height="30px" color="#D2D2D2"/>
          <BIconReception4 width="30px" height="30px" color="#D2D2D2"/>
        </div>
    </div>
  </b-card>
  </div>
</template>

<script>
import { BIcon, BIconCart3, BIconHeart, BIconReception4 } from 'bootstrap-vue'
import Promo from './Promo.vue';
export default {
  name: "CardComponent",
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  components: {
    BIcon,
    BIconCart3,
    BIconHeart,
    BIconReception4,
    Promo
  },
  computed: {},
  mounted () {},
  methods: {},
};
</script>

<style lang="scss" scoped>
  .card{
    padding: 40px;
    max-width: 380px;
    height: 100%;
    .img{
      overflow: hidden;
      height: 350px;
    }
    .article{
      margin-top: 1rem;
      color: #969696;
      font-size: 16px;
    }
    .name{
      font-size: 22px;
      line-height: 24px;
    }
    .raiting{
      padding: 0;
    }
    .prices{
      margin: 15px 0 25px 0;
      display: flex;
      flex-direction: column;
      .old-price{
        color: #959595;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        text-decoration-line: line-through;
      }
      .price{
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #000000;
      }
    }
    .button-like{
      display: flex;
      flex-direction: row;
      gap: 30px;
      align-items: center;
        .button-buy{
          background: #2E3B6E;
          border-radius: 10px;
          width: 100px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .like {
          display: flex;
          flex-direction: row;
          gap: 30px;
        }
    }
  }


</style>
