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
                                    autocomplete="no"
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
                                    autocomplete="no"
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
                                    autocomplete="no"
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
                                <b-form-select
                                    class="form-control"
                                    v-model="form.gender"
                                    :options="form.genderOptions"
                                    autocomplete="no"
                                ></b-form-select>
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
                                        dateFormat="l"
                                        :formatVal="'DD-MM-YYYY'"
                                        placeholder="MM / DD / YYYY"
                                        date
                                        close
                                        noFooter
                                    ></date-time-picker>
                                </div>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-6"
                                label="Nationality"
                                label-for="nationality"
                            >
                                <b-form-select
                                    class="form-control"
                                    v-model="form.nationality"
                                    :options="form.nationalityOptions"
                                    autocomplete="no"
                                ></b-form-select>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-7"
                                label="Country of Residence"
                                label-for="residence"
                            >
                                <b-form-select
                                    class="form-control"
                                    v-model="form.residence"
                                    :options="form.residenceOptions"
                                    autocomplete="no"
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
                                id="input-group-8"
                                label="Address"
                                label-for="address"
                            >
                                <b-form-input
                                    id="address"
                                    type="text"
                                    v-model="form.address"
                                    required
                                    autocomplete="no"
                                    placeholder="Enter address"
                                ></b-form-input>
                            </b-form-group>
                        </div>

                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-10"
                                label="State"
                                label-for="state"
                            >
                                <b-form-select
                                    class="form-control"
                                    v-model="form.state"
                                    :options="form.stateOptions"
                                    autocomplete="no"
                                ></b-form-select>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-11"
                                label="City"
                                label-for="city"
                            >
                                <b-form-input
                                    id="city"
                                    type="text"
                                    v-model="form.city"
                                    required
                                    autocomplete="no"
                                    placeholder="Enter city"
                                ></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-12"
                                label="Zip Code / Postal Code"
                                label-for="zipcode"
                            >
                                <b-form-input
                                    id="zipcode"
                                    type="number"
                                    v-model="form.zipcode"
                                    required
                                    autocomplete="no"
                                    placeholder="Enter zip code / postal code"
                                ></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-md-4 row-min-space">
                            <b-form-group
                                id="input-group-13"
                                label="Phone Number"
                                label-for="phonenumber"
                            >
                                <div class="row profile-setup">
                                    <div class="col-md-5 mb-20">
                                        <b-form-input
                                            id="countrycode"
                                            type="number"
                                            v-model="form.countrycode"
                                            required
                                            autocomplete="no"
                                            placeholder="Dialling code"
                                        ></b-form-input>
                                    </div>
                                    <div class="col-md-7">
                                        <b-form-input
                                            id="phonenumber"
                                            type="number"
                                            v-model="form.phonenumber"
                                            required
                                            autocomplete="no"
                                            placeholder="Enter phone number"
                                        ></b-form-input>
                                    </div>
                                </div>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-14"
                                label="Email"
                                label-for="email"
                            >
                                <b-form-input
                                    id="email"
                                    type="email"
                                    v-model="form.email"
                                    required
                                    autocomplete="no"
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
                                id="input-group-15"
                                label="Work Type"
                                label-for="worktype"
                            >
                                <b-form-select
                                    class="form-control"
                                    v-model="form.worktype"
                                    :options="form.worktypeOptions"
                                    autocomplete="no"
                                ></b-form-select>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-16"
                                label="Industry"
                                label-for="industry"
                            >
                                <b-form-select
                                    class="form-control"
                                    v-model="form.industry"
                                    :options="form.industryOptions"
                                    autocomplete="no"
                                ></b-form-select>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-17"
                                label="Length of Relationship"
                                label-for="relationship"
                            >
                                <b-form-input
                                    id="relationship"
                                    type="text"
                                    v-model="form.relationship"
                                    required
                                    autocomplete="no"
                                    placeholder="Enter length of relationship (in months)"
                                ></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-18"
                                label="Tax ID"
                                label-for="taxid"
                            >
                                <b-form-input
                                    id="taxid"
                                    type="text"
                                    v-model="form.taxid"
                                    required
                                    autocomplete="no"
                                    placeholder="Enter tax id"
                                ></b-form-input>
                                <p class="tax-instruction">
                                    <i class="icon-error_outline"></i>
                                    <span
                                        >Instructions related to tax id number
                                        will be placed here.</span
                                    >
                                </p>
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
                                id="input-group-19"
                                label="ID Document Type"
                                label-for="doctype"
                            >
                                <b-form-select
                                    class="form-control"
                                    v-model="form.doctype"
                                    :options="form.doctypeOptions"
                                    autocomplete="no"
                                ></b-form-select>
                            </b-form-group>
                        </div>

                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-20"
                                label="ID Document Number"
                                label-for="docnumber"
                            >
                                <b-form-input
                                    id="docnumber"
                                    type="text"
                                    v-model="form.docnumber"
                                    required
                                    autocomplete="no"
                                    placeholder="52801-6782883-1"
                                ></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                id="input-group-21"
                                label="Expiry Date"
                                label-for="expiredate"
                            >
                                <div class="form-group ">
                                    <date-time-picker
                                        dateFormat="l"
                                        :formatVal="'DD-MM-YYYY'"
                                        placeholder="MM / DD / YYYY"
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
                city: '',
                zipcode: null,
                countrycode: null,
                phonenumber: null,
                email: null,
                worktype: null,
                industry: null,
                taxid: null,
                doctype: null,
                docnumber: null,

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

                genderOptions: [
                    { text: 'Select Gender', value: null },
                    'Male',
                    'Female',
                    'Not Applicable',
                ],

                residenceOptions: [
                    { value: null, text: 'Select Country of Residence' },
                    'Afghanistan',
                    'Albania',
                    'Algeria',
                    'Andorra',
                    'Angola',
                    'Antigua and Barbuda',
                    'Argentina',
                    'Armenia',
                    'Australia',
                    'Austria',
                    'Azerbaijan',
                    'Bahamas',
                    'Bahrain',
                    'Bangladesh',
                    'Barbados',
                    'Belarus',
                    'Belgium',
                    'Belize',
                    'Benin',
                    'Bhutan',
                    'Bolivia (Plurinational State of)',
                    'Bosnia and Herzegovina',
                    'Botswana',
                    'Brazil',
                    'Brunei Darussalam',
                    'Bulgaria',
                    'BurkinaFaso',
                    'Burundi',
                    'Cabo Verde',
                    'Cambodia',
                    'Cameroon',
                    'Canada',
                    'Central African Republic',
                    'Chad',
                    'Chile',
                    'China',
                    'Colombia',
                    'Comoros',
                    'Congo',
                    'Cook Islands',
                    'Costa Rica',
                    'Croatia',
                    'Cuba',
                    'Cyprus',
                    'Czechia',
                    "Côte d'Ivoire",
                    "Democratic People's Republic of Korea",
                    'Democratic Republic of the Congo',
                    'Denmark',
                    'Djibouti',
                    'Dominica',
                    'Dominican Republic',
                    'Ecuador',
                    'Egypt',
                    'El Salvador',
                    'Equatorial Guinea',
                    'Eritrea',
                    'Estonia',
                    'Eswatini',
                    'Ethiopia',
                    'Faroe Islands',
                    'Fiji',
                    'Finland',
                    'France',
                    'Gabon',
                    'Gambia',
                    'Georgia',
                    'Germany',
                    'Ghana',
                    'Greece',
                    'Grenada',
                    'Guatemala',
                    'Guinea',
                    'Guinea-Bissau',
                    'Guyana',
                    'Haiti',
                    'Honduras',
                    'Hungary',
                    'Iceland',
                    'India',
                    'Indonesia',
                    'Iran (Islamic Republic of)',
                    'Iraq',
                    'Ireland',
                    'Israel',
                    'Italy',
                    'Jamaica',
                    'Japan',
                    'Jordan',
                    'Kazakhstan',
                    'Kenya',
                    'Kiribati',
                    'Kuwait',
                    'Kyrgyzstan',
                    "Lao People's Democratic Republic",
                    'Latvia',
                    'Lebanon',
                    'Lesotho',
                    'Liberia',
                    'Libya',
                    'Lithuania',
                    'Luxembourg',
                    'Madagascar',
                    'Malawi',
                    'Malaysia',
                    'Maldives',
                    'Mali',
                    'Malta',
                    'Marshall Islands',
                    'Mauritania',
                    'Mauritius',
                    'Mexico',
                    'Micronesia (Federated States of)',
                    'Monaco',
                    'Mongolia',
                    'Montenegro',
                    'Morocco',
                    'Mozambique',
                    'Myanmar',
                    'Namibia',
                    'Nauru',
                    'Nepal',
                    'Netherlands',
                    'New Zealand',
                    'Nicaragua',
                    'Niger',
                    'Nigeria',
                    'Niue',
                    'North Macedonia',
                    'Norway',
                    'Oman',
                    'Pakistan',
                    'Palau',
                    'Panama',
                    'Papua New Guinea',
                    'Paraguay',
                    'Peru',
                    'Philippines',
                    'Poland',
                    'Portugal',
                    'Qatar',
                    'Republic of Korea',
                    'Republic of Moldova',
                    'Romania',
                    'Russian Federation',
                    'Rwanda',
                    'Saint Kitts and Nevis',
                    'Saint Lucia',
                    'Saint Vincent and the Grenadines',
                    'Samoa',
                    'San Marino',
                    'Sao Tome and Principe',
                    'Saudi Arabia',
                    'Senegal',
                    'Serbia',
                    'Seychelles',
                    'Sierra Leone',
                    'Singapore',
                    'Slovakia',
                    'Slovenia',
                    'Solomon Islands',
                    'Somalia',
                    'South Africa',
                    'South Sudan',
                    'Spain',
                    'Sri Lanka',
                    'Sudan',
                    'Suriname',
                    'Sweden',
                    'Switzerland',
                    'Syrian Arab Republic',
                    'Tajikistan',
                    'Thailand',
                    'Timor-Leste',
                    'Togo',
                    'Tokelau',
                    'Tonga',
                    'Trinidad and Tobago',
                    'Tunisia',
                    'Turkey',
                    'Turkmenistan',
                    'Tuvalu',
                    'Uganda',
                    'Ukraine',
                    'United Arab Emirates',
                    'United Kingdom of Great Britain and Northern Ireland',
                    'United Republic of Tanzania',
                    'United States of America',
                    'Uruguay',
                    'Uzbekistan',
                    'Vanuatu',
                    'Venezuela (Bolivarian Republic of)',
                    'Viet Nam',
                    'Yemen',
                    'Zambia',
                    'Zimbabwe',
                ],
                countryOptions: [
                    { value: null, text: 'Select Country' },
                    'Afghanistan',
                    'Albania',
                    'Algeria',
                    'Andorra',
                    'Angola',
                    'Antigua and Barbuda',
                    'Argentina',
                    'Armenia',
                    'Australia',
                    'Austria',
                    'Azerbaijan',
                    'Bahamas',
                    'Bahrain',
                    'Bangladesh',
                    'Barbados',
                    'Belarus',
                    'Belgium',
                    'Belize',
                    'Benin',
                    'Bhutan',
                    'Bolivia (Plurinational State of)',
                    'Bosnia and Herzegovina',
                    'Botswana',
                    'Brazil',
                    'Brunei Darussalam',
                    'Bulgaria',
                    'BurkinaFaso',
                    'Burundi',
                    'Cabo Verde',
                    'Cambodia',
                    'Cameroon',
                    'Canada',
                    'Central African Republic',
                    'Chad',
                    'Chile',
                    'China',
                    'Colombia',
                    'Comoros',
                    'Congo',
                    'Cook Islands',
                    'Costa Rica',
                    'Croatia',
                    'Cuba',
                    'Cyprus',
                    'Czechia',
                    "Côte d'Ivoire",
                    "Democratic People's Republic of Korea",
                    'Democratic Republic of the Congo',
                    'Denmark',
                    'Djibouti',
                    'Dominica',
                    'Dominican Republic',
                    'Ecuador',
                    'Egypt',
                    'El Salvador',
                    'Equatorial Guinea',
                    'Eritrea',
                    'Estonia',
                    'Eswatini',
                    'Ethiopia',
                    'Faroe Islands',
                    'Fiji',
                    'Finland',
                    'France',
                    'Gabon',
                    'Gambia',
                    'Georgia',
                    'Germany',
                    'Ghana',
                    'Greece',
                    'Grenada',
                    'Guatemala',
                    'Guinea',
                    'Guinea-Bissau',
                    'Guyana',
                    'Haiti',
                    'Honduras',
                    'Hungary',
                    'Iceland',
                    'India',
                    'Indonesia',
                    'Iran (Islamic Republic of)',
                    'Iraq',
                    'Ireland',
                    'Israel',
                    'Italy',
                    'Jamaica',
                    'Japan',
                    'Jordan',
                    'Kazakhstan',
                    'Kenya',
                    'Kiribati',
                    'Kuwait',
                    'Kyrgyzstan',
                    "Lao People's Democratic Republic",
                    'Latvia',
                    'Lebanon',
                    'Lesotho',
                    'Liberia',
                    'Libya',
                    'Lithuania',
                    'Luxembourg',
                    'Madagascar',
                    'Malawi',
                    'Malaysia',
                    'Maldives',
                    'Mali',
                    'Malta',
                    'Marshall Islands',
                    'Mauritania',
                    'Mauritius',
                    'Mexico',
                    'Micronesia (Federated States of)',
                    'Monaco',
                    'Mongolia',
                    'Montenegro',
                    'Morocco',
                    'Mozambique',
                    'Myanmar',
                    'Namibia',
                    'Nauru',
                    'Nepal',
                    'Netherlands',
                    'New Zealand',
                    'Nicaragua',
                    'Niger',
                    'Nigeria',
                    'Niue',
                    'North Macedonia',
                    'Norway',
                    'Oman',
                    'Pakistan',
                    'Palau',
                    'Panama',
                    'Papua New Guinea',
                    'Paraguay',
                    'Peru',
                    'Philippines',
                    'Poland',
                    'Portugal',
                    'Qatar',
                    'Republic of Korea',
                    'Republic of Moldova',
                    'Romania',
                    'Russian Federation',
                    'Rwanda',
                    'Saint Kitts and Nevis',
                    'Saint Lucia',
                    'Saint Vincent and the Grenadines',
                    'Samoa',
                    'San Marino',
                    'Sao Tome and Principe',
                    'Saudi Arabia',
                    'Senegal',
                    'Serbia',
                    'Seychelles',
                    'Sierra Leone',
                    'Singapore',
                    'Slovakia',
                    'Slovenia',
                    'Solomon Islands',
                    'Somalia',
                    'South Africa',
                    'South Sudan',
                    'Spain',
                    'Sri Lanka',
                    'Sudan',
                    'Suriname',
                    'Sweden',
                    'Switzerland',
                    'Syrian Arab Republic',
                    'Tajikistan',
                    'Thailand',
                    'Timor-Leste',
                    'Togo',
                    'Tokelau',
                    'Tonga',
                    'Trinidad and Tobago',
                    'Tunisia',
                    'Turkey',
                    'Turkmenistan',
                    'Tuvalu',
                    'Uganda',
                    'Ukraine',
                    'United Arab Emirates',
                    'United Kingdom of Great Britain and Northern Ireland',
                    'United Republic of Tanzania',
                    'United States of America',
                    'Uruguay',
                    'Uzbekistan',
                    'Vanuatu',
                    'Venezuela (Bolivarian Republic of)',
                    'Viet Nam',
                    'Yemen',
                    'Zambia',
                    'Zimbabwe',
                ],
                stateOptions: [
                    { value: null, text: 'Select State' },
                    'Arizona',
                    'Chicago',
                ],

                worktypeOptions: [
                    { value: null, text: 'Select Work Type' },
                    'Engineer',
                    'Doctor',
                    'Scholar',
                ],
                industryOptions: [
                    { value: null, text: 'Select Industry' },
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
