<template>
    <div class="upload-video-modal">
        <b-modal
            id="document-preview-popup"
            title="Document Preview"
            size="md"
            ok-only
            okTitle="Close"
            okVariant="primary"
        >
            <h5>Recorded Video</h5>

            <div class="document-preview-section video-modal">
                <div class="preview-video">
                    <video
                        v-if="play == true"
                        autoPlay
                        controls
                        playsinline
                        poster="@/assets/images/dummy/cover.png"
                    >
                        <source
                            src="@/assets/images/dummy/video/cover-video.mp4"
                            type="video/mp4"
                        />

                        <source
                            src="@/assets/images/dummy/video/cover-video.webm"
                            type="video/webm"
                        />

                        Your browser does not support HTML5 video.
                    </video>
                    <img
                        @click="play = true"
                        v-if="play == false"
                        :src="require('@/assets/images/dummy/cover.png')"
                    />
                </div>

                <img
                    @click="play = true"
                    v-if="play == false"
                    :src="require('@/assets/images/play.png')"
                    class="play-btn"
                />
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            play: false,
        }
    },
    methods: {
        /**
         * Handle when the modal is canceled
         *
         * @return {void}
         */
    },
}
</script>
