<template>
  <div class="d-flex align-items-center justify-content-center" :style="{ 'background-image': 'linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + image + ')' }" style="background-size: cover; background-repeat: no-repeat; padding-top: 100px; padding-bottom: 100px; background-size: cover; background-position: center center;">
    <h1 class="text-white">
      {{ pageDesc }}
    </h1>
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
