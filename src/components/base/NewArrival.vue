<template>
  <div>
    <div class="container">
      <h4 class="color-5">New Arrival</h4>
      <div class="space-20"></div>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-6">
          <img
            src="@/assets/img/bannser5.png"
            class="w-100 h-100 rounded"
            alt=""
          />
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <div>
            <carousel
              :perPage="3"
              :paginationEnabled="false"
              :navigationEnabled="true"
              :loop="true"
              navigationPrevLabel="ᐸ"
              navigationNextLabel="ᐳ"
            >
              <slide class="px-2" v-for="product in products" :key="product.id">
                <div class="bg-white">
                  <div class="d-flex flex-row-reverse" style="line-height: 1">
                    <div class="">
                      <p class="text-white bg-color-2 br-l p-2">New</p>
                    </div>
                  </div>
                  <div class="" style="width: 150px">
                    <img src="@/assets/img/hp.jpg" class="w-100" alt="" />
                  </div>
                  <div class="space-15"></div>
                  <div style="line-height: 1">
                    <p class="color-6" style="font-size: 14px">
                      category | subcategory
                    </p>
                    <p>{{ product.content }}</p>
                    <div class="">
                      <p class="color-5" style="font-weight: 700">
                        {{ product.price }} JD
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
              </slide>
            </carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [
        {
          content:
            "Pavilion 15-AU118TX (Y4F81PA) Laptop (Core i7 7th gen/8 GB/1 TB/Windows 10/4",
          discount: 2000,
          price: 1000,
        },
        {
          content:
            "Pavilion 15-AU118TX (Y4F81PA) Laptop (Core i7 7th gen/8 GB/1 TB/Windows 10/4",
          discount: 2000,
          price: 1000,
        },
        {
          content:
            "Pavilion 15-AU118TX (Y4F81PA) Laptop (Core i7 7th gen/8 GB/1 TB/Windows 10/4",
          discount: 2000,
          price: 1000,
        },
        {
          content:
            "Pavilion 15-AU118TX (Y4F81PA) Laptop (Core i7 7th gen/8 GB/1 TB/Windows 10/4",
          discount: 2000,
          price: 1000,
        },
        {
          content:
            "Pavilion 15-AU118TX (Y4F81PA) Laptop (Core i7 7th gen/8 GB/1 TB/Windows 10/4",
          discount: 2000,
          price: 1000,
        },
        {
          content:
            "Pavilion 15-AU118TX (Y4F81PA) Laptop (Core i7 7th gen/8 GB/1 TB/Windows 10/4",
          discount: 2000,
          price: 1000,
        },
        {
          content:
            "Pavilion 15-AU118TX (Y4F81PA) Laptop (Core i7 7th gen/8 GB/1 TB/Windows 10/4",
          discount: 2000,
          price: 1000,
        },
        {
          content:
            "Pavilion 15-AU118TX (Y4F81PA) Laptop (Core i7 7th gen/8 GB/1 TB/Windows 10/4",
          discount: 2000,
          price: 1000,
        },
        {
          content:
            "Pavilion 15-AU118TX (Y4F81PA) Laptop (Core i7 7th gen/8 GB/1 TB/Windows 10/4",
          discount: 2000,
          price: 1000,
        },
        {
          content:
            "Pavilion 15-AU118TX (Y4F81PA) Laptop (Core i7 7th gen/8 GB/1 TB/Windows 10/4",
          discount: 2000,
          price: 1000,
        },
      ],
    };
  },
};
</script>
<style>
.VueCarousel-navigation-button[data-v-453ad8cd] {
  color: #ff7900;
}
</style>