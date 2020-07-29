<template>
  <div class="d-flex flex-column">
    <Header />
    <Cover cDesc='“Today a reader, tomorrow a leader.” – Margaret Fuller' page-desc="Blogs" image="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
    <div class="container">
      <div class="d-flex flex-column align-items-center">
        <nuxt-link v-for="(blog, i) in posts" :key="i" :to="&quot;/blogs/&quot;+blog.slug" v-bind:class="i==0 ? '' : 'hideme mt-5'" class="px-md-5 col-lg-9 d-flex flex-column flex-md-row">
          <div v-bind:class="i%2!=0 ? 'order-lg-1' : 'order-lg-0'" class="order-0 col-lg-9">
            <img class="w-100 rounded-lg" :src="blog.image1">
          </div>
          <div :class="i%2==0 ? 'order-lg-1' : 'order-lg-0'" class="order-1 col-lg">
            <div class="w-100 h-100 d-lg-none border-0 mt-2 p-2">
              <div class="d-flex d-lg-none flex-column flex-lg-row">
                <span class="text-dark h5">
                  {{ blog.title }}
                </span>
              </div>
              <p class="d-block d-lg-none mt-1 text-secondary">
                {{ blog.author }}
              </p>
              <p style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;" class="d-lg-none mt-1 text-secondary">
                {{ blog.intro }}
              </p>
              <div class="d-block d-lg-none mt-auto d-flex flex-row flex-wrap">
                <span v-for="tags in blog.tags.split(&quot;,&quot;)" :key="tags" style="font-size: 13px;" class="btn btn-md border rounded-lg mr-2 text-muted">
                  {{ tags.trim() }}
                </span>
              </div>
            </div>
          </div>
          <div :style="i%2!=0 ? 'left: 0;' : 'right: 0;'" class="d-none d-lg-block shadow position-absolute order-1 bg-white rounded-lg p-3 m-5" style="width: 50%;">
            <div class="d-flex flex-column flex-lg-row">
              <span class="text-dark h5">
                {{ blog.title }}
              </span>
            </div>
            <p class="mt-1 text-secondary">
              {{ blog.author }}
            </p>
            <p style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;" class="mt-1 text-secondary">
              {{ blog.intro }}
            </p>
            <div class="mt-auto d-flex flex-row flex-wrap">
              <span v-for="tags in blog.tags.split(&quot;,&quot;)" :key="tags" style="font-size: 13px;" class="btn btn-md border rounded-lg mr-2 text-muted">
                {{ tags.trim() }}
              </span>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <Footer class="mt-5" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('articles', params.slug)
      .only(['title', 'image1', 'slug', 'author', 'tags', 'intro'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      posts
    }
  },
  data () {
    return {
      posts: [],
      mouse: false,
      animateSide: 0
    }
  },
  head () {
    return {
      title: 'Blogs | Resource Council',
      meta: [
        { hid: 'description', name: 'description', content: 'Blogs | Resource Council' },
        { hid: 'og:description', name: 'og:description', content: 'Blogs | Resource Council' }
      ]
    }
  },
  methods: {
    hidemeControl(){
      try{
        $('.hideme').each((i)=>{
          var docViewTop = $(window).scrollTop();
          var docViewBottom = docViewTop + $(window).height();
          var elemTop = $(this).offset().top;
          var elemBottom = elemTop + $(this).height();
          if ((elemTop <= docViewBottom) && (elemTop >= docViewTop)){
            $(this).addClass('animate__animated ' + (this.animateSide%2==0 ? 'animate__backInLeft': 'animate__backInRight'));
            $(this).removeClass('hideme');
            this.animateSide++;
          }
          console.log(this.animateSide);
        });
      }
      catch{
        $('.hideme').each(function(i){
          $(this).addClass('animate__animated animate_faster ' + (i%2==0 ? 'animate__backInRight': 'animate__backInLeft'));
          $(this).removeClass('hideme');
        });
      }
    },
    handleScroll (event) {
      this.hidemeControl();
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

</style>
