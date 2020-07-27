<template>
  <div class="d-flex flex-column">
    <Header />
    <Cover cDesc='We are  an NGO working towards spreading awareness about the impact of resource wastage and trying to bring about a change by utilizing the existing resources to their full capacity.  Better known as “Resource Valuation and Development Council”, we focus on ZERO RESOURCE WASTAGE through “Optimal & Efficient Resource Utilization with Quality & Safety in overall societal benefit”' image='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1113&q=80' page-desc='RESOURCE COUNCIL' />
    
    <div class="py-5 d-flex flex-row flex-wrap align-items-center" style="position: relative; overflow: hidden;">
      <img src="/polyDark.png" style="position: absolute; top: 0; right: 0; height: 350px;">
      <img src="/polyLight.png" style="position: absolute; left: 0; bottom: 0; height: 350px;">
      <div class="d-flex flex-column w-100 h-100 col-md-4 align-items-center">
        <h2 class="h1 text-uppercase text-dark font-weight-bold section">
          Projects
        </h2>
        <hr class="bg--green" style="height: 0.5px; width: 190px;" />
        <nuxt-link to='/projects'>
          <button class="border-white mt-3 btn btn-lg bg--green text-white font-weight-bold rounded-0" style="width: 190px;">
            View All
          </button>
        </nuxt-link>
      </div>
      <div class="mt-5 mt-md-0 px-md-5 hideme col-md-8 d-flex flex-column flex-md-row">
        <div v-bind:class="0%2!=0 ? 'order-lg-1' : 'order-lg-0'" class="order-0 col-lg-9">
          <img class="w-100 shadow rounded-lg" src="/projects.png">
        </div>
        <div :class="0%2==0 ? 'order-lg-1' : 'order-lg-0'" class="order-1 col-lg">
          <div class="bg-white rounded-lg w-100 h-100 d-lg-none border-0 shadow-sm p-4">
            <p class="d-block d-lg-none mt-1 text-secondary">
              We notice a problem, we take it up and provide its workable solution within 80 hours.
            </p>
          </div>
        </div>
        <div :style="0%2!=0 ? 'left: 0;' : 'right: 0;'" class="d-none d-lg-block shadow position-absolute order-1 bg-white rounded-lg p-3" style="width: 50%; top: 30%; left: 40%;">
          <p class="mt-1 text-secondary">
            We notice a problem, we take it up and provide its workable solution within 80 hours.
          </p>
        </div>
      </div>
    </div>

    <div class="py-5 d-flex flex-row flex-wrap align-items-center" style="position: relative; overflow: hidden;">
      <img src="/polyLight.png" style="position: absolute; top: 0; right: 0; height: 350px;">
      <img src="/polyDark.png" style="position: absolute; left: 0; bottom: 0; height: 350px;">
      <div class="order-1 order-md-0 mt-5 mt-md-0 px-md-5 hideme col-md-8 d-flex flex-column flex-md-row">
        <div v-bind:class="0%2!=0 ? 'order-lg-1' : 'order-lg-0'" class="order-0 col-lg-9">
          <img class="w-100 shadow rounded-lg" src="/talks.png">
        </div>
        <div :class="0%2==0 ? 'order-lg-1' : 'order-lg-0'" class="order-1 col-lg">
          <div class="bg-white w-100 h-100 d-lg-none border-0 shadow-sm p-4">
            <p class="d-block d-lg-none mt-1 text-secondary">
              We bring to you people who ave contributed tremendously towards better resource utilization and management. Know more about Lives that Have Made a Difference.
            </p>
          </div>
        </div>
        <div :style="0%2!=0 ? 'left: 0;' : 'right: 0;'" class="d-none d-lg-block shadow position-absolute order-1 bg-white rounded-lg p-3 m-5" style="width: 50%;">
          <p class="mt-1 text-secondary">
            We bring to you people who ave contributed tremendously towards better resource utilization and management. Know more about Lives that Have Made a Difference.
          </p>
        </div>
      </div>
      <div class="order-0 order-md-1 d-flex flex-column w-100 h-100 col-md-4 align-items-center">
        <h2 class="h1 text-center text-uppercase text-dark font-weight-bold section">
          Resource Talks
        </h2>
        <hr class="bg--green" style="height: 0.5px; width: 190px;" />
        <nuxt-link to='/resource-talks'>
          <button class="border-white mt-3 btn btn-lg bg--green text-white font-weight-bold rounded-0" style="width: 190px;">
            View All
          </button>
        </nuxt-link>
      </div>
    </div>

    <div class="py-5 d-flex flex-row flex-wrap align-items-center" style="position: relative; overflow: hidden;">
      <img src="/polyDark.png" style="position: absolute; top: 0; right: 0; height: 350px;">
      <img src="/polyLight.png" style="position: absolute; left: 0; bottom: 0; height: 350px;">
      <div class="d-flex flex-column w-100 h-100 col-md-4 align-items-center">
        <h2 class="h1 text-uppercase text-dark font-weight-bold section">
          Volunteer
        </h2>
        <hr class="bg--green" style="height: 0.5px; width: 190px;" />
        <nuxt-link to='/volunteer'>
          <button class="border-white mt-3 btn btn-lg bg--green text-white font-weight-bold rounded-0" style="width: 190px;">
            Know More
          </button>
        </nuxt-link>
      </div>
      <div class="mt-5 mt-md-0 px-md-5 hideme col-md-8 d-flex flex-column flex-md-row">
        <div v-bind:class="0%2!=0 ? 'order-lg-1' : 'order-lg-0'" class="order-0 col-lg-9">
          <img class="w-100 shadow rounded-lg" src="/volunteer.png">
        </div>
        <div :class="0%2==0 ? 'order-lg-1' : 'order-lg-0'" class="order-1 col-lg">
          <div class="bg-white w-100 h-100 d-lg-none border-0 shadow-sm p-4">
            <p class="d-block d-lg-none mt-1 text-secondary">
              Want to make society a better place to live? Help us in saving the most valuable resources that we have! Every step towards Zero Resource Wastage counts.
            </p>
          </div>
        </div>
        <div :style="0%2!=0 ? 'left: 0;' : 'right: 0;'" class="d-none d-lg-block shadow position-absolute order-1 bg-white rounded-lg p-3 m-5" style="width: 50%;">
          <p class="mt-1 text-secondary">
            Want to make society a better place to live? Help us in saving the most valuable resources that we have! Every step towards Zero Resource Wastage counts.
          </p>
        </div>
      </div>
    </div>
    
    <div class="py-5 d-flex flex-row flex-wrap align-items-center" style="position: relative; overflow: hidden;">
      <img src="/polyLight.png" style="position: absolute; top: 0; right: 0; height: 350px;">
      <img src="/polyDark.png" style="position: absolute; left: 0; bottom: 0; height: 350px;">
      <div class="order-1 order-md-0 mt-5 mt-md-0 px-md-5 hideme col-md-8 d-flex flex-column flex-md-row">
        <div v-bind:class="0%2!=0 ? 'order-lg-1' : 'order-lg-0'" class="order-0 col-lg-9">
          <img class="w-100 shadow rounded-lg" src="/donate.png">
        </div>
        <div :class="0%2==0 ? 'order-lg-1' : 'order-lg-0'" class="order-1 col-lg">
          <div class="bg-white w-100 h-100 d-lg-none border-0 shadow-sm p-4">
            <p class="d-block d-lg-none mt-1 text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            </p>
          </div>
        </div>
        <div :style="0%2!=0 ? 'left: 0;' : 'right: 0;'" class="d-none d-lg-block shadow position-absolute order-1 bg-white rounded-lg p-3 m-5" style="width: 50%;">
          <p class="mt-1 text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          </p>
        </div>
      </div>
      <div class="order-0 order-md-1 d-flex flex-column w-100 h-100 col-md-4 align-items-center">
        <h2 class="h1 text-uppercase text-dark font-weight-bold section">
          Donate
        </h2>
        <hr class="bg--green" style="height: 0.5px; width: 190px;" />
        <nuxt-link to='/help-us'>
          <button class="border-white mt-3 btn btn-lg bg--green text-white font-weight-bold rounded-0" style="width: 190px;">
            Donate
          </button>
        </nuxt-link>
      </div>
    </div>

    <Footer class="mt-5" />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Resource Council | Tagline Here'
  },
  methods: {
    handleScroll (event) {
      $('.hideme').each(function(i){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(this).offset().top;
        var elemBottom = elemTop + $(this).height();
        if ((elemTop <= docViewBottom) && (elemTop >= docViewTop)){
          $(this).addClass('animated fadeIn');
          $(this).removeClass('hideme');
        }
      });
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll);
    let recaptchaScript = document.createElement('script');
    recaptchaScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js');
    document.head.appendChild(recaptchaScript);
  },
  destroyed(){
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
  .hideme{
    opacity: 0;
  }
</style>