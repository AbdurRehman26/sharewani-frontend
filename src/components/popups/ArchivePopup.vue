<template>
    <div>
        <b-modal
            id="archive-popup"
            ref="my-modal"
            size="sm"
            okTitle="Archive"
            cancelTitle="Cancel"
            cancelVariant="link"
            no-close-on-backdrop
        >
            <div slot="modal-header" class="w-100 archive-popup">
                <h5 class="modal-title">{{ title }}</h5>
                <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    @click="hideModal"
                >
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <p>
                {{ description }}
            </p>
        </b-modal>
    </div>
</template>

<script>
export default {
    props: {
        /**
         * Value to determine the current compose mode which
         * varies between 'add' and 'edit'
         */
        title: {
            type: String,
            default: null,
        },

        description: {
            type: String,
            default: null,
        },
    }, //
    data() {
        return {}
    },
    methods: {
        hideModal() {
            this.$refs['my-modal'].hide()
        },
        /**
         * Handle when the modal is canceled
         *
         * @return {void}
         */
    },
}
</script>
