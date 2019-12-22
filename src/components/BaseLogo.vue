<template id="">
    <div class="logo">
        <router-link :class="anchorClass" :to="anchorLink">
            <a href="./index.html" class="site-logo">
                <img class="main-logo" style="height: 150px;width: 393px;"
                    :src="logoPath"
                    alt=""
                />
            </a>
        </router-link>
    </div>
</template>
<script>
import GlobalSettingResource from '@/api/global-setting'

const settingResource = new GlobalSettingResource()

export default {
    /*
        |--------------------------------------------------------------------------
        | Component > props
        |--------------------------------------------------------------------------
        */
    props: {
        anchorClass: {
            type: String,
            default: '',
        },
        anchorLink: {
            type: String,
            default: '/',
        },
    }, // End of Component > props

    /*
        |--------------------------------------------------------------------------
        | Component > data
        |--------------------------------------------------------------------------
        */
    data() {
        return {
            logoPath: '/sharewaani-logo.png',
        }
    }, // End of Component > data

    /*
        |--------------------------------------------------------------------------
        | Component > computed
        |--------------------------------------------------------------------------
        */
    computed: {}, // End of Component > computed

    /*
        |--------------------------------------------------------------------------
        | Component > methods
        |--------------------------------------------------------------------------
        */
    methods: {
        async getItem() {
            const response = await settingResource.getByKey('main_logo')
            // this.logoPath = response.data.value ? response.data.value.thumbnail_url : this.logoPath;
        },
    }, // End of Component > methods

    /*
        |--------------------------------------------------------------------------
        | Component > mounted
        |--------------------------------------------------------------------------
        */
    mounted() {
        this.getItem()
    }, // End of Component > mounted
} // End of export default
</script>


<style>
    

/* ----------- Non-Retina Screens ----------- */
@media screen 
  and (min-device-width: 800px) { 

.site-logo img{

    margin-left: -20px; 


}


}



/* ----------- Retina Screens ----------- */
@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (min-device-width: 800px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (min-resolution: 192dpi) { 

.site-logo img{

    margin-left: -20px; 


}


}

    

/* ----------- Retina Screens ----------- */
@media screen 
  and (min-device-width: 1300px) 
  { 

.site-logo img{

    margin-left: -100px; 


}


}



</style>