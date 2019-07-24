<template>
    <div class="upload-picture-modal">
        <b-modal
            id="picture-preview-popup"
            title="Document Preview"
            size="md"
            ok-only
            okTitle="Close"
            okVariant="primary"
        >
            <h5>Selfie From Video</h5>

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
