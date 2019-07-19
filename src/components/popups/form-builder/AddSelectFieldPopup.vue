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
            <b-form class="scrollable">
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
                                <label class="m-b-15">OPTIONS</label>
                            </div>
                            <div class="col-md-6">
                                <label class="m-b-15">VALUE</label>
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
                                        id="field-label"
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
                                        id="field-label"
                                        type="value"
                                        v-model="list.optionVal"
                                        required
                                        placeholder="Enter value"
                                    ></b-form-input>
                                </b-form-group>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <b-form-group>
                                    <base-button
                                        btnVariant="transparent"
                                        btnLabel="+ Add More"
                                        cssClass="w-100"
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
                            <b-form-group class="mb-0">
                                <b-form-radio-group
                                    id="isrequired"
                                    v-model="form.isrequiredModel"
                                    :options="form.isrequired"
                                    name="isrequired"
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
