<template>
    <div>
        <b-modal
            id="add-system-user-popup"
            :title="title"
            size="sm"
            :okTitle="buttonText"
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
                            <label for="data-segments">Data Segments</label>
                            <multiselect
                                v-model="dataSegment"
                                label="name"
                                placeholder="Select data segment"
                                track-by="code"
                                :options="options"
                                :multiple="true"
                                :taggable="true"
                                @tag="addTag"
                            ></multiselect>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="system-user-warning">
                            <i class="icon-error_outline"></i>
                        </div>
                        <div class="system-user-details">
                            <p>
                                We will send email to user to create password
                                and activate account.
                            </p>
                        </div>
                    </div>
                </div>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
    components: {
        Multiselect,
    },

    /*
    |--------------------------------------------------------------------------
    | Component > props
    |--------------------------------------------------------------------------
    */
    props: {
        title: {
            type: String,
            default: null,
        },
        buttonText: {
            type: String,
            default: 'Create',
        },
    }, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */

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

            dataSegment: [
                { name: 'pk', code: 'pk' },
                { name: 'uae', code: 'uae' },
            ],

            options: [
                { name: 'pk', code: 'pk' },
                { name: 'uae', code: 'uae' },
                { name: 'usa', code: 'usa' },
                { name: 'uk', code: 'uk' },
            ],
        }
    },
    methods: {
        addTag(newTag) {
            const tag = {
                name: newTag,
                code:
                    newTag.substring(0, 2) +
                    Math.floor(Math.random() * 10000000),
            }
            this.options.push(tag)
            this.value.push(tag)
        },
    },
}
</script>
