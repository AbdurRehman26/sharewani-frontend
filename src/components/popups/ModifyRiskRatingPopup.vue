<template>
    <div>
        <b-modal
            id="modify-risk-rating-popup"
            title="Modify Risk Rating Score"
            size="sm"
            okTitle="Update"
            cancelTitle="Cancel"
            cancelVariant="link"
            no-close-on-backdrop
        >
            <b-form>
                <div class="row">
                    <div class="col-md-12">
                        <h5 class="mb-20">Point Scoring (Initial Range)</h5>
                    </div>
                    <div class="col-md-12 row-min-space">
                        <div class="row">
                            <div class="col-md-6">
                                <b-form-group
                                    id="input-group-1"
                                    label="Start"
                                    label-for="start-score"
                                >
                                    <b-form-input
                                        id="start-score"
                                        type="text"
                                        v-model="form.startScore"
                                        required
                                        autocomplete="no"
                                        placeholder="Enter start score"
                                    ></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-6">
                                <b-form-group
                                    id="input-group-2"
                                    label="End"
                                    label-for="end-score"
                                >
                                    <b-form-input
                                        id="end-score"
                                        type="text"
                                        v-model="form.endScore"
                                        required
                                        autocomplete="no"
                                        placeholder="Enter end score"
                                    ></b-form-input>
                                </b-form-group>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-3"
                            label="Rating"
                            label-for="rating"
                        >
                            <b-form-select
                                class="form-control"
                                v-model="form.rating"
                                :options="rating"
                                autocomplete="no"
                            ></b-form-select>
                        </b-form-group>
                    </div>

                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-4"
                            label="Review Period"
                            label-for="period"
                        >
                            <b-form-input
                                id="period"
                                type="text"
                                v-model="form.period"
                                required
                                autocomplete="no"
                                placeholder="Enter review period"
                            ></b-form-input>
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
            rejected: '',
            generate: '',
            form: {
                startScore: '',
                endScore: '',
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
                'Sanctioned',
            ],

            period: [
                { value: null, text: 'Select review period' },
                '1 Year',
                '3 Years',
                '6 Years',
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
