<template>
  <div>
    <div class="container">
      <div class="row my-3">
        <div class="col-12 col-md-6 col-lg-3">
          <p class="color-1">
            <img src="@/assets/img/switch.jpg" alt="" />
          </p>
          <div class="space-15"></div>
          <div style="line-height: 0.8">
            <p class="color-7 text-uppercase pointer" style="font-weight: 700">
              FIND US
            </p>
            <div class="d-flex justify-content-between">
              <div
                class="d-flex justify-content-center align-items-center rounded-circle bg-color-7 pointer"
                style="width: 40px; height: 40px"
              >
                <img
                  src="@/assets/icon/socialicon/facebook.svg"
                  class="w-50 h-50"
                  alt=""
                />
              </div>
              <div
                class="d-flex justify-content-center align-items-center rounded-circle bg-color-7 pointer"
                style="width: 40px; height: 40px"
              >
                <img
                  src="@/assets/icon/socialicon/twitter.svg"
                  class="w-50 h-50"
                  alt=""
                />
              </div>
              <div
                class="d-flex justify-content-center align-items-center rounded-circle bg-color-7 pointer"
                style="width: 40px; height: 40px"
              >
                <img
                  src="@/assets/icon/socialicon/youtube.svg"
                  class="w-50 h-50"
                  alt=""
                />
              </div>
              <div
                class="d-flex justify-content-center align-items-center rounded-circle bg-color-7 pointer"
                style="width: 40px; height: 40px"
              >
                <img
                  src="@/assets/icon/socialicon/linkedin.svg"
                  class="w-50 h-50"
                  alt=""
                />
              </div>
              <div
                class="d-flex justify-content-center align-items-center rounded-circle bg-color-7 pointer"
                style="width: 40px; height: 40px"
              >
                <img
                  src="@/assets/icon/socialicon/instagram.svg"
                  class="w-50 h-50"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="space-15"></div>
          <p class="color-7 text-uppercase pointer" style="font-weight: 700">
            need help ?
          </p>
          <div class="color-7" style="line-height: 0.7">
            <p class="pointer">+96262662626</p>
            <p class="pointer">05:00am to 09:00 pm</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-2">
          <p class="color-7 pointer" style="font-weight: 700">ACCOUNT</p>
          <div>
            <ul
              class="list-group color-7 account-list"
              style="list-style-type: none; line-height: 2"
            >
              <li class="pointer">My Profile</li>
              <li class="pointer">My Order History</li>
              <li class="pointer"> My Wish List</li>
              <li class="pointer">My Comparisons</li>
              <li class="pointer">My Order Status</li>
              <li class="pointer">Promos</li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-2">
          <p class="color-7 pointer" style="font-weight: 700">HIGHLIGHTS</p>
          <div>
            <ul
              class="list-group color-7 hidhlightlist"
              style="list-style-type: none; line-height: 2"
            >
              <li class="pointer">Flash Deals</li>
              <li class="pointer">Join Our Team</li>
              <li class="pointer">Maintenance & Repair</li>
              <li class="pointer">Store Locator</li>
              <li class="pointer">Faq</li>
              <li class="pointer">Blog</li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-5" style="    cursor: context-menu;">
          <div class="d-flex align-items-baseline w-50">
            <div style="width: 46px; height: 46px">
              <img
                src="@/assets/icon/envelope.svg"
                class="w-100 h-100"
                alt=""
              />
            </div>
            <div
              class="color-7 text-uppercase"
              style="font-weight: 700; margin-left: 1em"
            >
              <h5>subscribe to our services</h5>
            </div>
          </div>
          <div class="w-75">
            <p class="color-7">
              <small
                >All the latest & best offers delivered right to your inbox.
                Subscribe now!</small
              >
            </p>
          </div>
          <div>
            <div id="custom-search-input" class="rounded-pill">
              <div class="input-group col-md-12 rounded-pill">
                <input
                  type="text"
                  class="form-control input-lg rounded-pill"
                  placeholder="Enter email address"
                />
                <span class="input-group-btn">
                  <button
                    class="btn btn-info btn-lg rounded-pill bg-color-1"
                    type="button"
                  >
                    Subscribe
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div class="space-15"></div>
          <div class="d-flex">
            <div style="width: 40px">
              <img
                src="@/assets/icon/payment/visa-light-large.svg"
                class="w-100 h-100"
                alt=""
              />
            </div>
            <div style="width: 40px" class="mx-3">
              <img
                src="@/assets/icon/payment/mastercard-light-large.svg"
                class="w-100 h-100"
                alt=""
              />
            </div>
            <div style="width: 40px">
              <img
                src="@/assets/icon/payment/paypal-light-large.svg"
                class="w-100 h-100"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="background: #888888" class="pointer">
      <div
        class="container text-white d-flex justify-content-between align-items-center"
        style="font-size: 12px; height: 6em"
      >
        <div>
          COPYRIGHT © 2020 Switch Electronics & Appliances. ALL RIGHTS RESERVED
        </div>
        <div class="d-flex footer-title pointer">
          <p class="mx-1">About us .</p>
          <p class="mx-1">Terms of Usage .</p>
          <p class="mx-1">Privacy Policy .</p>
          <p class="mx-1c">Return Policy .</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.footer-title p {
  cursor: pointer;
}
.footer-title p:hover {
  text-decoration: underline;
  color: #fff;
}
.account-list li,
.hidhlightlist li {
  cursor: pointer;
}
.account-list li:hover,
.hidhlightlist li:hover {
  font-weight: 700;
}
#custom-search-input {
  padding: 3px;
}
#custom-search-input .input-group {
  background: #f0f0f0;
}
#custom-search-input input {
  border: 0;
  box-shadow: none;
  background: #f0f0f0;
  color: #888888;
}

#custom-search-input button {
  background: none;
  box-shadow: none;
  border: 0;
  color: #fff;
  padding: 8px 24px 8px 24px;
}

#custom-search-input button:hover {
  border: 0;
  box-shadow: none;
  border-left: solid 1px #ccc;
}

#custom-search-input .glyphicon-search {
  font-size: 23px;
}
</style>