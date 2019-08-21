<template>
    <div>
        <b-modal
            id="add-text-field-popup"
            :title="title"
            size="sm"
            :okTitle="buttonText"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form>
                <div class="row">
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-1"
                            label="Label"
                            label-for="field-label"
                        >
                            <b-form-input
                                id="field-label"
                                type="text"
                                v-model="form.fieldLabel"
                                required
                                autocomplete="no"
                                placeholder="Enter field label"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-2"
                            label="Placeholder"
                            label-for="placeholder"
                        >
                            <b-form-input
                                id="placeholder"
                                type="text"
                                v-model="form.placeholder"
                                required
                                autocomplete="no"
                                placeholder="Enter placeholder text"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            class="kyc-status-radio overwrite-radio"
                            id="input-group-4"
                            label="Is Required?"
                            label-for="isrequired"
                        >
                            <b-form-radio-group
                                id="isrequired"
                                v-model="form.isrequiredModel"
                                :options="form.isrequired"
                                name="isrequired"
                            ></b-form-radio-group>
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
            default: 'Add Text Field',
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
                fieldLabel: '',
                placeholder: '',
                rating: null,
                isrequiredModel: null,
                isrequired: [{ text: 'Yes', value: null }, 'No'],
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
