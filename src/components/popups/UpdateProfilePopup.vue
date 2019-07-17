<template>
    <div>
        <b-modal
            id="update-profile"
            title="Update Profile"
            size="sm"
            okTitle="Update"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form class="modal-form-format">
                <div class="row">
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-1"
                            label="User Name"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-1"
                                type="text"
                                v-model="form.userName"
                                required
                                placeholder="Enter user name"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6">
                        <b-form-group
                            id="input-group-2"
                            label="First Name"
                            label-for="input-2"
                        >
                            <b-form-input
                                id="input-2"
                                type="text"
                                v-model="form.firstName"
                                required
                                placeholder="Enter first name"
                            ></b-form-input>
                        </b-form-group>
                    </div>

                    <div class="col-md-6">
                        <b-form-group
                            class="mb-0"
                            id="input-group-3"
                            label="Last Name"
                            label-for="input-3"
                        >
                            <b-form-input
                                id="input-3"
                                type="password"
                                v-model="form.lastName"
                                required
                                placeholder="Enter last name"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-1"
                            label="User Name"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-1"
                                type="email"
                                v-model="form.email"
                                required
                                placeholder="Enter email address"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            class="mb-0"
                            id="input-group-6"
                            label="Profile Picture"
                            label-for="documentScan"
                        >
                            <b-form-file
                                v-model="documentScanCopy"
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
