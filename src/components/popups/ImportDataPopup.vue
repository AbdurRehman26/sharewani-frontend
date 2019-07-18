<template>
    <div>
        <b-modal
            id="import-data-popup"
            title="Update Dow Jones Data"
            size="sm"
            okTitle="Update"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <h5>Dow Jones Data</h5>
            <upload-file></upload-file>
        </b-modal>
    </div>
</template>

<script>
import uploadFile from '@/components/UploadFile.vue'
export default {
    components: {
        uploadFile,
    },
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
