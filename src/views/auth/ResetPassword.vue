<template>
    <div class="auth-wrapper middle-aligner">
        <div class="inner">
            <base-logo class="main-logo"></base-logo>
            <div class="card card-auth  with-shadow">
                <h2 class="auth-heading">
                    Reset password
                    <span>
                        Please create your new account password.
                    </span>
                </h2>
                <div class="auth-body">
                    <b-form>
                        <b-form-group
                            id="input-group-2"
                            label="NEW PASSWORD"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-2"
                                type="password"
                                required
                                placeholder="Enter new password"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                            id="input-group-2"
                            label="CONFIRM PASSWORD"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-2"
                                type="password"
                                required
                                placeholder="Re-enter your account password"
                            ></b-form-input>
                        </b-form-group>
                        <b-button type="submit" variant="primary"
                            >RESET</b-button
                        >
                        >
                    </b-form>
                </div>
            </div>
        </div>
    </div>
</template>
