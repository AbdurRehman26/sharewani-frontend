<template>
    <div>
        <b-modal
            id="modify-liveness-detection"
            title="Modify Liveness Detection"
            size="sm"
            okTitle="Update"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form class="modal-form-format">
                <div class="row">
                    <div class="col-md-12">
                        <b-form-group
                            class="mb-0"
                            id="input-group-1"
                            label="Liveness Detection Matched Threshold"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-1"
                                type="text"
                                v-model="form.liveness"
                                required
                                placeholder="Enter liveness detection"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                </div>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                liveness: '',
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
