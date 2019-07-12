<template>
    <div>
        <b-modal
            id="initiate-review"
            title="Initiate Review"
            size="md"
            okTitle="Submit"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <p>
                Are you sure you want to initiate review process of this
                customer profile?
            </p>

            <b-form>
                <b-form-group>
                    <b-form-group class="mb-0">
                        <b-form-radio-group
                            v-model="reviewType"
                            :options="form.reviewType"
                            name="review"
                        ></b-form-radio-group>
                    </b-form-group>
                </b-form-group>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                reviewType: [
                    { text: 'Yes, Initate Review', value: null },
                    'No',
                ],
            },
        }
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
