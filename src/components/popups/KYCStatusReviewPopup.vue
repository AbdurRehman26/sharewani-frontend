<template>
    <div>
        <b-modal
            id="kyc-status-review-popup"
            title="KYC Status Review"
            size="sm"
            okTitle="Submit"
            cancelTitle="Cancel"
            cancelVariant="link"
            no-close-on-backdrop
        >
            <b-form>
                <b-form-group
                    id="input-group-1"
                    label="KYC Update Date"
                    label-for="input-1"
                >
                    <date-time-picker
                        dateFormat="DD/MM/YYYY/ hh:mm A"
                        formatVal="DD/MM/YYYY/ hh:mm A"
                        placeholder="Select date time"
                    ></date-time-picker>
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

                <b-form-group
                    id="input-group-6"
                    label="Attach Document"
                    label-for="documentAttach"
                >
                    <b-form-file
                        v-model="form.documentAttach"
                        accept="image/jpeg, image/png"
                        placeholder="Choose a file to attach with review"
                        drop-placeholder="Drop file here..."
                    ></b-form-file>
                </b-form-group>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
import tags from '@/components/Tags.vue'
import dateTimePicker from '@/components/DateTimePicker.vue'

export default {
    components: {
        tags,
        dateTimePicker,
    },
    data() {
        return {
            status: null,
            form: {
                kycUpdate: '',
                comments: '',
                documentAttach: null,
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
    methods: {},
}
</script>
