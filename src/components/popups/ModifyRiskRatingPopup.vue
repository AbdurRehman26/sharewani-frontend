<template>
    <div>
        <b-modal
            id="modify-risk-rating"
            title="Modify Risk Rating Score"
            size="sm"
            okTitle="Update"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form class="modal-form-format">
                <div class="row">
                    <div class="col-md-12">
                        <h5 class="mb-20">PEP Hit Risk Rating Score</h5>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-1"
                            label="Rating"
                            label-for="rating"
                        >
                            <b-form-select
                                class="form-control"
                                v-model="form.rating"
                                :options="rating"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            class="kyc-status-radio overwrite-radio"
                            id="input-group-2"
                            label="Is Rejected"
                            label-for="rejected"
                        >
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="rejected"
                                    :options="form.rejected"
                                    name="rejected"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-3"
                            label="Review Period"
                            label-for="period"
                        >
                            <b-form-select
                                class="form-control"
                                v-model="form.period"
                                :options="period"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            class="mb-0 kyc-status-radio overwrite-radio"
                            id="input-group-4"
                            label="Generate Alert"
                            label-for="generate"
                        >
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="generate"
                                    :options="form.generate"
                                    name="generate"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-form-group>
                    </div>
                </div>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                countryCode: '',
                dialingCode: '',
                countryTitle: '',
                rating: null,
                period: null,
                rejected: [{ text: 'Yes', value: null }, 'No'],
                generate: [{ text: 'Yes', value: null }, 'No'],
            },

            rating: [
                { value: null, text: 'Select Rating' },
                'High Risk',
                'Medium Risk',
                'Low Risk',
            ],

            period: [
                { value: null, text: 'Select review period' },
                'Not Applicable',
                'Rejected',
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
