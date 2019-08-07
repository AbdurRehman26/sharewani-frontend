<template>
    <div>
        <b-modal
            id="change-password-popup"
            title="Change Password"
            size="sm"
            okTitle="Submit"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form>
                <div class="row">
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-1"
                            label="Old Password"
                            label-for="old-password"
                        >
                            <b-form-input
                                id="old-password"
                                type="password"
                                v-model="form.oldPassword"
                                required
                                autocomplete="no"
                                placeholder="Enter old password"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-2"
                            label="New Password"
                            label-for="new-password"
                        >
                            <b-form-input
                                id="new-password"
                                type="password"
                                v-model="form.newPassword"
                                required
                                autocomplete="no"
                                placeholder="Create new password"
                            ></b-form-input>
                        </b-form-group>
                    </div>

                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-3"
                            label="Confirm Password"
                            label-for="confirm-password"
                        >
                            <b-form-input
                                id="confirm-password"
                                type="password"
                                v-model="form.confirmPassword"
                                required
                                autocomplete="no"
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
