<template>
    <div>
        <b-modal
            id="activate-popup"
            ref="my-modal"
            size="sm"
            okTitle="Activate"
            cancelTitle="Cancel"
            cancelVariant="link"
            no-close-on-backdrop
        >
            <div slot="modal-header" class="w-100 archive-popup">
                <h5 class="modal-title">Activate User</h5>
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
                Are you sure you want to activate this user? You can re-activate
                account later.
            </p>
        </b-modal>
    </div>
</template>

<script>
export default {
    props: {
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
