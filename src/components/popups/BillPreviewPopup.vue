<template>
    <div class="upload-picture-modal">
        <b-modal
            id="bill-preview-popup"
            title="Document Preview"
            size="md"
            ok-only
            okTitle="Close"
            okVariant="primary"
        >
            <h5>Utility Bill</h5>

            <div class="document-preview-section">
                <div class="preview-video">
                    <img :src="require('@/assets/images/dummy/bill.png')" />
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
