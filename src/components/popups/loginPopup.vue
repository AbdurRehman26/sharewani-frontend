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
import { login } from '@/api/auth';

export default {
    components: {
        FacebookComponent
    },
    data() {
        return {}
    },
    methods: {
        async login(postData){
            console.log(authResource, 22222222);
            const response = await login(postData);
            console.log(response,  2222);
        }
    },
}
</script>
