<template>
    <div>
        <b-modal
            id="modify-risk-rating-override-popup"
            title="Modify Risk Rating Override"
            size="sm"
            okTitle="Update"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form>
                <div class="row">
                    <div class="col-md-12">
                        <h5 class="mb-20">If PEP Hit</h5>
                    </div>
                    <br /><br />
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-1"
                            label="Override Rating"
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
                            class="mb-0 kyc-status-radio overwrite-radio"
                            id="input-group-4"
                            label="Is Rejected?"
                            label-for="rejected"
                        >
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="rejected"
                                    :options="form.rejected"
                                    name="rejected"
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
                rating: null,
                rejected: [{ text: 'Yes', value: null }, 'No'],
            },

            rating: [
                { value: null, text: 'Select Rating' },
                'High Risk',
                'Medium Risk',
                'Low Risk',
                'Sanctioned',
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
