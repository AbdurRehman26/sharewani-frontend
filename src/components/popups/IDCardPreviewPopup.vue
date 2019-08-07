<template>
    <div class="upload-picture-modal">
        <b-modal
            id="id-card-preview-popup"
            title="Document Preview"
            size="md"
            ok-only
            okTitle="Close"
            okVariant="primary"
        >
            <h5>ID Card</h5>

            <div class="document-preview-section">
                <div class="preview-video text-center identification-section">
                    <img :src="require('@/assets/images/dummy/id-card.png')" />
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
