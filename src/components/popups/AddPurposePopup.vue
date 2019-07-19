<template>
    <div>
        <b-modal
            id="add-purpose-popup"
            title="Add Purpose of Action"
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
                            label="Purpose of Action Code"
                            label-for="purpose-code"
                        >
                            <b-form-input
                                id="purpose-code"
                                type="text"
                                v-model="form.purposeCode"
                                required
                                placeholder="Enter purpose of action code"
                            ></b-form-input>
                        </b-form-group>
                    </div>

                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-2"
                            label="Purpose of Action Title"
                            label-for="work-type-title"
                        >
                            <b-form-input
                                id="work-type-title"
                                type="text"
                                v-model="form.purposeTitle"
                                required
                                placeholder="Enter purpose of action title"
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
                purposeCode: '',
                purposeTitle: '',
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
