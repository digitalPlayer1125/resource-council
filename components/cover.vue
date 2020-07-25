<template>
  <div class="animated fadeIn d-flex align-items-center justify-content-center" :style="{ 'background-image': 'linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + image + ')' }" style="background-size: cover; background-repeat: no-repeat; padding-top: 100px; padding-bottom: 100px; background-size: cover; background-position: center center; position: relative;">
    <img style="bottom: 0; position: absolute; opacity: 1; height: 130px; width: 100%;" src="/cutter.png">
    <div class="text-center p-5 shadow rounded-lg col-10 col-lg-6 col-md-4" style="z-index: 2; background: #DEF2F1;">
      <h1 class="font-weight-bold text-dark">
        {{ pageDesc }}
      </h1>
      <p class="text-dark mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    pageDesc: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
