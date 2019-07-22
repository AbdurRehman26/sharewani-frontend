<template>
    <div>
        <b-modal
            id="kyc-status-review-popup"
            title="KYC Status Review"
            size="sm"
            okTitle="Submit"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form>
                <b-form-group
                    id="input-group-1"
                    label="KYC Update Date"
                    label-for="input-1"
                >
                    <VueCtkDateTimePicker
                        v-model="yourValue"
                        noHeader="false"
                        noLabel="false"
                        only-date="true"
                        no-button-now="false"
                    />
                    <!--  <b-form-input
                        id="input-1"
                        type="text"
                        v-model="form.kycUpdate"
                        required
                        placeholder="Search by first name"
                    ></b-form-input> -->
                </b-form-group>

                <div class="form-group">
                    <label>Risk Rating</label>
                    <tags
                        v-for="(list, index) in tags"
                        :key="index"
                        :statusType="list.actions"
                        :tagIcon="list.icon"
                        :tagHeading="list.headings"
                    ></tags>
                </div>

                <b-form-group
                    id="input-group-4"
                    class="kyc-status-radio"
                    label="KYC Status"
                    label-for="kyc-status"
                >
                    <b-form-group>
                        <b-form-radio-group
                            v-model="status"
                            :options="form.status"
                            name="status"
                        ></b-form-radio-group>
                    </b-form-group>
                </b-form-group>

                <div class="form-group">
                    <label for="kyc-status">KYC Comments</label>
                    <textarea
                        class="form-control"
                        placeholder="Start typing your KYC Comments"
                        rows="3"
                    ></textarea>
                </div>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
import tags from '@/components/Tags.vue'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'
export default {
    components: {
        tags,
        VueCtkDateTimePicker,
    },
    data() {
        return {
            form: {
                kycUpdate: '',
                comments: '',

                status: [
                    { text: 'Pending Review', value: null },
                    'Accepted',
                    'Rejected',
                    'Re-submit documents',
                ],
            },

            tags: [
                {
                    headings: 'Sanctioned',
                    icon: 'icon-graph',
                    actions: 'Rejected',
                },
            ],

            yourValue: null,
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
