<template>
    <div>
        <b-modal
            id="modify-score"
            title="Modify DB3 Score"
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
                            label="If Year Of Birth Is +1/-1"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-1"
                                type="text"
                                v-model="form.birth"
                                required
                                placeholder="Enter year of birth"
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
                birth: '',
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
