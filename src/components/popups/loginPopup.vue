<template>
    <div>
        <b-modal
            id="login-popup"
            title="Login/Signup"
            hide-footer
            size="sm"
            cancelVariant="link"
            no-close-on-backdrop>

            <b-form>
                <div class="row">

                    <div class="col-md-12">
                
                
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
