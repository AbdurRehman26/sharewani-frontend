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
                    :label="label"
                    label-for="results"
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
    /*
    |--------------------------------------------------------------------------
    | Component > props
    |--------------------------------------------------------------------------
    */
    props: {
        /**
         * Value to determine the current compose mode which
         * varies between 'add' and 'edit'
         */
        label: {
            type: String,
            default: null,
        },
    }, // End of Component > props

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
