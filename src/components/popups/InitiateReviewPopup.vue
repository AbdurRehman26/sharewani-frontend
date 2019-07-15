<template>
    <div>
        <b-modal
            id="initiate-review"
            title="Initiate Review"
            size="sm"
            okTitle="Yes, Initate Review"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <p>
                Are you sure you want to initiate review process of this
                customer profile?
            </p>
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
