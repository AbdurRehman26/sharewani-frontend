<template>
    <div>
        <b-modal
            id="add-relationship-popup"
            title="Add Relationship Length Factor"
            size="sm"
            okTitle="Create"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form>
                <div class="row">
                    <div class="col-md-12">
                        <label for="select-1"> Rule (in Months)</label>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <b-form-group>
                                <b-form-select
                                    id="select-1"
                                    class="form-control"
                                    v-model="form.months"
                                    :options="months"
                                ></b-form-select>
                            </b-form-group>
                        </div>
                    </div>
                    <div class="col-md-6 months-length">
                        <div class="form-group">
                            <b-form-group>
                                <b-form-select
                                    id="select-2"
                                    class="form-control"
                                    v-model="form.monthsTo"
                                    :options="monthsTo"
                                ></b-form-select>
                            </b-form-group>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-2"
                            label="Relationship Length Title"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-1"
                                type="text"
                                v-model="form.lengthTitle"
                                required
                                placeholder="Enter relationship length title"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-3"
                            label="Rating"
                            label-for="select-3"
                        >
                            <b-form-select
                                id="select-3"
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
                stateCode: '',
                lengthTitle: '',
                rating: null,
                months: null,
                monthsTo: null,
            },

            rating: [
                { value: null, text: 'Select Rating' },
                'High Risk',
                'Medium Risk',
                'Low Risk',
            ],

            months: [
                { value: null, text: 'Select (in months)' },
                'January ',
                'February ',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ],
            monthsTo: [
                { value: null, text: 'Select (in months)' },
                'January ',
                'February ',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
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
