import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

Vue.component('Header',require('./components/share/Header.vue').default)
Vue.component('footer-page',require('./components/share/FooterPage.vue').default)
Vue.component('main-section',require('./components/base/MainSection.vue').default)
Vue.component('recommended-prod',require('./components/base/RecommendedProd.vue').default)
Vue.component('new-arrival',require('./components/base/NewArrival.vue').default)
Vue.component('best-seller',require('./components/base/BestSeller.vue').default)
Vue.component('shop-category',require('./components/base/ShopCategory.vue').default)
Vue.component('product-card',require('./components/share/ProductCard.vue').default)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
