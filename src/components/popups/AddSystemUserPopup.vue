<template>
    <div>
        <b-modal
            id="add-system-user-popup"
            title="Add System User"
            size="sm"
            okTitle="Update"
            cancelTitle="Cancel"
            cancelVariant="link"
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
                                placeholder="Enter user name"
                            ></b-form-input>
                        </b-form-group>
                    </div>
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
                                placeholder="Enter last name"
                            ></b-form-input>
                        </b-form-group>
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
                                placeholder="Enter email address"
                            ></b-form-input>
                        </b-form-group>
                    </div>

                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-3"
                            label="Role"
                            label-for="role"
                        >
                            <b-form-select
                                id="role"
                                class="form-control"
                                v-model="form.role"
                                :options="role"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Data Segments</label>
                            <v-selectize
                                :options="options"
                                v-model="selected"
                                multiple
                            />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <i class=""></i>
                        <p>
                            We will send email to user to create password and
                            activate account.
                        </p>
                    </div>
                </div>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
import VSelectize from '@isneezy/vue-selectize'
export default {
    components: { VSelectize },

    data() {
        return {
            form: {
                oldPassword: '',
                newPassword: '',
                confirmPassword: '',
                email: '',
                role: null,
            },

            role: [
                { value: null, text: 'Select Role' },
                'Super Admin',
                'Maker',
                'Checker',
                'Approver',
                'Relationship Manager',
            ],

            options: ['pk', 'uae', 'usa', 'uk'],
            selected: ['pk', 'uae'],
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
