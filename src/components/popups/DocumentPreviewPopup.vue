<template>
    <div class="upload-video-modal">
        <b-modal
            id="document-preview"
            title="Document Preview"
            size="md"
            ok-only
            okTitle="Close"
            okVariant="primary"
        >
            <h5>Recorded Video</h5>

            <div class="document-preview-section">
                <div
                    class="preview-video"
                    :style="{
                        'background-image':
                            'url(' +
                            require('@/assets/images/video-cover.png') +
                            ')',
                    }"
                ></div>

                <img :src="require('@/assets/images/play.png')" />
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {}
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
