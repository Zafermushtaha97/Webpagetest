<template>
  <div class="mainsection">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-6">
          <div class="mainslider px-3">
            <carousel
              :perPage="1"
              :paginationEnabled="true"
              :navigationEnabled="true"
              :loop="true"
              navigationPrevLabel="ᐸ"
              navigationNextLabel="ᐳ"
              paginationSize="8"
              paginationColor="#888888"
              paginationActiveColor="#FF7900"
            >
              <slide class="px-2">
                <div class="bg-transparent rounded container mx-5 pt-5 pb-3">
                  <div class="space-30"></div>
                  <div class="space-15"></div>
                  <div
                    class="color-1 text-uppercase mt-5"
                    style="line-height: 1"
                  >
                    <p style="font-size: 36px">SAMSUNG</p>
                    <p style="font-size: 36px">
                      NOTE 20
                      <span style="font-weight: 700; font-size: 36px"
                        >ULTRA</span
                      >
                    </p>
                  </div>
                  <div class="" style="width: max-content">
                    <p
                      class="rounded-pill bg-color-2 text-white px-3 py-1"
                      style="font-weight: 700"
                    >
                      5GB - 200GB
                    </p>
                  </div>
                </div>
              </slide>
              <slide class="px-2">
                <div class="bg-transparent rounded container mx-5 pt-5 pb-3">
                  <div class="space-30"></div>
                  <div class="space-15"></div>
                  <div
                    class="color-1 text-uppercase mt-5"
                    style="line-height: 1"
                  >
                    <p style="font-size: 36px">SAMSUNG</p>
                    <p style="font-size: 36px">
                      NOTE 20
                      <span style="font-weight: 700; font-size: 36px"
                        >ULTRA</span
                      >
                    </p>
                  </div>
                  <div class="" style="width: max-content">
                    <p
                      class="rounded-pill bg-color-2 text-white px-3 py-1"
                      style="font-weight: 700"
                    >
                      5GB - 200GB
                    </p>
                  </div>
                </div>
              </slide>
              <slide class="px-2">
                <div class="bg-transparent rounded container mx-5 pt-5 pb-3">
                  <div class="space-30"></div>
                  <div class="space-15"></div>
                  <div
                    class="color-1 text-uppercase mt-5"
                    style="line-height: 1"
                  >
                    <p style="font-size: 36px">SAMSUNG</p>
                    <p style="font-size: 36px">
                      NOTE 20
                      <span style="font-weight: 700; font-size: 36px"
                        >ULTRA</span
                      >
                    </p>
                  </div>
                  <div class="" style="width: max-content">
                    <p
                      class="rounded-pill bg-color-2 text-white px-3 py-1"
                      style="font-weight: 700"
                    >
                      5GB - 200GB
                    </p>
                  </div>
                </div>
              </slide>
              <slide class="px-2">
                <div class="bg-transparent rounded container mx-5 pt-5 pb-3">
                  <div class="space-30"></div>
                  <div class="space-15"></div>
                  <div
                    class="color-1 text-uppercase mt-5"
                    style="line-height: 1"
                  >
                    <p style="font-size: 36px">SAMSUNG</p>
                    <p style="font-size: 36px">
                      NOTE 20
                      <span style="font-weight: 700; font-size: 36px"
                        >ULTRA</span
                      >
                    </p>
                  </div>
                  <div class="" style="width: max-content">
                    <p
                      class="rounded-pill bg-color-2 text-white px-3 py-1"
                      style="font-weight: 700"
                    >
                      5GB - 200GB
                    </p>
                  </div>
                </div>
              </slide>
              <slide class="px-2">
                <div class="bg-transparent rounded container mx-5 pt-5 pb-3">
                  <div class="space-30"></div>
                  <div class="space-15"></div>
                  <div
                    class="color-1 text-uppercase mt-5"
                    style="line-height: 1"
                  >
                    <p style="font-size: 36px">SAMSUNG</p>
                    <p style="font-size: 36px">
                      NOTE 20
                      <span style="font-weight: 700; font-size: 36px"
                        >ULTRA</span
                      >
                    </p>
                  </div>
                  <div class="" style="width: max-content">
                    <p
                      class="rounded-pill bg-color-2 text-white px-3 py-1"
                      style="font-weight: 700"
                    >
                      5GB - 200GB
                    </p>
                  </div>
                </div>
              </slide>
            </carousel>
          </div>

          <div class="space-15"></div>
          <div>
            <img src="@/assets/img/Group 117.png" class="w-100 h-100" alt="" />
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <div>
            <img src="@/assets/img/Group 83.png" class="w-100 h-100" alt="" />
          </div>

          <div>
            <div class="space-15"></div>
            <h4 class="text-uppercase">today's pick</h4>
            <div>
              <carousel
                :perPage="6"
                :paginationEnabled="false"
                :navigationEnabled="true"
                :loop="true"
                navigationPrevLabel="ᐸ"
                navigationNextLabel="ᐳ"
              >
                <slide
                  class="px-2"
                  v-for="product in products"
                  :key="product.id"
                >
                  <product-card :product="product"></product-card>
                </slide>
              </carousel>
            </div>
          </div>
        </div>
      </div>
      <div class="space-15"></div>
      <div class="row">
        <img src="@/assets/img/Group 94.png" class="w-100 h-100" alt="" />
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
          content: "Pavilion 15-AU118TX (Y4F81PA) Laptop (Co",
          discount: 2000,
          price: 1000,
        },
        {
          content: "Pavilion 15-AU118TX (Y4F81PA) Laptop (C",
          discount: 2000,
          price: 1000,
        },
        {
          content: "Pavilion 15-AU118TX (Y4F81PA) Laptop (C",
          discount: 2000,
          price: 1000,
        },
        {
          content: "Pavilion 15-AU118TX (Y4F81PA) Laptop ",
          discount: 2000,
          price: 1000,
        },
        {
          content: "Pavilion 15-AU118TX (Y4F81PA) Laptop ",
          discount: 2000,
          price: 1000,
        },
        {
          content: "Pavilion 15-AU118TX (Y4F81PA) Laptop ",
          discount: 2000,
          price: 1000,
        },
        {
          content: "Pavilion 15-AU118TX (Y4F81PA) Laptop (Core i7 ",
          discount: 2000,
          price: 1000,
        },
        {
          content: "Pavilion 15-AU118TX (Y4F81PA) Laptop (Core i7",
          discount: 2000,
          price: 1000,
        },
        {
          content: "Pavilion 15-AU118TX (Y4F81PA) Laptop (Co",
          discount: 2000,
          price: 1000,
        },
        {
          content: "Pavilion 15-AU118TX (Y4F81PA) Laptop (Co",
          discount: 2000,
          price: 1000,
        },
      ],
    };
  },
};
</script>
<style >
.br-r {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.br-l {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.line-throught {
  text-decoration: line-through;
}
.mainsection {
  /* background: rgb(249, 249, 249); */
}
</style>