<template>
    <b-form class="step-form">
        <div class="row">
            <div class="col-lg-12">
                <div class="fields-area">
                    <div class="row">
                        <div class="col-lg-12">
                            <h3>Basic Information</h3>
                        </div>
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
                                    placeholder="Enter first name"
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
                                    placeholder="Enter middle name"
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
                                    placeholder="Enter last name"
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
                                        v-model="form.gender"
                                        :options="form.genderOptions"
                                        name="gender"
                                    ></b-form-radio-group>
                                </b-form-group>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-5"
                                label="Date of Birth"
                                label-for="dateofbirth"
                            >
                                <div class="form-group">
                                    <date-time-picker
                                        dateFormat="ll"
                                        placeholder="DD / MM/ YYYY"
                                        date
                                        close
                                        noFooter
                                    ></date-time-picker>
                                </div>
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
                                    :options="form.nationalityOptions"
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
                                    :options="form.residenceOptions"
                                ></b-form-select>
                            </b-form-group>
                        </div>
                    </div>
                </div>
                <div class="fields-area">
                    <div class="row">
                        <div class="col-lg-12">
                            <h3>Contact Information</h3>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-1"
                                label="Address"
                                label-for="address"
                            >
                                <b-form-input
                                    id="address"
                                    type="text"
                                    v-model="form.address"
                                    required
                                    placeholder="Enter address"
                                ></b-form-input>
                            </b-form-group>
                        </div>

                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-5"
                                label="Country"
                                label-for="country"
                            >
                                <b-form-select
                                    class="form-control"
                                    v-model="form.country"
                                    :options="form.countryOptions"
                                ></b-form-select>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-6"
                                label="State"
                                label-for="state"
                            >
                                <b-form-select
                                    class="form-control"
                                    v-model="form.state"
                                    :options="form.stateOptions"
                                ></b-form-select>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-6"
                                label="State"
                                label-for="state"
                            >
                                <b-form-select
                                    class="form-control"
                                    v-model="form.city"
                                    :options="form.cityOptions"
                                ></b-form-select>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-1"
                                label="Zip Code / Postal Code"
                                label-for="zipcode"
                            >
                                <b-form-input
                                    id="zipcode"
                                    type="number"
                                    v-model="form.zipcode"
                                    required
                                    placeholder="Enter zip code / postal code"
                                ></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-1"
                                label="Phone Number"
                                label-for="phonenumber"
                            >
                                <div class="row">
                                    <div class="col-md-5">
                                        <b-form-input
                                            id="countrycode"
                                            type="number"
                                            v-model="form.countrycode"
                                            required
                                            placeholder="Country code"
                                        ></b-form-input>
                                    </div>
                                    <div class="col-md-7">
                                        <b-form-input
                                            id="phonenumber"
                                            type="number"
                                            v-model="form.phonenumber"
                                            required
                                            placeholder="Select phone number"
                                        ></b-form-input>
                                    </div>
                                </div>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="email"
                                label="Email"
                                label-for="zipcode"
                            >
                                <b-form-input
                                    id="zipcode"
                                    type="email"
                                    v-model="form.email"
                                    required
                                    placeholder="Enter email address"
                                ></b-form-input>
                            </b-form-group>
                        </div>
                    </div>
                </div>
                <div class="fields-area">
                    <div class="row">
                        <div class="col-lg-12">
                            <h3>Occupation Information</h3>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-5"
                                label="Work Type"
                                label-for="worktype"
                            >
                                <b-form-select
                                    class="form-control"
                                    v-model="form.worktype"
                                    :options="form.worktypeOptions"
                                ></b-form-select>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-6"
                                label="Industry"
                                label-for="industry"
                            >
                                <b-form-select
                                    class="form-control"
                                    v-model="form.industry"
                                    :options="form.industryOptions"
                                ></b-form-select>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-1"
                                label="Length of Relationship"
                                label-for="taxid"
                            >
                                <b-form-input
                                    id="address"
                                    type="text"
                                    v-model="form.relationship"
                                    required
                                    placeholder="Enter Length of relationship (in months)"
                                ></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-1"
                                label="Tax ID"
                                label-for="taxid"
                            >
                                <b-form-input
                                    id="address"
                                    type="text"
                                    v-model="form.taxid"
                                    required
                                    placeholder="Enter tax id"
                                ></b-form-input>
                            </b-form-group>
                        </div>
                    </div>
                </div>

                <div class="fields-area">
                    <div class="row">
                        <div class="col-lg-12">
                            <h3>ID Document Information</h3>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-5"
                                label="ID Document Type"
                                label-for="doctype"
                            >
                                <b-form-select
                                    class="form-control"
                                    v-model="form.doctype"
                                    :options="form.doctypeOptions"
                                ></b-form-select>
                            </b-form-group>
                        </div>

                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-1"
                                label="ID Document Number"
                                label-for="docnumber"
                            >
                                <b-form-input
                                    id="address"
                                    type="text"
                                    v-model="form.docnumber"
                                    required
                                    placeholder="52801-6782883-1"
                                ></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-5"
                                label="Expirty Date"
                                label-for="expiredate"
                            >
                                <div class="form-group ">
                                    <date-time-picker
                                        dateFormat="ll"
                                        placeholder="DD / MM/ YYYY"
                                        date
                                        close
                                        noFooter
                                    ></date-time-picker>
                                </div>
                            </b-form-group>
                        </div>
                    </div>
                </div>
                <base-button
                    btnType="submit"
                    btnVariant="primary"
                    btnLabel="CONTINUE"
                    @preventFunction="linking()"
                ></base-button>
            </div>
        </div>
    </b-form>
