<template>
    <div class="wrap-content">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-4">
                    <h2>Branding Configurations</h2>
                </div>
            </div>
        </div>

        <div class="config-card-switch">
            <div class="row">
                <div class="col-md-12">
                    <div class="card custom-card">
                        <div class="fields-area">
                            <div class="brand-logo-area">
                                <h5>
                                    Brand Logo
                                </h5>
                                <div class="row">
                                    <div class="col-md-9">
                                        <b-form-group
                                            id="input-group-6"
                                            label="LOGO FOR LIGHT BACKGROUND"
                                            label-for="documentScan"
                                        >
                                            <b-form-file
                                                id="documentScan"
                                                @change="uploadLogoOne"
                                                accept="image/jpeg, image/png"
                                                placeholder="Choose transparent logo image file (PNG)"
                                                drop-placeholder="Drop file here..."
                                            ></b-form-file>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="brand-logo light">
                                            <div
                                                class="logo-area-preview"
                                                v-bind:style="{
                                                    'background-image':
                                                        'url(' +
                                                        logoLight +
                                                        ')',
                                                }"
                                            ></div>
                                        </div>
                                    </div>
                                    <div class="col-md-9">
                                        <b-form-group
                                            id="input-group-6"
                                            label="LOGO FOR DARK BACKGROUND"
                                            label-for="documentBg"
                                        >
                                            <b-form-file
                                                id="documentBg"
                                                @change="uploadLogoTwo"
                                                accept="image/jpeg, image/png"
                                                placeholder="Choose transparent logo image file (PNG)"
                                                drop-placeholder="Drop file here..."
                                            ></b-form-file>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="brand-logo dark">
                                            <div
                                                class="logo-area-preview"
                                                v-bind:style="{
                                                    'background-image':
                                                        'url(' + logoDark + ')',
                                                }"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="fields-area">
                            <div class="brand-color-area">
                                <h5>
                                    Brand Colors
                                </h5>
                                <div class="row">
                                    <div class="col-md-6">
                                        <b-form-group
                                            id="input-group-6"
                                            label="PRIMARY COLOR CODE"
                                            label-for="primary-code"
                                        >
                                            <div class="color-area">
                                                <b-form-input
                                                    id="primary-code"
                                                    type="text"
                                                    v-model="primaryColor"
                                                    placeholder="Primary Color"
                                                ></b-form-input>
                                                <b-form-input
                                                    type="color"
                                                    v-model="primaryColor"
                                                ></b-form-input>
                                                <div class="input-color">
                                                    <div
                                                        class="color-pallet"
                                                        v-bind:style="{
                                                            'background-color':
                                                                '' +
                                                                primaryColor +
                                                                '',
                                                        }"
                                                    ></div>
                                                    <i
                                                        class="icon-color-picker"
                                                    ></i>
                                                </div>
                                            </div>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-6">
                                        <b-form-group
                                            id="input-group-6"
                                            label="SECONDARY COLOR CODE"
                                            label-for="secondary-code"
                                        >
                                            <div class="color-area">
                                                <b-form-input
                                                    id="secondary-code"
                                                    type="text"
                                                    v-model="secondaryColor"
                                                    placeholder="Secondary Color"
                                                ></b-form-input>
                                                <b-form-input
                                                    type="color"
                                                    v-model="secondaryColor"
                                                ></b-form-input>
                                                <div class="input-color">
                                                    <div
                                                        class="color-pallet"
                                                        v-bind:style="{
                                                            'background-color':
                                                                '' +
                                                                secondaryColor +
                                                                '',
                                                        }"
                                                    ></div>
                                                    <i
                                                        class="icon-color-picker"
                                                    ></i>
                                                </div>
                                            </div>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-6">
                                        <b-form-group
                                            id="input-group-6"
                                            label="INTERFACE DARK COLOR CODE"
                                            label-for="interface-dark-code"
                                        >
                                            <div class="color-area">
                                                <b-form-input
                                                    id="interface-dark-code"
                                                    type="text"
                                                    v-model="darkColor"
                                                    placeholder="Secondary Color"
                                                ></b-form-input>
                                                <b-form-input
                                                    type="color"
                                                    v-model="darkColor"
                                                ></b-form-input>
                                                <div class="input-color">
                                                    <div
                                                        class="color-pallet"
                                                        v-bind:style="{
                                                            'background-color':
                                                                '' +
                                                                darkColor +
                                                                '',
                                                        }"
                                                    ></div>
                                                    <i
                                                        class="icon-color-picker"
                                                    ></i>
                                                </div>
                                            </div>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-6">
                                        <b-form-group
                                            id="input-group-6"
                                            label="INTERFACE DARK MEDIUM DARK COLOR CODE"
                                            label-for="interface-medium-code"
                                        >
                                            <div class="color-area">
                                                <b-form-input
                                                    id="interface-medium-code"
                                                    type="text"
                                                    v-model="darkMediumColor"
                                                    placeholder="Secondary Color"
                                                ></b-form-input>
                                                <b-form-input
                                                    type="color"
                                                    v-model="darkMediumColor"
                                                ></b-form-input>
                                                <div class="input-color">
                                                    <div
                                                        class="color-pallet"
                                                        v-bind:style="{
                                                            'background-color':
                                                                '' +
                                                                darkMediumColor +
                                                                '',
                                                        }"
                                                    ></div>
                                                    <i
                                                        class="icon-color-picker"
                                                    ></i>
                                                </div>
                                            </div>
                                        </b-form-group>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <base-button
                                    btnVariant="primary"
                                    btnLabel="UPDATE"
                                ></base-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            logoLight: '/logo-light.png',
            logoDark: '/logo-dark.png',
            primaryColor: '#662d91',
            secondaryColor: '#b35fa5',
            darkColor: '#22003c',
            darkMediumColor: '#3c1559',
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
        uploadLogoOne(e) {
            const image = e.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(image)
            reader.onload = (e) => {
                this.logoLight = e.target.result
                console.log(this.logoLight)
            }
        },
        uploadLogoTwo(e) {
            const image = e.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(image)
            reader.onload = (e) => {
                this.logoDark = e.target.result
                console.log(this.logoDark)
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
