<template>
    <div>
        <b-modal
            id="export-report"
            title="Export Report"
            size="md"
            okTitle="Submit"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <p>
                Would you like to download report data in Excel format or
                graphical charts as pdf?
            </p>

            <b-form>
                <b-form-group class="export-files">
                    <b-form-group class="mb-0">
                        <b-form-radio-group
                            v-model="exportType"
                            :options="form.exportType"
                            name="export"
                        ></b-form-radio-group>
                    </b-form-group>
                </b-form-group>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                exportType: [
                    {
                        text: 'Download report data in Excel format',
                        value: null,
                    },
                    'Download charts as PDF',
                ],
            },
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
