<template>
    <div class="upload-picture-modal">
        <b-modal
            id="picture-preview-popup"
            title="Document Preview"
            size="md"
            ok-only
            okTitle="Close"
            okVariant="primary"
            no-close-on-backdrop
        >
            <h5>Selfie From Video</h5>

            <div class="document-preview-section">
                <div class="preview-video">
                    <img
                        :src="require('@/assets/images/video-cover.png')"
                        class="image-preview"
                    />
                </div>
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
