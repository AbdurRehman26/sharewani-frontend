<template>
    <div class="wrap-content">
        <div class="filter-section alert-filter row-min-space">
            <div class="row">
                <div class="col-md-12">
                    <h2>Alerts</h2>
                </div>
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-11">
                            <div class="row">
                                <div class="col-xs-12 col-md-3 tabs-bar">
                                    <b-form-group>
                                        <b-form-radio-group
                                            v-model="selected"
                                            :options="options"
                                            buttons
                                            button-variant="outline-primary"
                                            :name="filterName"
                                        ></b-form-radio-group>
                                    </b-form-group>
                                </div>
                                <div class="col-xs-12 col-md-9">
                                    <div class="row">
                                        <div class="col-xs-12 col-md-3">
                                            <base-search></base-search>
                                        </div>
                                        <div class="col-xs-12 col-md-3">
                                            <b-form-group>
                                                <b-form-select
                                                    id="input-3"
                                                    class="form-control"
                                                    v-model="filterByAlert"
                                                    :options="
                                                        filterAlertOptions
                                                    "
                                                    required
                                                ></b-form-select>
                                            </b-form-group>
                                        </div>
                                        <div class="col-xs-12 col-md-3">
                                            <b-form-group>
                                                <b-form-select
                                                    id="input-3"
                                                    class="form-control"
                                                    v-model="filterByRiskLevel"
                                                    :options="
                                                        filterRiskLevelOptions
                                                    "
                                                    required
                                                ></b-form-select>
                                            </b-form-group>
                                        </div>
                                        <div class="col-xs-12 col-md-3">
                                            <b-form-group>
                                                <b-form-select
                                                    id="input-3"
                                                    class="form-control"
                                                    v-model="filterByAging"
                                                    :options="
                                                        filterAgingOptions
                                                    "
                                                    required
                                                ></b-form-select>
                                            </b-form-group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-1">
                            <div class="form-group">
                                <base-button
                                    btnLabel="Apply"
                                    btnType="submit"
                                    btnVariant="primary"
                                ></base-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-section table-min-width">
            <!--main table -->
            <b-table v-if="fields.length > 0" :items="items" :fields="fields">
                <template slot="aging" slot-scope="data">
                    <span :class="data.value[0].riskRate">
                        {{ data.value[0].name }}
                    </span>
                </template>

                <template slot="alerts" slot-scope="data">
                    <div
                        class="bar-line"
                        :class="data.value[0].riskRate"
                        v-b-tooltip.hover
                        :title="data.value[0].riskRate + ' Risk'"
                    ></div>
                    <div class="indecation">
                        <router-link
                            to="/customer-profiles/customer-information"
                        >
                            <i
                                v-if="data.value[0].riskType == 'flag'"
                                class="icon-flag"
                                v-b-tooltip.hover
                                :title="' Trigger alert'"
                            ></i>
                            <i
                                v-if="data.value[0].riskType == 'reload'"
                                class="icon-rotate-inverse"
                                v-b-tooltip.hover
                                :title="' Periodic alert'"
                            ></i>
                            <i
                                v-if="data.value[0].riskType == 'rating'"
                                class="icon-star"
                                v-b-tooltip.hover
                                :title="' Onboarding alert '"
                            ></i>
                            <i
                                v-if="data.value[0].riskType == 'manual'"
                                class="icon-manual-alert"
                                v-b-tooltip.hover
                                :title="' Manual alert '"
                            ></i>
                        </router-link>
                    </div>
                </template>
                <template slot="customer" slot-scope="data">
                    <router-link to="/customer-profiles/customer-information">{{
                        data.value
                    }}</router-link>
                </template>
                <template slot="full_name" slot-scope="data">
                    <router-link to="/customer-profiles/customer-information">{{
                        data.value
                    }}</router-link>
                </template>
                <template slot="nationality" slot-scope="data">
                    <router-link to="/customer-profiles/customer-information">{{
                        data.value
                    }}</router-link>
                </template>
                <template slot="profile" slot-scope="data">
                    <div class="profile-area">
                        <router-link
                            to="/customer-profiles/customer-information"
                        >
                            <div
                                class="profile-pic"
                                :style="{
                                    'background-image':
                                        'url(' +
                                        require('@/assets/images/members/' +
                                            data.value +
                                            '') +
                                        ')',
                                }"
                            ></div>
                        </router-link>
                    </div>
                </template>
                <template slot="name_screening" slot-scope="data">
                    <status-type-icon
                        :statusType="data.value"
                    ></status-type-icon>
                </template>
                <template slot="documentation" slot-scope="data">
                    <status-type-icon
                        :statusType="data.value"
                    ></status-type-icon>
                </template>
                <template slot="risk_rating" slot-scope="data">
                    <status-type-icon
                        :statusType="data.value"
                    ></status-type-icon>
                </template>

                <template slot="action" slot-scope="data">
                    <div class="action-review">
                        <base-action
                            v-if="data.value == 'in review'"
                            icon="icon-lock_outline"
                            class="disable-color"
                            label="In Review"
                            v-b-tooltip.hover
                            title="Reviewing by Andrew John"
                            v-b-modal.initiate-review
                        ></base-action>
                        <base-action
                            v-if="data.value == 'review'"
                            icon="icon-review"
                            label="Review"
                            @click="initialReview"
                            v-b-modal.initiate-review
                        ></base-action>
                    </div>
                </template>
            </b-table>
            <!-- When data is loading -->
            <base-table-spinner v-if="items.length == 0"></base-table-spinner>
            <!-- When record not found -->
            <base-no-record-found
                v-if="items.length == 0"
            ></base-no-record-found>
        </div>
        <pagination
            totalRecords="Showing 1 to 10 of 42 records"
            :showRecords="recordShow"
            v-if="items.length > 0"
        ></pagination>
        <initiate-review-popup></initiate-review-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import pagination from '@/components/Pagination.vue'
