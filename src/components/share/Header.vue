<template>
  <div class="bg-white mt-2">
    <div class="container">
      <div class="d-flex justify-content-between pointer font-sm">
        <div class="d-flex">
          <div style="width: 18px; height: 18px">
            <img src="@/assets/icon/call.svg" alt="" class="w-100 h-100" />
          </div>
          <p class="mx-1">|</p>
          <p class="br-left">+962 6266 5555</p>
        </div>
        <div class="d-flex">
          <div class="d-flex mx-3">
            <div style="width: 18px; height: 18px">
              <img src="@/assets/icon/pin.svg" alt="" class="w-100 h-100" />
            </div>
            <p class="mx-1">|</p>
            <p class="br-left">store locator</p>
          </div>
          <div class="d-flex">
            <div style="width: 18px; height: 18px">
              <img src="@/assets/icon/chat.svg" alt="" class="w-100 h-100" />
            </div>
            <p class="mx-1">|</p>
            <p class="br-left">arabic</p>
          </div>
        </div>
      </div>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-color-1 rounded-pill p-3"
      >
        <a class="navbar-brand" href="#">
          <img src="@/assets/icon/switch.jpg" alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <div class="navbar-nav mx-auto">
            <div class="form-group col-form-label selectspec pt-1">
              <select
                class="form-control col-sm-12 color-1"
                v-model="category"
                style="color: #ff7900"
              >
                <option
                  class="bg-white color-1"
                  selected
                  value=""
                  style="color: #ff7900"
                >
                  All categories
                </option>
                <option
                  class="bg-white text-color-8"
                  v-for="category in categories"
                  :key="category.id"
                  :value="category.name"
                  style="color: #ff7900"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
            <div id="custom-search-input" class="rounded-pill">
              <div class="input-group col-md-12 rounded-pill">
                <input
                  type="text"
                  class="form-control input-lg rounded-pill br-t-l br-t-r"
                  placeholder="Enter email address"
                />
                <span class="input-group-btn mx-0 p-1">
                  <div
                    class="rounded-pill bg-color-1 d-flex justify-content-center align-items-center"
                    style="width: 36px; height: 36px"
                  >
                    <img
                      src="@/assets/icon/search.svg"
                      class="w-50 h-50"
                      alt=""
                    />
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div class="navbar-text ">
            <div class="d-flex">
              <div class="d-flex align-items-center pointer">
                <div
                  style="width: 34px; height: 34px; transform: rotate(270deg)"
                >
                  <img
                    src="@/assets/icon/sale.svg"
                    alt=""
                    class="w-100 h-100"
                  />
                </div>
                <div class="ml-4" style="line-height: 1.3">
                  <span class="text-uppercase sm-size">top</span>
                  <p class="text-white">Deals</p>
                </div>
              </div>
              <div class="d-flex align-items-center mx-2 pointer">
                <div style="width: 34px; height: 34px">
                  <img
                    src="@/assets/icon/shopping-cart.svg"
                    alt=""
                    class="w-100 h-100"
                  />
                </div>
                <div class="ml-4" style="line-height: 1.3">
                  <span class="text-uppercase sm-size">add to</span>
                  <p class="text-white">cart</p>
                </div>
              </div>
              <div class="d-flex align-items-center pointer">
                <div style="width: 34px; height: 34px">
                  <img
                    src="@/assets/icon/user.svg"
                    alt=""
                    class="w-100 h-100"
                  />
                </div>
                <div class="ml-4" style="line-height: 1.3">
                  <span class="text-uppercase sm-size">welcone</span>
                  <p class="text-white">Login/Register</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="row my-3">
        <div class="col-10 d-flex mx-auto categories" style="font-size: 12px">
          <div
            class="text-uppercase"
            v-for="category in categories"
            :key="category.id"
          >
            <p class="mx-1 pointer" style="font-weight: 700">{{ category.name }}</p>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
    <div class="border-top border-bottom" style="background: #f9f9f9">
      <div class="container d-flex justify-content-around py-2" style="height: 8vh;">
        <div class="pointer">
          <p>lowest price guaranted</p>
        </div>
        <div class="pointer">
          <p>free delivery over 50 job</p>
        </div>
        <div class="pointer">
          <p>in-store after sales service</p>
        </div>
        <div class="pointer">
          <p>installment program</p>
        </div>
        <div class="pointer">
          <p>price match policy</p>
        </div>
        <div class="pointer">
          <p>pickup from store</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories: [
        { name: "all brand", id: 1 },
        { name: "home & kitchen", id: 2 },
        { name: "entertrainment", id: 3 },
        { name: "beauty", id: 4 },
        { name: "technolody", id: 5 },
        { name: "mobile", id: 6 },
        { name: "apple", id: 7 },
        { name: "gamin", id: 8 },
        { name: "sport and fitness", id: 9 },
        { name: "lifestyle", id: 10 },
        { name: "out door", id: 11 },
        { name: "fire place", id: 12 },
      ],
      category: "",
    };
  },
};
</script>
<style>
.br-left {
  border: 2px solid #dee2e6!;
}
.sm-size {
  font-size: 10px !important;
}
.categories div:first-child {
  color: #ff7900;
}
.categories div p:hover{
color: #ff7900;
}
.br-t-l {
  border-top-left-radius: 0px !important;
}
.br-t-r {
  border-bottom-left-radius: 0px !important;
}
select option {
  color: #ff7900;
}
</style>