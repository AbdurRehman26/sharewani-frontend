<template>
    <div>
        <b-modal
            id="modify-status-popup"
            title="Add Nationality Factor"
            size="sm"
            okTitle="Update"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <div slot="modal-header" class="w-100 archive-popup">
                <h5 class="modal-title">{{ modalTitle }}</h5>
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
            <b-form>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>{{ modalLabel }}</label>
                            <b-form-select
                                id="rating"
                                class="form-control"
                                v-model="form.status"
                                :options="status"
                            ></b-form-select>
                        </div>
                    </div>
                </div>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
export default {
    props: {
        /**
         * Value to determine the current compose mode which
         * varies between 'add' and 'edit'
         */
        mode: {
            type: String,
            default: 'add',
        },
        modalTitle: {
            type: String,
            default: null,
        },

        modalLabel: {
            type: String,
            default: null,
        },
    }, //
    data() {
        return {
            form: {
                status: null,
            },

            status: [
                { value: null, text: 'Select Status' },
                'Active',
                'Inactive',
            ],
        }
    },
    methods: {
        /**
         * Handle when the modal is canceled
         *
         * @return {void}
         */

        hideModal() {
            this.$refs['my-modal'].hide()
        },
    },
}
</script>
