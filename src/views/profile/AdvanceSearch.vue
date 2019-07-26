<template>
    <div class="wrap-content advance-search">
        <div class="filter-section">
            <h2>Advance Search</h2>
        </div>
        <div class="card">
            <b-form v-if="show">
                <div class="row">
                    <div class="col-md-4">
                        <b-form-group
                            id="input-group-1"
                            label="First name"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-1"
                                type="text"
                                v-model="form.firstName"
                                required
                                placeholder="Search by first name"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group
                            id="input-group-2"
                            label="Middle Name"
                            label-for="input-2"
                        >
                            <b-form-input
                                id="input-2"
                                type="text"
                                v-model="form.middleName"
                                required
                                placeholder="Search by middle name"
                            ></b-form-input>
                        </b-form-group>
                    </div>

                    <div class="col-md-4">
                        <b-form-group
                            id="input-group-3"
                            label="Last name"
                            label-for="input-3"
                        >
                            <b-form-input
                                id="input-3"
                                type="text"
                                v-model="form.lastName"
                                required
                                placeholder="Search by last name"
                            ></b-form-input>
                        </b-form-group>
                    </div>

                    <div class="col-md-4 form-radio">
                        <b-form-group
                            id="input-group-4"
                            label="Gender"
                            label-for="gender"
                        >
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="gender"
                                    :options="form.gender"
                                    name="gender"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group
                            id="input-group-5"
                            label="Nationality"
                            label-for="nationality"
                        >
                            <b-form-select
                                class="form-control"
                                v-model="form.nationality"
                                :options="nationality"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group
                            id="input-group-6"
                            label="Country of Residence"
                            label-for="residence"
                        >
                            <b-form-select
                                class="form-control"
                                v-model="form.residence"
                                :options="residence"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group
                            id="input-group-7"
                            label="Work Type"
                            label-for="work"
                        >
                            <b-form-select
                                class="form-control"
                                v-model="form.workType"
                                :options="workType"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group
                            id="input-group-8"
                            label="Industry"
                            label-for="industry"
                        >
                            <b-form-select
                                class="form-control"
                                v-model="form.industry"
                                :options="industry"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-12 seprator-line"><hr /></div>
                    <div class="col-md-4">
                        <b-form-group
                            id="input-group-9"
                            label="KYC Status"
                            label-for="status"
                        >
                            <b-form-select
                                class="form-control"
                                v-model="form.status"
                                :options="status"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group
                            id="input-group-10"
                            label="Name Screening Hit Type"
                            label-for="hitType"
                        >
                            <b-form-select
                                class="form-control"
                                v-model="form.hitType"
                                :options="hitType"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group
                            id="input-group-11"
                            label="Risk Rating Level"
                            label-for="ratingLevel"
                        >
                            <b-form-select
                                class="form-control"
                                v-model="form.ratingLevel"
                                :options="ratingLevel"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-4 form-radio reg-channel">
                        <b-form-group
                            id="input-group-12"
                            label="Registration Channel"
                            label-for="channel"
                        >
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="channel"
                                    :options="form.channel"
                                    name="channel"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group
                            id="input-group-13"
                            label="Id Type"
                            label-for="type"
                        >
                            <b-form-select
                                class="form-control"
                                v-model="form.type"
                                :options="type"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group
                            id="input-group-14"
                            label="Product Type"
                            label-for="productType"
                        >
                            <b-form-select
                                class="form-control"
                                v-model="form.productType"
                                :options="productType"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-12 seprator-line"><hr /></div>
                    <div class="col-md-12">
                        <base-button
                            btnLabel="Search now"
                            btnType="submit"
                            btnVariant="primary"
                        ></base-button>
                    </div>
                </div>
            </b-form>
        </div>
    </div>
</template>
<script>
export default {
    components: {},

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
        mode: {
            type: String,
            default: 'add',
        },
    }, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            show: true,
            channel: null,
            gender: null,
            form: {
                firstName: '',
                middleName: '',
                lastName: '',
                nationality: null,
                residence: null,
                workType: null,
                industry: null,
                status: null,
                hitType: null,
                ratingLevel: null,
                type: null,
                productType: null,

                gender: [
                    { text: 'All Customers', value: null },
                    'Male',
                    'Female',
                ],

                channel: [
                    { text: 'All', value: null },
                    'Face-To-Face',
                    'Not-Face-To-Face',
                ],
            },

            workType: [
                { value: null, text: 'Select Work Type', disabled: true },
                'Self Employed',
                'Worker',
            ],
            industry: [
                { value: null, text: 'Select Industry', disabled: true },
                'Automotive Industry',
                'Textile Industry',
            ],
            nationality: [
                { value: null, text: 'Select Nationality', disabled: true },
                'Pakistani',
                'Indian',
                'British',
                'American',
                'Algerian',
                'Belgian',
                'Colombian',
            ],

            residence: [
                {
                    value: null,
                    text: 'Select Country of Residence',
                    disabled: true,
                },
                'United Kingdom',
                'Pakistan',
                'Indian',
            ],

            status: [{ value: null, text: 'Select KYC Status' }],
            hitType: [{ value: null, text: 'Select Name Screening Hit Type' }],
            ratingLevel: [{ value: null, text: 'Select Risk Rating Level' }],
            type: [{ value: null, text: 'Select ID Type' }],
            productType: [{ value: null, text: 'Select Product Type' }],
        }
    }, // End of Component > data

    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: {}, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {}, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {}, // End of Component > mounted
} // End of export default
</script>
