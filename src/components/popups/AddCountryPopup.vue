<template>
    <div>
        <b-modal
            id="add-country-popup"
            :title="title"
            size="sm"
            :okTitle="buttonText"
            cancelTitle="Cancel"
            cancelVariant="link"
            no-close-on-backdrop
        >
            <b-form>
                <div class="row">
                    <div class="col-md-12 row-min-space">
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
                                        autocomplete="no"
                                        placeholder="Enter country code"
                                    ></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-6">
                                <b-form-group
                                    id="input-group-2"
                                    label="Dialling Code"
                                    label-for="input-2"
                                >
                                    <b-form-input
                                        id="input-2"
                                        type="text"
                                        v-model="form.dialingCode"
                                        required
                                        autocomplete="no"
                                        placeholder="Enter dialling code"
                                    ></b-form-input>
                                </b-form-group>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-3"
                            label="Country Title"
                            label-for="country-title"
                        >
                            <b-form-input
                                id="country-title"
                                type="text"
                                v-model="form.countryTitle"
                                required
                                autocomplete="no"
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
                    <div class="col-md-12">
                        <b-form-group
                            class="mb-0 kyc-status-radio overwrite-radio"
                            id="input-group-6"
                            label="Tax ID"
                            label-for="tax-id"
                        >
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="taxId"
                                    :options="form.taxId"
                                    name="taxId"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            class="mb-0 kyc-status-radio overwrite-radio"
                            id="input-group-7"
                            label="Is Tax ID Mandatory"
                            label-for="id-mandatory"
                        >
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="idMandatory"
                                    :options="form.idMandatory"
                                    name="idMandatory"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-8"
                            label="Tax ID Note"
                            label-for="tax-note"
                        >
                            <b-form-input
                                id="tax-note"
                                type="text"
                                v-model="form.taxNote"
                                required
                                autocomplete="no"
                                placeholder="Enter tax id note (optional)"
                            ></b-form-input>
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
        title: {
            type: String,
            default: null,
        },
        buttonText: {
            type: String,
            default: 'Create',
        },
    }, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            sanction: '',
            taxId: '',
            idMandatory: '',
            form: {
                countryCode: '',
                dialingCode: '',
                countryTitle: '',
                taxNote: '',
                rating: null,
                sanction: [{ text: 'Yes', value: null }, 'No'],
                taxId: [{ text: 'Required', value: null }, 'Not Required'],
                idMandatory: [{ text: 'Yes', value: null }, 'No'],
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
