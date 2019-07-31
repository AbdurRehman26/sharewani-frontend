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
    data() {
        return {
            form: {
                rating: null,
            },

            rating: [
                { value: null, text: 'Select Rating' },
                'High Risk',
                'Medium Risk',
                'Low Risk',
                'sanctioned',
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
