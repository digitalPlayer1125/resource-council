<template>
  <div class="d-flex flex-column">
    <Cover page-desc="Gallery" image="https://images.unsplash.com/photo-1534531688091-a458257992cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
    <div class="d-flex flex-row flex-wrap">
      <div v-for="(image, i) in images" :key="i" class="mt-5 col-sm-6 col-lg-4 px-5">
        <div class="animated fadeIn w-100 h-100 rounded-lg shadow" :style="{ 'background-image': 'linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + image.value + ')' }" style="background-size: cover; background-repeat: no-repeat; padding-top: 100px; padding-bottom: 100px; background-size: cover; background-position: center center;">
          <span>&nbsp;</span>
          <h4 style="position: absolute; bottom: 0;" class="ml-2 text-white mt-auto">
            {{ image.text }}
          </h4>
        </div>
      </div>
    </div>
    <Footer class="mt-5" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      images: [
        {
          value: 'https://images.unsplash.com/photo-1546872863-e85d5c3e5159?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          text: 'One line description here'
        },
        {
          value: 'https://images.unsplash.com/photo-1546872863-e85d5c3e5159?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          text: 'One line description here'
        },
        {
          value: 'https://images.unsplash.com/photo-1546872863-e85d5c3e5159?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          text: 'One line description here'
        },
        {
          value: 'https://images.unsplash.com/photo-1546872863-e85d5c3e5159?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          text: 'One line description here'
        },
        {
          value: 'https://images.unsplash.com/photo-1546872863-e85d5c3e5159?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          text: 'One line description here'
        },
        {
          value: 'https://images.unsplash.com/photo-1546872863-e85d5c3e5159?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=800',
          text: 'One line description here'
        }
      ]
    }
  },
  head: {
    title: 'Gallery | Resource Council'
  }
}
</script>
<style>

</style>
