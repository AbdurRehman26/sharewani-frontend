<template>
    <div>
        <b-modal
            id="add-nationality-popup"
            :title="title"
            size="sm"
            okTitle="Create"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form>
                <div class="row">
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-1"
                            label="Country Code"
                            label-for="country-code"
                        >
                            <b-form-input
                                id="country-code"
                                type="text"
                                v-model="form.countryCode"
                                required
                                placeholder="Enter country code"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-2"
                            label="Country Title"
                            label-for="country-title"
                        >
                            <b-form-input
                                id="country-title"
                                type="text"
                                v-model="form.countryTitle"
                                required
                                placeholder="Enter country title"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-3"
                            label="Rating"
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
                            class="kyc-status-radio overwrite-radio"
                            id="input-group-4"
                            label="Is Sanction"
                            label-for="sanction"
                        >
                            <b-form-group>
                                <b-form-radio-group
                                    id="sanction"
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
    }, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            sanction: '',
            form: {
                countryCode: '',
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
