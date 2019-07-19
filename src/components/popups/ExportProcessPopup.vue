<template>
    <div>
        <b-modal
            id="export-process-popup"
            ref="my-modal"
            size="sm"
            okTitle="Close"
            cancelTitle="Cancel Export Process"
            cancelVariant="link"
        >
            <div slot="modal-header" class="w-100 archive-popup">
                <h5 class="modal-title">{{ title }}</h5>
                <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    @click="hideModal"
                >
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="export-process">
                <excel-icon></excel-icon>
                <label>{{ totalExport }}</label>
                <div class="loading">
                    <img :src="require('@/assets/images/loader.svg')" />
                </div>
                <p>
                    Your data is being exported now. Once this process completed
                    we will send you report via email.
                </p>
            </div>
        </b-modal>
    </div>
</template>

<script>
import excelIcon from '@/components/icons/ExcelIcon.vue'
export default {
    components: {
        excelIcon,
    },

    props: {
        /**
         * Value to determine the current compose mode which
         * varies between 'add' and 'edit'
         */
        mode: {
            type: String,
            default: 'add',
        },
        title: {
            type: String,
            default: null,
        },

        totalExport: {
            type: String,
            default: null,
        },
    }, //
    data() {
        return {}
    },
    methods: {
        hideModal() {
            this.$refs['my-modal'].hide()
        },
        /**
         * Handle when the modal is canceled
         *
         * @return {void}
         */
    },
}
</script>
