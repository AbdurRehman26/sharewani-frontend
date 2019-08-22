<template>
    <div>
        <b-modal
            id="update-profile-popup"
            title="Update Profile"
            size="sm"
            okTitle="Update"
            cancelTitle="Cancel"
            cancelVariant="link"
            no-close-on-backdrop
        >
            <b-form>
                <div class="row">
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-1"
                            label="User Name"
                            label-for="user-name"
                        >
                            <b-form-input
                                id="user-name"
                                type="text"
                                v-model="form.userName"
                                required
                                autocomplete="no"
                                placeholder="Enter user name"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-12 row-min-space">
                        <div class="row">
                            <div class="col-md-6">
                                <b-form-group
                                    id="input-group-2"
                                    label="First Name"
                                    label-for="first-name"
                                >
                                    <b-form-input
                                        id="first-name"
                                        type="text"
                                        v-model="form.firstName"
                                        required
                                        autocomplete="no"
                                        placeholder="Enter first name"
                                    ></b-form-input>
                                </b-form-group>
                            </div>

                            <div class="col-md-6">
                                <b-form-group
                                    id="input-group-3"
                                    label="Last Name"
                                    label-for="last-name"
                                >
                                    <b-form-input
                                        id="last-name"
                                        type="password"
                                        v-model="form.lastName"
                                        required
                                        autocomplete="no"
                                        placeholder="Enter last name"
                                    ></b-form-input>
                                </b-form-group>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-4"
                            label="Email Address"
                            label-for="email-address"
                        >
                            <b-form-input
                                id="email-address"
                                type="email"
                                v-model="form.email"
                                required
                                autocomplete="no"
                                placeholder="Enter email address"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-5"
                            label="Profile Picture"
                            label-for="profile-picture"
                        >
                            <b-form-file
                                id="profile-picture"
                                v-model="form.upload"
                                accept="image/jpeg, image/png"
                                placeholder="Choose image file to upload"
                                drop-placeholder="Drop file here..."
                            ></b-form-file>
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
                email: '',
                upload: '',
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
