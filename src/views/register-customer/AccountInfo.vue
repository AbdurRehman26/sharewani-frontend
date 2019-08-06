<template>
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
                                label="Purpose of action"
                                label-for="purpose-action"
                            >
                                <b-form-select
                                    id="purpose-action"
                                    class="form-control"
                                    v-model="form.purposeaction"
                                    autocomplete="no"
                                    :options="form.purposeactionOptions"
                                ></b-form-select>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="data-segments">Product Type</label>
                                <multiselect
                                    v-model="productType"
                                    label="name"
                                    placeholder="Select product type"
                                    track-by="code"
                                    :options="options"
                                    :multiple="true"
                                    :taggable="true"
                                    @tag="addTag"
                                ></multiselect>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                label="Expected Monthly Credit TurnOver"
                                label-for="credit-turnover"
                            >
                                <b-form-input
                                    id="credit-turnover"
                                    type="text"
                                    v-model="form.monthlyCredit"
                                    required
                                    autocomplete="no"
                                    placeholder="Enter expected monthly credit turnover"
                                ></b-form-input>
                            </b-form-group>
                        </div>

                        <div class="col-md-8">
                            <b-form-group
                                label="Maxiumum Upper Limit of Single Credit Expected in a Month"
                                label-for="expectation-in-month"
                            >
                                <b-form-input
                                    id="expectation-in-month"
                                    type="text"
                                    v-model="form.monthlyExpectation"
                                    required
                                    autocomplete="no"
                                    placeholder="Enter Maxiumum upper limit of single credit expected in a month"
                                ></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-md-4">
                            <b-form-group
                                label="Gross Income of client"
                                label-for="gross-income"
                            >
                                <b-form-input
                                    id="gross-income"
                                    type="text"
                                    v-model="form.grossIncome"
                                    required
                                    autocomplete="no"
                                    placeholder="Enter gross income of client"
                                ></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-md-8">
                            <b-form-group
                                label="Initial Balance"
                                label-for="initial-balance"
                            >
                                <b-form-input
                                    id="initial-balance"
                                    type="text"
                                    v-model="form.initialBalance"
                                    required
                                    autocomplete="no"
                                    placeholder="Enter Initial balance (expected within 30 days of account opening)"
                                ></b-form-input>
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
import Multiselect from 'vue-multiselect'
export default {
    components: {
        Multiselect,
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
                monthlyCredit: '',
                monthlyExpectation: '',
                grossIncome: '',
                purposeactionOptions: [
                    {
                        value: null,
                        text: 'Select why did customer opened account',
                    },
                    'For Business Purpose',
                    'For Saving Purpose',
                ],

                productSelected: ['Saving Account', 'Current Account'],
                initialBalance: '',
            },

            productType: [
                { name: 'Saving Account', code: 'savingAccount' },
                { name: 'Current Account', code: 'currentAccount' },
            ],
            options: [
                { name: 'Saving Account', code: 'savingAccount' },
                { name: 'Current Account', code: 'currentAccount' },
                { name: 'Credit Card', code: 'creditCard' },
                { name: 'Short Term Loan', code: 'shortLoan' },
                { name: 'Financial Investment', code: 'financialInvestment' },
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
    methods: {
        linking() {
            if (this.$route.meta.publicRegistration === true) {
                this.$router.push('/public-registration/finish')
            } else {
                this.$router.push('/register-customer/finish')
            }
        },

        addTag(newTag) {
            const tag = {
                name: newTag,
                code:
                    newTag.substring(0, 2) +
                    Math.floor(Math.random() * 10000000),
            }
            this.options.push(tag)
            this.value.push(tag)
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
