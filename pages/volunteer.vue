<template>
    <div class="d-flex flex-column">
        <Header />
        <Cover cDesc='Dear Volunteers, Thank you for considering getting involved with us. Please fill the following form. We welcome you to our family!' page-desc='Volunteer' image='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1113&q=80' />
        <div class="d-flex flex-column align-items-center justify-content-center" style="position: relative; overflow: hidden;">
            <img src="/polyDark.png" style="position: absolute; top: 0; right: 0; height: 350px;">
            <img src="/polyLight.png" style="position: absolute; top: 5%; right: 5%; height: 350px;">
            <img src="/polyLight.png" style="position: absolute; left: 5%; bottom: 5%; height: 350px;">
            <img src="/polyDark.png" style="position: absolute; left: 0; bottom: 0; height: 350px;">
            <div class="col-md-7 col-lg-5">
                <div class="card rounded-lg shadow border-0" style="background: #DEF2F1;">
                    <h1 class="mt-4 text-center text-dark font-weight-bold">Get Involved</h1>
                    <span class="text-center">
                        <hr style="width: 100px; background: black;" />
                    </span>
                    <div class="card-body text-dark">
                        <h5 class="mt-0 font-weight-bold text-dark">
                            Name
                        </h5>
                        <b-form-input class="border-0" v-model="name" placeholder="Enter your name"></b-form-input>
                        <h5 class="mt-4 font-weight-bold text-dark">
                            Age
                        </h5>
                        <b-form-input class="border-0" type='number' v-model="age" placeholder="Enter your age"></b-form-input>
                        <h5 class="mt-4 font-weight-bold text-dark">
                            Position
                        </h5>
                        <b-form-input class="border-0" v-model="position" placeholder="Enter your position"></b-form-input>
                        <h5 class="mt-4 font-weight-bold text-dark">
                            Reason
                        </h5>
                        <b-form-input class="border-0" v-model="reason" placeholder="Enter your reason"></b-form-input>
                        <button class="mt-5 btn btn-block text-white text-uppercase font-weight-bold" style="background: #3AAFA9;">
                            Submit
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
    data(){
        return{
            name: '',
            age: '',
            position: '',
            reason: ''
        }
    },
    head: {
        title: 'Volunteer | Resource Council',
        meta: [
            { hid: 'og:url', property: 'og:url', name: 'og:url', content: 'https://resource-council.vercel.app/volunteer' },
            { hid: 'og:title', property: 'og:title', name: 'og:title', content: 'Volunteer | Resource Council' },
            { hid: 'og:description', property: 'og:description', name: 'og:description', content: 'Dear Volunteers, Thank you for considering getting involved with us. Please fill the following form. We welcome you to our family!' },
            { hid: 'og:image', property: 'og:image', name: 'og:image', content: 'https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80' },
            { hid: 'twitter:title', property: 'twitter:title', name: 'twitter:title', content: 'Volunteer | Resource Council' },
            { hid: 'twitter:description', property: 'twitter:description', name: 'twitter:description', content: 'Dear Volunteers, Thank you for considering getting involved with us. Please fill the following form. We welcome you to our family!' },
            { hid: 'twitter:image', property: 'twitter:image', name: 'twitter:image', content: 'https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80' }
        ]
    }
}
</script>