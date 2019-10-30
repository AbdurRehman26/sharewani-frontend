<template>
    <div>
        <b-modal
            id="confirm-popup"
            ref="my-modal"
            size="sm"
            okTitle="Confirm"
            cancelTitle="Cancel"
            cancelVariant="link"
            @ok="$emit('confirm')"
        >
            <div slot="modal-header" class="w-100 archive-popup">
                <h5 class="modal-title">{{title}}</h5>
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
                {{description}}
            </p>
        </b-modal>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Cancel Order',
        },

        description: {
            type: String,
            default: 'Are you sure you want to cancel order?',
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
