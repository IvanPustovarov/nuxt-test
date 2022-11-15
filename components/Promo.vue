<template>
  <div class="container" :style="{background: backColor}">
    {{sticker}}
  </div>
</template>

<script>
export default {
  name: "PromoComponent",
  props: {
    sticker: String,
    type: String
  },
  computed: {
    backColor() {
      if (this.type === "promo") {
        return "#7F65B7"
      }
      if (this.type === "new") {
        return "#6776B7"
      }
    }
  },
  mounted () {},
  methods: {},
  data () {
    return {
    }
  }
};
</script>

<style lang="scss" scoped>

.container{
  padding-top: 3px;
  width: 100px;
  height: 30px;
  border-radius: 30px;
  background: #6776B7;
  position: absolute;
  top: 40px;
  left: 40px;
  color: white;
  text-align: center;
}
</style>
