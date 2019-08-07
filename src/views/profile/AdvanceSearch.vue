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
                                autocomplete="no"
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
                                autocomplete="no"
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
                                autocomplete="no"
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
                gender: null,
                nationality: null,
                residence: null,
                workType: null,
                industry: null,
                status: null,
                hitType: null,
                ratingLevel: null,
                type: null,
                productType: null,

                genderOptions: [
                    { text: 'Select gender', value: null },
                    'Male',
                    'Female',
                    'Not Applicable',
                ],

                channel: [
                    { text: 'All', value: null },
                    'Face-To-Face',
                    'Not-Face-To-Face',
                ],
            },

            workType: [
                { value: null, text: 'Select Work Type', disabled: true },
                'Self-Employed / Business Owner',
                'Salaried-Executive Level',
                'Salaried-General',
                'Homemaker',
                'Student',
                'Unemployed',
                'Retired',
            ],
            industry: [
                { value: null, text: 'Select Industry', disabled: true },
                'Automotive Industry',
                'Textile Industry',
                'Agriculture, forestry and fishing',
                'Mining and quarrying',
                'Manufacturing',
                'Electricity, gas, steam and air conditioning supply',
                'Water supply, sewerage, waste management',
                'Construction',
                'Wholesale and retail trade, repair of motor vehicles',
                'Transportation and storage',
                'Accommodation and food service activities',
                'Information and communication',
                'Financial and insurance activities',
                'Real estate activities',
                'Professional, scientific and technical activities',
                'Administrative and support service activities',
                'Public administration and defence, compulsory social security',
                'Education',
                'Human health and social work activities',
                'Arts, entertainment and recreation',
                'Other service activities',
                'Activities of households as employers',
                'Activities of extraterritorial organizations and bodies',
            ],
            nationality: [
                { value: null, text: 'Select Nationality', disabled: true },
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

            residence: [
                {
                    value: null,
                    text: 'Select Country of Residence',
                    disabled: true,
                },

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

            status: [
                { value: null, text: 'Select KYC Status' },
                'Approved',
                'Pending',
                'Reject',
            ],

            hitType: [
                { value: null, text: 'Select Name Screening Hit Type' },
                'PEP hit',
                'Enforcement hit',
                'Blacklist hit',
                'Sanction hit',
            ],
            ratingLevel: [
                { value: null, text: 'Select Risk Rating Level' },
                'High Risk',
                'Medium Risk',
                'Low Risk',
            ],
            type: [
                { value: null, text: 'Select ID Type' },
                'Passport',
                'Driving Licence',
                'National ID card',
            ],
            productType: [
                { value: null, text: 'Select Product Type' },
                'Current Account',
                'Saving Account',
                'Credit Card',
                'Short Term Loan',
                'Financial Investment',
            ],
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
