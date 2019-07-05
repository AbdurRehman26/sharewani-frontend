<template>
    <div class="auth-wrapper middle-aligner">
        <div class="inner">
            <base-logo class="main-logo"></base-logo>
            <div class="card card-auth  with-shadow">
                <h2 class="auth-heading">
                    Forgot your password?
                    <span>
                        Please provide your username and we'll send you
                        instructions on how to change your password.
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
                        <b-button type="submit" variant="primary"
                            >SEND INSTRUCTIONS</b-button
                        >
                        <router-link
                            to="/"
                            class="btn forgot-link btn-link float-right"
                            >Back to login</router-link
                        >
                    </b-form>
                </div>
            </div>
        </div>
    </div>
</template>