</template>
<script>
import dateTimePicker from '@/components/DateTimePicker.vue'
export default {
    components: {
        dateTimePicker,
    },

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
            form: {
                firstName: '',
                middleName: '',
                lastName: '',
                gender: null,
                nationality: null,
                residence: null,
                address: null,
                country: null,
                state: null,
                relationship: null,
                city: null,
                zipcode: null,
                countrycode: null,
                phonenumber: null,
                email: null,
                worktype: null,
                industry: null,
                taxid: null,
                doctype: null,
                docnumber: null,
                genderOptions: [{ text: 'Male', value: null }, 'Female'],
                nationalityOptions: [
                    { value: null, text: 'Select Nationality' },
                    'Pakistani',
                    'Indian',
                    'British',
                    'American',
                    'Algerian',
                    'Belgian',
                    'Colombian',
                ],

                residenceOptions: [
                    { value: null, text: 'Select Country of Residence' },
                    'United Kingdom',
                    'Pakistan',
                    'Indian',
                ],
                countryOptions: [
                    { value: null, text: 'Select country' },
                    'United Kingdom',
                    'Pakistan',
                    'Indian',
                ],
                stateOptions: [
                    { value: null, text: 'Select state' },
                    'Arizona',
                    'Chicago',
                ],
                cityOptions: [
                    { value: null, text: 'Select state' },
                    'Arizona',
                    'Chicago',
                ],
                worktypeOptions: [
                    { value: null, text: 'Select work type' },
                    'Engineer',
                    'Doctor',
                    'Scholar',
                ],
                industryOptions: [
                    { value: null, text: 'Select industry' },
                    'Amazon',
                    'Ebay',
                    'AliBaba',
                ],
                doctypeOptions: [
                    { value: null, text: 'National ID Card' },
                    'CNIC',
                ],
            },
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
    methods: {
        linking() {
            if (this.$route.meta.publicRegistration === true) {
                this.$router.push('/public-registration/account-info')
            } else {
                this.$router.push('/register-customer/account-info')
            }
        },
    }, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {}, // End of Component > mounted
} // End of export default
</script>
