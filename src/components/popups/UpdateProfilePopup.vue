<template>
    <div>
        <b-modal
            id="update-profile-popup"
            title="User Profile"
            size="sm"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form>
                <div class="row">
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-1"
                            label="Name"
                            label-for="user-name"
                        >
                            <b-form-input
                                :disabled="true"
                                id="user-name"
                                type="text"
                                v-if="user"
                                v-model="user.name"
                                required
                                autocomplete="no"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                            id="input-group-1"
                            label="Email"
                            label-for="user-name"
                        >
                            <b-form-input
                                v-if="user"
                                :disabled="true"
                                id="user-name"
                                type="text"
                                v-model="user.email"
                                required
                                autocomplete="no"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                </div>
            </b-form>

            <template v-slot:modal-footer>
                <div class="w-100">
                    <center>
                        <b-button
                            variant="primary"
                            size="sm"
                            class="float-right"
                            @click.prevent="signOut"
                        >
                            Sign Out
                        </b-button>
                    </center>
                </div>
            </template>
        </b-modal>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            default: {},
        },
    },

    data() {
        return {
            form: {},
        }
    },
    methods: {
        signOut() {
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            window.location.reload('/')
        },
    },
}
</script>
