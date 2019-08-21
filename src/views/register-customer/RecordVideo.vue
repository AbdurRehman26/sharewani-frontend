<template>
    <b-form class="step-form">
        <div class="row">
            <div class="col-lg-12">
                <h3>Step 2: Record Video</h3>
                <p class="info">
                    <i class="icon-error_outline"></i>Please point video camera
                    on customer face and make sure their straight face is
                    completely visible in the video. Click on Record button to
                    record 10 seconds video.
                </p>
                <div
                    class="video-record"
                    :class="
                        (showVideo == true ? 'videoRecored' : '',
                        timeShow == true ? 'videoRecored' : '')
                    "
                >
                    <div class="show-record-video">
                        <video-js-record
                            @recordingStarted="onVideoRecording"
                            @recordingEnded="onRecordingEnded"
                        ></video-js-record>
                    </div>
                    <div
                        :class="showVideo == true ? 'video-recorded' : ''"
                        class="video-play"
                    >
                        <span v-if="timeShow" class="timer-countdown">{{
                            countDown
                        }}</span>
                        <i class="icon-record">
                            <i class="path1"></i>
                            <i class="path2"></i>
                            <i class="path3"></i>
                        </i>
                        <p v-if="showVideo == false">Record</p>
                        <p v-if="showVideo == true">Finish</p>
                    </div>
                </div>
                <base-button
                    btnType="submit"
                    btnVariant="primary"
                    btnLabel="CONTINUE"
                    :class="showVideo == false ? 'disable' : ''"
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
            countDown: 10,
            showVideo: false,
            timeShow: false,
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
        onVideoRecording() {
            this.timeShow = true
            this.showVideo = false
            this.countDownTimer()
        },
        onRecordingEnded() {
            this.showVideo = true
            this.timeShow = false
            this.countDown = 10
        },

        countDownTimer() {
            if (this.countDown > 0) {
                setTimeout(() => {
                    this.countDown -= 1
                    this.countDownTimer()
                }, 1000)
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
