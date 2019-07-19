<template>
    <div>
        <b-modal
            id="overwrite-result-popup"
            title="Manually Overwrite Result"
            size="sm"
            okTitle="Submit"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <p>
                Are you sure you want to manually overwrite liveness detection
                result?
            </p>
            <b-form>
                <b-form-group
                    id="input-group-1"
                    class="kyc-status-radio overwrite-radio"
                    label="Liveness Detection Result"
                    label-for="detection-result"
                >
                    <b-form-group>
                        <b-form-radio-group
                            v-model="result"
                            :options="form.result"
                            name="result"
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
                result: [{ text: 'Matched', value: null }, 'Not Matched'],
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
