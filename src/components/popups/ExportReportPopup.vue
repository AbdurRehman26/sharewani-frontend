<template>
    <div>
        <b-modal
            id="export-report-popup"
            title="Export Report"
            size="sm"
            okTitle="Download"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <p>
                Would you like to download report data in Excel format or
                graphical charts as pdf?
            </p>

            <b-form>
                <div class="export-radio-section">
                    <div class="icon-section">
                        <div class="excel-icons">
                            <excel-icon></excel-icon>
                        </div>
                        <div class="pdf-icons">
                            <pdf-icon></pdf-icon>
                        </div>
                    </div>
                    <div class="export-form-section">
                        <b-form-group class="export-files">
                            <b-form-radio-group
                                v-model="exportType"
                                :options="form.exportType"
                                name="export"
                            ></b-form-radio-group>
                        </b-form-group>
                    </div>
                </div>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
import excelIcon from '@/components/icons/ExcelIcon.vue'
import pdfIcon from '@/components/icons/PdfIcon.vue'
export default {
    components: {
        excelIcon,
        pdfIcon,
    },
    data() {
        return {
            exportType: null,
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
