<template>
  <div class="d-flex align-items-center justify-content-center" :style="{ 'background-image': 'linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + image + ')' }" style="background-size: cover; background-repeat: no-repeat; padding-top: 100px; padding-bottom: 100px; background-size: cover; background-position: center center; position: relative;">
    <img style="bottom: 0; position: absolute; opacity: 1; height: 130px; width: 100%;" src="/cutter.png">
    <div class="text-center p-5 shadow rounded-lg col-12 col-md-6" style="opacity: 0; height: 30vh; background: #ffffff;"></div>
    <div class="sizeBlock text-center p-4 rounded-lg bg-white" style="margin: 0; position: absolute; top: 70%; -ms-transform: translateY(-50%); transform: translateY(-50%); z-index: 2;">
      <h1 :class='animateJackInTheBox' style="opacity: 0;" class="font-weight-bold text-dark">
        {{ pageDesc }}
      </h1>
      <hr :class='animateJackInTheBox' style="opacity: 0; width: 200px; height: 1px; background: #343a40;" />
      <h5 :class='animateJackInTheBox' style="opacity: 0;" class="text-dark mt-4">
        {{
          cDesc ? cDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu"
        }}
      </h5>
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
    },
    cDesc: {
      type: String
    }
  },
  data(){
    return {
      animateJackInTheBox: ''
    }
  },
  mounted(){
    this.animateJackInTheBox= 'animate__animated animate__jackInTheBox';
  }
}
</script>

<style>

.sizeBlock{
  max-width: 700px;
}
@media screen and (max-width: 576px){
  .sizeBlock{
    max-width: 300px;
  }
}
</style>
