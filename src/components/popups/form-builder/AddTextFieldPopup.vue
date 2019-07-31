<template>
    <div>
        <b-modal
            id="add-text-field-popup"
            title="Add Text Field"
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
                            label="Label"
                            label-for="field-label"
                        >
                            <b-form-input
                                id="field-label"
                                type="text"
                                v-model="form.fieldLabel"
                                required
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
