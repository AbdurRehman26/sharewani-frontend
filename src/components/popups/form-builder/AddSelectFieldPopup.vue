<template>
    <div>
        <b-modal
            id="add-select-field-popup"
            title="Add Text Field"
            size="sm"
            okTitle="Create"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <div id="style-2" class="scrollable">
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
                        <div class="col-md-12 row-min-space">
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="m-b-15" for="options"
                                        >OPTIONS</label
                                    >
                                </div>
                                <div class="col-md-6">
                                    <label class="m-b-15" for="values"
                                        >VALUE</label
                                    >
                                </div>
                            </div>
                            <div
                                class="row"
                                v-for="(list, index) in form.options"
                                :key="index"
                            >
                                <div class="col-md-6">
                                    <b-form-group class="m-b-15">
                                        <b-form-input
                                            id="options"
                                            type="text"
                                            v-model="list.optionName"
                                            required
                                            placeholder="Enter Options"
                                        ></b-form-input>
                                    </b-form-group>
                                </div>
                                <div class="col-md-6">
                                    <b-form-group class="m-b-15">
                                        <b-form-input
                                            id="values"
                                            type="number"
                                            v-model="list.optionVal"
                                            required
                                            placeholder="Enter value"
                                        ></b-form-input>
                                    </b-form-group>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 add-more-section">
                                    <b-form-group>
                                        <base-button
                                            btnVariant="transparent"
                                            btnLabel="+ Add More"
                                            cssClass="btn-block"
                                            @click="addOption()"
                                        ></base-button>
                                    </b-form-group>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <b-form-group
                                class="kyc-status-radio overwrite-radio mb-0"
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
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                fieldLabel: '',
                options: [
                    {
                        optionName: '',
                        optionVal: null,
                    },
                    {
                        optionName: '',
                        optionVal: null,
                    },
                ],
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
        addOption() {
            this.form.options.push({ optionName: '', optionVal: null })
        },
    },
}
</script>
