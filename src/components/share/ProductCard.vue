<template>
  <div>
    <div class="bg-white rounded">
      <div class="d-flex justify-content-between" style="line-height: 1">
        <div class="">
          <p class="text-white bg-color-1 br-r p-2">Best Seller</p>
        </div>
        <div class="">
          <p class="text-white bg-color-2 br-l p-2">New</p>
        </div>
      </div>
      <div class="" style="width: 150px">
        <img src="@/assets/img/hp.jpg" class="w-100" alt="" />
      </div>
      <div class="space-15"></div>
      <div style="line-height: 1">
        <p class="color-6" style="font-size: 14px">category | subcategory</p>
        <p>{{ product.content }}</p>
        <p class="line-throught color-3">{{ product.discount }}JD</p>
        <div class="d-flex justify-content-between">
          <p class="color-5" style="font-weight: 700">{{ product.price }} JD</p>
          <p class="bg-color-4 br-l px-2 text-white font-weight-bold py-1">
            50% off
          </p>
        </div>
      </div>
    </div>
    <div
      class="color-6 bg-color-8 rounded py-2 px-3 d-flex justify-content-around"
    >
      <div style="width: 20px; height: 20px">
        <img
          src="@/assets/icon/products/shopping-cart.svg"
          class="w-100 h-100"
          alt=""
        />
      </div>
      Add to cart
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
};
</script>