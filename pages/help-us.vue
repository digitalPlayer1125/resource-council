<template>
  <div class="d-flex flex-column">
    <Header />
    <Cover cDesc="“Do good. And good will come to you.” ~ Aman Mehndiratta" page-desc="Help Us" image="/help-us-cover.jpg" />
    <div class="mt-5 d-flex flex-column align-items-center justify-content-center" style="position: relative; overflow: hidden;">
      <img src="/polyDark.png" style="position: absolute; top: 0; right: 0; height: 350px;">
      <img src="/polyLight.png" style="position: absolute; top: 5%; right: 5%; height: 350px;">
      <img src="/polyLight.png" style="position: absolute; left: 5%; bottom: 5%; height: 350px;">
      <img src="/polyDark.png" style="position: absolute; left: 0; bottom: 0; height: 350px;">
      <div class="col-md-7 col-lg-5">
        <div class="card rounded-lg shadow border-0" style="background: #DEF2F1;">
          <h1 class="mt-4 text-center text-dark font-weight-bold">
            Donate Now
          </h1>
          <span class="text-center">
            <hr style="width: 100px; background: black;" />
          </span>
          <div class="card-body text-dark text-center">
            <div class="d-flex flex-column flex-md-row align-items-center justify-content-around">
              <h2 class="font-weight-bold">
                I am giving
              </h2>
              <span style="font-size: 50px;" class="mt-3 mt-md-0 d-flex">
                ₹<b-form-input class="ml-2 border-0" style="font-size: 40px; width: 200px;" v-model="amount" placeholder="₹1000"></b-form-input>
              </span>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-center flex-row flex-wrap">
            <button @click='amount=1000' :class='amount==1000 ? "btn-secondary" : "btn-light"' class="m-3 btn btn-lg"> ₹1000 </button>
            <button @click='amount=3000' :class='amount==3000 ? "btn-secondary" : "btn-light"' class="m-3 btn btn-lg"> ₹3000 </button>
            <button @click='amount=5000' :class='amount==5000 ? "btn-secondary" : "btn-light"' class="m-3 btn btn-lg"> ₹5000 </button>
            <button @click='amount=10000' :class='amount==10000 ? "btn-secondary" : "btn-light"' class="m-3 btn btn-lg"> ₹10000 </button>
          </div>
          <div>
            <button class="mt-5 btn btn-block text-white text-uppercase font-weight-bold" style="background: #3AAFA9; font-size: 40px;">
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer class="mt-5" />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Help Us | Resource Council',
    meta: [
      { hid: 'description', property: 'description', name: 'description', content: "Don't turn away, Give today!" },
      { hid: 'og:url', property: 'og:url', name: 'og:url', content: 'https://resource-council.vercel.app/help-us' },
      { hid: 'og:title', property: 'og:title', name: 'og:title', content: 'Help Us | Resource Council' },
      { hid: 'og:description', property: 'og:description', name: 'og:description', content: "Don't turn away, Give today!" },
      { hid: 'og:image', property: 'og:image', name: 'og:image', content: 'https://resource-council.vercel.app/help-us-cover.jpg' },
      { hid: 'twitter:title', property: 'twitter:title', name: 'twitter:title', content: 'Help Us | Resource Council' },
      { hid: 'twitter:description', property: 'twitter:description', name: 'twitter:description', content: "Don't turn away, Give today!" },
      { hid: 'twitter:image', property: 'twitter:image', name: 'twitter:image', content: 'https://resource-council.vercel.app/help-us-cover.jpg' }
    ]
  },
  data(){
    return{
      amount: 10000
    }
  }
}
</script>