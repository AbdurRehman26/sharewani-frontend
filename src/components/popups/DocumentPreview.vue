<template>
    <div>
        <b-modal
            id="document-preview"
            title="Document Preview"
            size="md"
            okTitle="Close"
            cancelTitle=""
            cancelVariant="link"
        >
            <label>Recorded Video</label>

            <div class="document-preview-section">
                <iframe
                    src="https://www.youtube-nocookie.com/embed/5rKHdgkm3RY?rel=0&amp;showinfo=0&amp;controls=0"
                    frameborder="0"
                >
                </iframe>
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
