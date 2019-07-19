<template>
    <div>
        <b-modal
            id="modify-risk-factor-popup"
            title="Address in High Risk Country"
            size="sm"
            okTitle="Update"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form>
                <div class="row">
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-1"
                            label="Weight"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-1"
                                type="text"
                                v-model="form.weight"
                                required
                                placeholder="Enter weight"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-3"
                            label="Override To"
                            label-for="select-1"
                        >
                            <b-form-select
                                id="select-1"
                                class="form-control"
                                v-model="form.override"
                                :options="override"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-12 scale-type row-min-space">
                        <h4>Score Scale</h4>
                        <div class="row">
                            <div class="col-md-4">
                                <b-form-group
                                    class="mb-0"
                                    id="input-group-2"
                                    label="High"
                                    label-for="input-2"
                                >
                                    <b-form-input
                                        id="input-2"
                                        type="text"
                                        v-model="form.high"
                                        required
                                        placeholder="Enter high scale"
                                    ></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4">
                                <b-form-group
                                    class="mb-0"
                                    id="input-group-3"
                                    label="Medium"
                                    label-for="input-3"
                                >
                                    <b-form-input
                                        id="input-3"
                                        type="text"
                                        v-model="form.medium"
                                        required
                                        placeholder="Enter medium scale"
                                    ></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4">
                                <b-form-group
                                    id="input-group-4"
                                    label="Low"
                                    label-for="input-4"
                                >
                                    <b-form-input
                                        id="input-4"
                                        type="text"
                                        v-model="form.low"
                                        required
                                        placeholder="Enter low scale"
                                    ></b-form-input>
                                </b-form-group>
                            </div>
                        </div>
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
                weight: '',
                high: '',
                medium: '',
                low: '',
                override: null,
            },

            override: [
                { value: null, text: 'Select Override To' },
                'N/A',
                'High',
                'Sanction',
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