import statusTypeIcon from '@/components/AlertType.vue'
import initiateReviewPopup from '@/components/popups/InitiateReviewPopup.vue'
export default {
    components: {
        pagination,
        initiateReviewPopup,
        statusTypeIcon,
    },

    /*
    |--------------------------------------------------------------------------
    | Component > props
    |--------------------------------------------------------------------------
    */
    props: {}, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            selected: '1',
            fields: [],
            items: [],
            options: [
                { text: 'All', value: '1' },
                { text: 'Pending', value: '2' },
                { text: 'In Review', value: '3' },
            ],
            filterName: null,
            filterByAlert: null,
            filterAlertOptions: [
                { text: 'Filter by alert type', value: null },
                'Onboarding alert',
                'Periodic alert',
                'Trigger alert',
                'Manual alert',
            ],
            filterByRiskLevel: null,
            filterRiskLevelOptions: [
                { text: 'Filter by risk level', value: null },
                'High Risk',
                'Medium Risk',
                'Low Risk',
                'Sanctioned Risk',
            ],
            filterByAging: null,
            filterAgingOptions: [
                { text: 'Filter by aging', value: null },
                '0-30 days',
                '31-60 days',
                '61-90 days',
                '91+ days',
            ],
            recordShow: [
                { text: 'Show 10 records', value: null },
                { text: 'Show 20 records', value: 20 },
                { text: 'Show 30 records', value: 20 },
                { text: 'Show 40 records', value: 20 },
                { text: 'Show 50 records', value: 20 },
            ],
        }
    }, // End of Component > data

    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: { ...mapGetters(['dashboardData']) }, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        initializeData() {
            //system log table
            let tableFields = this.dashboardData.alertsTable.fields //get user data from store
            this.fields = tableFields //push data into array
            let tableItems = this.dashboardData.alertsTable.items //get user data from store
            this.items = tableItems //push data into array
        },

        initialReview() {
            this.$bvModal.show('initiate-review-popup')
        },
    }, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {
        this.initializeData()
    }, // End of Component > mounted
} // End of export default
</script>
