<template>
    <div>
        <b-modal
            id="add-heading-popup"
            title="Add Heading"
            size="sm"
            okTitle="Add"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form>
                <div class="row">
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-1"
                            label="Title"
                            label-for="title"
                        >
                            <b-form-input
                                id="title"
                                type="text"
                                v-model="form.countryCode"
                                required
                                autocomplete="no"
                                placeholder="Enter title"
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
                countryCode: '',
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
