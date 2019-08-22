<template>
    <div>
        <b-modal
            id="manual-alert-popup"
            title="Create Manual Alert"
            size="sm"
            okTitle="Submit"
            cancelTitle="Cancel"
            cancelVariant="link"
            no-close-on-backdrop
        >
            <b-form>
                <div class="row">
                    <div class="col-md-12">
                        <b-form-group
                            class="kyc-status-radio overwrite-radio"
                            id="input-group-1"
                            label="Reject Customer"
                            label-for="reject-customer"
                        >
                            <b-form-group>
                                <b-form-radio-group
                                    id="reject-customer"
                                    v-model="rejectCustomer"
                                    :options="form.rejectCustomer"
                                    name="rejectCustomer"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-2"
                            label="Override Risk Rating To"
                            label-for="rating"
                        >
                            <b-form-select
                                id="rating"
                                class="form-control"
                                v-model="form.rating"
                                :options="rating"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-3"
                            label="Reason"
                            label-for="reason"
                        >
                            <b-form-textarea
                                id="reason"
                                placeholder="Start typing the reason"
                                rows="3"
                            ></b-form-textarea>
                        </b-form-group>
                    </div>
                </div>
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
        mode: {
            type: String,
            default: null,
        },
    }, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            rejectCustomer: null,
            form: {
                countryCode: '',
                countryTitle: '',
                rating: null,

                rejectCustomer: [{ text: 'Yes', value: null }, 'No'],
            },

            rating: [
                { value: null, text: 'Select Risk Rating' },
                'High Risk',
                'Medium Risk',
                'Low Risk',
                'Sanctioned',
            ],
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
