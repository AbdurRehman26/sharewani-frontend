<template>
    <b-form class="step-form">
        <div class="row">
            <div class="col-lg-12">
                <h3>Step 2: Record Video</h3>
                <p class="info">
                    <i class="icon-error_outline"></i>Please point video camera
                    on customer face and make sure their straight face is
                    completly visible in the video. Click on Record button to
                    record 10 seconds video.
                </p>
                <div class="video-record">
                    <img
                        v-show="showVideo == false"
                        src="@/assets/images/video-cover.png"
                    />
                    <div class="show-record-video" v-show="showVideo == true">
                        <video-js-record></video-js-record>
                    </div>
                    <div @click="showVideo ^= true" class="video-play">
                        <i class="icon-record">
                            <i class="path1"></i>
                            <i class="path2"></i>
                            <i class="path3"></i>
                        </i>
                        <p v-if="showVideo == false">Record</p>
                        <p v-if="showVideo == true">Stop</p>
                    </div>
                </div>
                <base-button
                    btnType="submit"
                    btnVariant="primary"
                    btnLabel="CONTINUE"
                    @preventFunction="linking()"
                ></base-button>
            </div>
        </div>
    </b-form>
</template>
<script>
import videoJsRecord from '@/components/VideoJSRecord.vue'
export default {
    components: {
        videoJsRecord,
    },

    /*
    |--------------------------------------------------------------------------
    | Component > props
    |--------------------------------------------------------------------------
    */
    props: {
        /**
         * Value to determine the current compose mode which
         * varies between 'add' and 'edit'
         */
        mode: {
            type: String,
            default: 'add',
        },
    }, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            showVideo: false,
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
        linking() {
            if (this.$route.meta.publicRegistration === true) {
                this.$router.push('/public-registration/setup-profile')
            } else {
                this.$router.push('/register-customer/setup-profile')
            }
        },
    }, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {}, // End of Component > mounted
} // End of export default
</script>
