<template>
    <div>
        <b-modal
            id="add-role-popup"
            title="Add Role"
            size="lg"
            okTitle="Create"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form>
                <div class="scrollable" id="style-2">
                    <div class="row">
                        <div class="col-md-6">
                            <b-form-group
                                id="input-group-1"
                                label="Role Title"
                                label-for="role-title"
                            >
                                <b-form-input
                                    id="role-title"
                                    type="text"
                                    v-model="form.roleTitle"
                                    required
                                    placeholder="Enter role title"
                                ></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-md-12 scale-type">
                            <h4>Permissions</h4>
                        </div>
                        <div class="col-md-12"></div>
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
                roleTitle: '',
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
