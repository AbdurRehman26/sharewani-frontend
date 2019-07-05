<template>
    <div class="auth-wrapper middle-aligner">
        <div class="inner">
            <base-logo class="main-logo"></base-logo>
            <div class="card card-auth  with-shadow">
                <h2 class="auth-heading">
                    Login to your account
                    <span>
                        Please enter your account credentials.
                    </span>
                </h2>
                <div class="auth-body">
                    <b-form>
                        <b-form-group
                            id="input-group-1"
                            label="Username"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-1"
                                type="email"
                                required
                                placeholder="Enter username"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                            id="input-group-2"
                            label="Password"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-2"
                                type="password"
                                required
                                placeholder="Enter your account password"
                            ></b-form-input>
                        </b-form-group>
                        <b-button type="submit" variant="primary"
                            >Submit</b-button
                        >
                        <router-link
                            to="/"
                            class="btn forgot-link btn-link float-right"
                            >Forgot your password?</router-link
                        >
                    </b-form>
                </div>
            </div>
        </div>
    </div>
</template>
