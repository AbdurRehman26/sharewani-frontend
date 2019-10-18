<template>
    <div>
        <b-modal
            id="login-popup"
            title="Login/Signup"
            size="sm"
            okTitle="Update"
            cancelTitle="Cancel"
            cancelVariant="link"
            no-close-on-backdrop>

            <b-form>
                <div class="row">

                    <div class="col-md-12">
                
                        <facebook-component @post-data="login"></facebook-component>

                    </div>

                </div>
            </b-form>

        </b-modal>
    </div>
</template>

<script>

import FacebookComponent from '@/components/BaseFacebookComponent';
import authResource from '@/api/auth';

export default {
    components: {
        FacebookComponent
    },
    data() {
        return {}
    },
    methods: {
        async login(postData){
            this.$store.dispatch('login', postData);
        }
    },
}
</script>
