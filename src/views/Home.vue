<template>
  <div class="home">
    <Header></Header>
    <div class="space-30"></div>
    <main-section></main-section>
    <div class="space-30"></div>
     <div class="space-30"></div>
    <recommended-prod></recommended-prod>
    <div class="space-30"></div>
    <new-arrival></new-arrival>
    <div class="space-30"></div>
    <best-seller></best-seller>
    <div class="space-30"></div>
    <shop-category></shop-category>
    <div class="space-30"></div>
    <footer-page></footer-page>
    <div class="icontop pointer">
      <div style="width:44px;height:44px" @click="scrollTop">
          <img src="@/assets/icon/topicon.svg" alt="">
      </div>
    </div>
      <div class="msgtop pointer">
      <div style="width:44px;height:44px">
          <img src="@/assets/icon/msgicon.svg" alt="">
      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  },
  methods:{
    scrollTop() {
      window.scrollTo(0,0);
    },
  }
}
</script>
<style>
  .home{
      background: rgb(249 249 249 / 25%);
  }
  .icontop{
    position: fixed;
    top: 70%;
    right: 2%;
  }
  .msgtop{
     position: fixed;
    top: 30%;
    right: 2%;
  }
</style>