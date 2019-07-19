<template>
    <div>
        <b-modal
            id="remove-field"
            title="Remove Field"
            size="sm"
            okTitle="Remove"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form>
                <div class="row">
                    <div class="col-md-12">
                        <p>
                            Are you sure to want to remove this field? This
                            action won't change any data which was entered
                            previously.
                        </p>
                    </div>
                </div>
            </b-form>
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
