<template>
    <div>
        <b-modal
            id="cancel-review-process"
            title="Cancel Review Process"
            size="sm"
            okTitle="Cancel"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <p>
                Are you sure you want to cancel review process? Once you cancel
                someone else can initiate review process.
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
