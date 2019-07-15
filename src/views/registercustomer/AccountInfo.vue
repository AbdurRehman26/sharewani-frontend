<template>
    <div class="wrap-content customer-section">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-4">
                    <h2>Register Customers</h2>
                </div>
            </div>
        </div>
        <div class="card">
            <b-form class="step-form">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="fields-area">
                            <div class="row">
                                <div class="col-lg-12">
                                    <h3>Account Information</h3>
                                </div>
                                <div class="col-md-4">
                                    <b-form-group
                                        id="input-group-5"
                                        label="Account Opening Date"
                                        label-for="accountopening"
                                    >
                                        <div class="form-group date-pickers">
                                            <i class="icon-calendar"></i>
                                            <datepicker
                                                placeholder="10 / 06 / 2019"
                                            ></datepicker>
                                        </div>
                                    </b-form-group>
                                </div>
                                <div class="col-md-4">
                                    <b-form-group
                                        id="input-group-5"
                                        label="Purpose of action"
                                        label-for="purposeaction"
                                    >
                                        <b-form-select
                                            class="form-control"
                                            v-model="form.purposeaction"
                                            :options="form.purposeactionOptions"
                                        ></b-form-select>
                                    </b-form-group>
                                </div>
                                <div class="col-md-4">
                                    <b-form-group
                                        id="input-group-1"
                                        label="Planned Investment Amount"
                                        label-for="invesmentamount"
                                        class="rangeto"
                                    >
                                        <div class="row">
                                            <div class="col-md-6">
                                                <b-form-input
                                                    id="startrange"
                                                    type="number"
                                                    v-model="form.startrange"
                                                    required
                                                    placeholder="Start Range"
                                                ></b-form-input>
                                            </div>
                                            <span>to</span>
                                            <div class="col-md-6">
                                                <b-form-input
                                                    id="endrange"
                                                    type="number"
                                                    v-model="form.endrange"
                                                    required
                                                    placeholder="End Range"
                                                ></b-form-input>
                                            </div>
                                        </div>
                                    </b-form-group>
                                </div>
                                <div class="col-md-4">
                                    <b-form-group
                                        id="input-group-6"
                                        label="SYSTEM HOLDING"
                                        label-for="currency"
                                    >
                                        <b-form-select
                                            class="form-control"
                                            v-model="form.currency"
                                            :options="form.currencyOptions"
                                        ></b-form-select>
                                    </b-form-group>
                                </div>
                                <div class="col-md-4">
                                    <b-form-group
                                        id="input-group-6"
                                        label="Product Type"
                                        label-for="producttype"
                                    >
                                        <b-form-select
                                            class="form-control"
                                            v-model="form.productType"
                                            :options="form.productTypeOptions"
                                        ></b-form-select>
                                    </b-form-group>
                                </div>
                                <div class="col-md-4">
                                    <b-form-group
                                        id="input-group-3"
                                        label="WALLET ID"
                                        label-for="input-3"
                                    >
                                        <b-form-input
                                            id="input-3"
                                            type="text"
                                            v-model="form.walletId"
                                            required
                                            placeholder="Enter wallet id"
                                        ></b-form-input>
                                    </b-form-group>
                                </div>
                            </div>
                        </div>
                        <base-button
                            btnType="submit"
                            btnVariant="primary"
                            btnLabel="CONTINUE"
                            @click="$router.push('/register-customer/finish')"
                        ></base-button>
                    </div>
                </div>
            </b-form>
        </div>
    </div>
</template>
<script>
import Datepicker from 'vuejs-datepicker'
export default {
    components: {
        Datepicker,
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
                purposeaction: null,
                currency: null,
                productType: null,
                startrange: '',
                endrange: '',
                walletId: '',
                purposeactionOptions: [
                    {
                        value: null,
                        text: 'Select why did customer opened account',
                    },
                    'For Business Purpose',
                    'For Saving Purpose',
                ],
                currencyOptions: [
                    {
                        value: null,
                        text: 'Select currency',
                    },
                    'USD',
                    'UK',
                ],
                productTypeOptions: [
                    {
                        value: null,
                        text: 'Select product type',
                    },
                    'Cosmetics',
                    'Guns',
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
    methods: {}, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {}, // End of Component > mounted
} // End of export default
</script>
