<template>
    <div>
        <b-modal
            id="add-product-popup"
            :title="title"
            size="sm"
            :okTitle="buttonText"
            cancelTitle="Cancel"
            cancelVariant="link"
            no-close-on-backdrop
        >
            <b-form class="modal-form-format">
                <div class="row">
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-1"
                            label="Product Code"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-1"
                                type="text"
                                v-model="form.productCode"
                                required
                                autocomplete="no"
                                placeholder="Enter product code"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-2"
                            label="Product Title"
                            label-for="input-2"
                        >
                            <b-form-input
                                id="input-2"
                                type="text"
                                v-model="form.dialingCode"
                                required
                                autocomplete="no"
                                placeholder="Enter product title"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-3"
                            label="Rating"
                            label-for="select-1"
                        >
                            <b-form-select
                                id="select-1"
                                class="form-control"
                                v-model="form.rating"
                                :options="rating"
                            ></b-form-select>
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
            form: {
                productCode: '',
                productTitle: '',
                rating: null,
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
