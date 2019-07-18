<template>
    <div>
        <b-modal
            id="add-work-popup"
            title="Add Work Type Factor"
            size="sm"
            okTitle="Create"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form>
                <div class="row">
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-1"
                            label="Work Type Code"
                            label-for="work-type-code"
                        >
                            <b-form-input
                                id="work-type-code"
                                type="text"
                                v-model="form.workCode"
                                required
                                placeholder="Enter work type code"
                            ></b-form-input>
                        </b-form-group>
                    </div>

                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-2"
                            label="Work Type Title"
                            label-for="work-type-title"
                        >
                            <b-form-input
                                id="work-type-title"
                                type="text"
                                v-model="form.workTitle"
                                required
                                placeholder="Enter work type title"
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
                workCode: '',
                workTitle: '',
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
