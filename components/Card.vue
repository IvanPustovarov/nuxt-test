<template>
<div>
   <b-card
      tag="article"
      class="mb-2 card"
    >
    <Promo :sticker="product.stickers[0].text" :type="product.stickers[0].type" />
    <b-link href="#" class="card-link">
      <div class="img-container">
        <b-card-img :src="product.image" alt="Image" class="rounded-0 img"></b-card-img>
      </div>
    </b-link>

    <b-card-text class="article">
      {{product.article}}
    </b-card-text>

    <b-link href="#" class="link">
        <b-card-text class="name">
          {{product.category}}
        </b-card-text>
    </b-link>

    <b-form-rating
      :value="product.rating"
      variant="warning"
      no-border
      inline
      readonly
      class="raiting"
    >
    <template #icon-full>
      <StarFill />
    </template>
    <template #icon-empty>
      <StarEmpty />
    </template>
    </b-form-rating>

    <div class="prices">
      <div class="old-price" v-if="product.prices.rrc.old_price">
       {{product.prices.rrc.old_price}} руб.
      </div>
      <div class="price">
        {{product.prices.rrc.price}} руб.
      </div>
    </div>

    <div class="prices-sm">
      <div class="old-price">
       {{product.prices.rrc.price}} руб.
      </div>
      <div class="price">
        <span>{{product.prices.opt.title}}:</span> {{product.prices.opt.price}} руб.
      </div>
      <div class="price" v-if="+discount > 0">
        <span>Скидка:</span> {{discount}}%
      </div>
    </div>


    <div class="button-buy">
        <b-button href="#" class="buy">
          <img src="~assets/svg/card.svg" />
        </b-button>
        <div class="like">
          <b-button href="#" class="item">
           <img src="~assets/svg/heart.svg" />
          </b-button>
           <b-button href="#" class="item">
            <img src="~assets/svg/bar.svg" />
          </b-button>
        </div>
    </div>
  </b-card>
  </div>
</template>

<script>
import { BIcon } from 'bootstrap-vue'
import StarFill from "~/assets/svg/star-fill.svg?inline";
import StarEmpty from "~/assets/svg/star-empty.svg?inline";
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
    Promo,
    StarFill,
    StarEmpty
  },
  computed: {
    discount () {
      return ((this.product.prices.rrc.price - this.product.prices.opt.price ) / this.product.prices.rrc.price * 100).toFixed()
    }
  },
  mounted () {},
  methods: {},
};
</script>

<style lang="scss" scoped>
  .card{
    max-width: 300px;
    min-height: 630px;
    margin: 0 0.5rem 0 0.5rem;
    .img-container{
      overflow: hidden;
      height: 275px;
    }
    .article{
      margin-top: 1rem;
      color: #969696;
      font-size: 16px;
    }
    .link{
      text-decoration: none;
      color: black;
    .name{
      font-size: 22px;
      line-height: 24px;
    }
    }
    .raiting{
      padding: 0;
    }
    .prices{
      margin: 15px 0 20px 0;
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
    .prices-sm{
      display: none;

    }
    .button-buy{
      display: flex;
      flex-direction: row;
      align-items: center;
      position: fixed;
      bottom: 30px;
        .buy{
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
          margin-left: 20px;
          gap: 20px;
          .item{
            background: white;
            border: none;
            padding: 0;
          }
        }
    }
  }

  @media screen and (max-width: 390px) {
  .card {
    min-height: 400px;
    .img-container {
      height: 150px;
      overflow: unset;
      display: flex;
      justify-content: center;
      .img{
        width: 120px;
      }
    }
    .article{
     text-align: center;
     margin-bottom: 0.5rem;
    }
    .link{
      text-align: center;
      .name{
      font-size: 18px;
      line-height: 24px;
      }
    }
    .raiting{
      display: none !important;
    }
    .prices{
      display: none;
    }
    .prices-sm{
      margin: 15px 0 20px 0;
      display: flex;
      flex-direction: column;
      .old-price{
        color: black;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
      }
      .price{
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        color: #000000;
        span{
          font-size: 20px;
          color: #959595;
        }
      }
    }
    .button-buy{
      display: flex;
      flex-direction: row;
      align-items: center;
      bottom: 30px;
      margin-left: 12rem;
      flex-direction: column-reverse;
        .buy{
          background: #2E3B6E;
          border-radius: 10px;
          width: 60px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .like {
          margin-bottom: 15rem;
          display: flex;
          flex-direction: column;
          margin-left: 40px;
          gap: 20px;
          .item{
            background: white;
            border: none;
            padding: 0;
          }
        }
    }
  }
}


</style>
