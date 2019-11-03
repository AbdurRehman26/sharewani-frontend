<template>
    <!-- Footer section -->
    <section class="footer-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-4">
                    <div class="footer-widget about-widget">
                        <span v-html="item.leftFooter"></span>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-4">
                    <div class="footer-widget about-widget">
                        <span v-html="item.middleFooter"></span>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-4">
                    <span v-html="item.rightFooter"></span>
                </div>
            </div>
        </div>
        <div class="social-links-warp">
            <div class="container">
                <div class="social-links">
                    <a target="_blank" href="https://www.instagram.com/sharewaani/" class="instagram"
                        ><i class="fa fa-instagram"></i
                        ><span>instagram</span></a
                    >
                    <a target="_blank" href="https://www.facebook.com/Sharewaani-110850233581024/" class="facebook"
                        ><i class="fa fa-facebook"></i><span>facebook</span></a
                    >
                </div>
            </div>
        </div>
    </section>
    <!-- Footer section end -->
</template>

<script>
import GlobalSettingResource from '@/api/global-setting'

const globalSettingResource = new GlobalSettingResource()

export default {
    components: {},

    /*
    |--------------------------------------------------------------------------
    | Component > props
    |--------------------------------------------------------------------------
    */
    props: {}, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            item: {},
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
            const response = await globalSettingResource.getByKey('footer')
            this.item = response.data ? response.data.value : {}
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
