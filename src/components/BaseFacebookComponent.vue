<template>
    <div class="fb-btn">
        <div class="row">
            <div class="col-md-12">
                <a
                    style="padding: 10px;margin-top: 50px;width: 120px;border-radius: 10px;"
                    href="#"
                    title="Facebook"
                    class="btn btn-facebook btn-lg"
                    @click="openFbLoginDialog"
                >
                    <span
                        style="font-family: sans-serif !important;"
                        class="icon-facebook-official"
                        >{{ text ? text : 'Login' }}</span
                    ></a
                >
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['text', 'fromSignUp', 'showDialog'],
    data() {
        remind: null
        return {
            facebookLoginData: {},
            loading: false,
            errorMessage: '',
            successMessage: '',
        }
    },
    watch: {
        showDialog(val) {
            if (val) {
                this.openFbLoginDialog()
            }
        },
    },
    methods: {
        openFbLoginDialog() {
            let self = this
            FB.login(self.checkLoginState, { scope: 'email' })
        },
        checkLoginState: function(response) {
            let self = this

            if (response.status === 'connected') {
                FB.api(
                    '/me',
                    { fields: 'first_name,last_name,email,picture' },
                    function(profile) {
                        console.log(profile)

                        const postData = {
                            provider_access_token:
                                response.authResponse.accessToken,
                            email: profile.email,
                            name: profile.first_name,
                            provider_id: profile.id,
                            image: profile.picture.data.url,
                        }

                        self.$emit('post-data', postData)
                    }
                )
            } else {
                // the user isn't logged in to Facebook.
                self.errorMessage = 'unauthenticated'
                setTimeout(function() {
                    self.errorMessage = ''
                }, 1000)
            }
        },
    },
}
window.fbAsyncInit = function() {
    FB.init({
        appId: process.env.VUE_APP_FACEBOOK, //todo dynamic
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.1',
    })
    FB.AppEvents.logPageView()
}
;(function(d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) {
        return
    }
    js = d.createElement(s)
    js.id = id
    js.src = '//connect.facebook.net/en_US/sdk.js'
    fjs.parentNode.insertBefore(js, fjs)
})(document, 'script', 'facebook-jssdk')
</script>

<style scoped>
.btn-facebook {
    background: #3b5998;
    border-radius: 0;
    color: #fff;
    border-width: 1px;
    border-style: solid;
    border-color: #263961;
    border-radius: 33px;
}
.btn-facebook:link,
.btn-facebook:visited {
    color: #fff;
}
.btn-facebook:active,
.btn-facebook:hover {
    background: #263961;
    color: #fff;
}


.btn.btn-facebook.btn-lg{

    margin-left: 22px;

}


.btn.btn-facebook.btn-lg{

    margin-left: 15px;

}



</style>
