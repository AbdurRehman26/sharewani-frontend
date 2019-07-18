<template>
    <div>
        <b-modal
            id="add-country-popup"
            title="Add Country of Residence Factor"
            size="sm"
            okTitle="Create"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form class="modal-form-format">
                <div class="row">
                    <div class="col-md-6">
                        <b-form-group
                            id="input-group-1"
                            label="Country Code"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-1"
                                type="text"
                                v-model="form.countryCode"
                                required
                                placeholder="Enter country code"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6">
                        <b-form-group
                            id="input-group-2"
                            label="Dialing Code"
                            label-for="input-2"
                        >
                            <b-form-input
                                id="input-2"
                                type="text"
                                v-model="form.dialingCode"
                                required
                                placeholder="Enter dialing code"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-3"
                            label="Country Title"
                            label-for="input-3"
                        >
                            <b-form-input
                                id="input-3"
                                type="text"
                                v-model="form.countryTitle"
                                required
                                placeholder="Enter country title"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-4"
                            label="Rating"
                            label-for="nationality"
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
                            class="mb-0 kyc-status-radio overwrite-radio"
                            id="input-group-5"
                            label="Is Sanction"
                            label-for="sanction"
                        >
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="sanction"
                                    :options="form.sanction"
                                    name="sanction"
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
                sanction: [{ text: 'Yes', value: null }, 'No'],
            },

            rating: [
                { value: null, text: 'Select Rating' },
                'High Risk',
                'Medium Risk',
                'Low Risk',
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
