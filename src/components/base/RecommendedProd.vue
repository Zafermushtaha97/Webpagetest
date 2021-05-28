<template>
  <div>
    <div class="container">
      <h4 class="color-5">Recommended</h4>
      <div class="space-20"></div>
      <div>
        <carousel
          :perPage="6"
          :paginationEnabled="false"
          :navigationEnabled="true"
          :loop="true"
          navigationPrevLabel="ᐸ"
          navigationNextLabel="ᐳ"
        >
          <slide class="px-2" v-for="product in products" :key="product.id">
            <product-card :product="product"></product-card>
          </slide>
        </carousel>
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