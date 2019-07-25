<template>
    <div class="auth-wrapper middle-aligner">
        <div class="inner">
            <base-logo class="main-logo"></base-logo>
            <div class="card card-auth  with-shadow">
                <h2 class="auth-heading">
                    Contact Us
                    <span>
                        If you're having trouble logging in or with your
                        password.
                    </span>
                </h2>
                <div class="auth-body">
                    <b-form>
                        <b-form-group
                            id="input-group-1"
                            label="EMAIL ADDRESS"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-1"
                                type="email"
                                required
                                placeholder="Enter email address"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                            id="input-group-2"
                            label="Description of the issue"
                            label-for="input-1"
                        >
                            <b-form-textarea
                                id="input-2"
                                type="password"
                                rows="3"
                                placeholder="Please provide a detailed description of this issue"
                            ></b-form-textarea>
                        </b-form-group>
                        <base-button
                            btnLabel="SEND"
                            btnType="submit"
                            btnVariant="primary"
                            class=""
                            @click="$router.push('/dashboard')"
                        ></base-button>
                    </b-form>
                </div>
            </div>
            <div class="contact-link text-center">
                Existing system user?
                <router-link to="/">Sign In</router-link>
            </div>
        </div>
        <base-footer></base-footer>
    </div>
</template>
