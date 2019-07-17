<template>
    <div>
        <b-modal
            id="change-password"
            title="Change Password"
            size="sm"
            okTitle="Submit"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form class="modal-form-format">
                <div class="row">
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-1"
                            label="Old Password"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-1"
                                type="password"
                                v-model="form.oldPassword"
                                required
                                placeholder="Enter old password"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-2"
                            label="New Password"
                            label-for="input-2"
                        >
                            <b-form-input
                                id="input-2"
                                type="password"
                                v-model="form.newPassword"
                                required
                                placeholder="Create new password"
                            ></b-form-input>
                        </b-form-group>
                    </div>

                    <div class="col-md-12">
                        <b-form-group
                            class="mb-0"
                            id="input-group-3"
                            label="Confirm Password"
                            label-for="input-3"
                        >
                            <b-form-input
                                id="input-23"
                                type="password"
                                v-model="form.confirmPassword"
                                required
                                placeholder="Re-enter new password"
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
                oldPassword: '',
                newPassword: '',
                confirmPassword: '',
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
