<template>
    <div>
        <b-modal
            id="screening-detail-popup"
            ref="my-modal"
            title="Name Screening Hit Detail"
            size="md"
            cancelVariant="link"
            no-close-on-backdrop
        >
            <div class="scrollable screening-hit-section" id="style-2">
                <div class="row">
                    <div class="col-md-4">
                        <label>Full Name:</label>
                    </div>
                    <div class="col-md-8">Henk John Fortuin</div>
                    <div class="col-md-4">
                        <label>Category:</label>
                    </div>
                    <div class="col-md-8">
                        <ul>
                            <li>PEP National Organization</li>
                            <li>Close Associate, USA</li>
                            <li>OFAC SDN LIst</li>
                            <li>Office of Foreign Asset Control, USA</li>
                            <li>OFAC SDN List</li>
                            <li>Zimbabwe</li>
                            <li>OFAC-Z</li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <label>Alias Name(s):</label>
                    </div>
                    <div class="col-md-8">Fortuin</div>
                    <div class="col-md-4">
                        <label>Gender:</label>
                    </div>
                    <div class="col-md-8">Male</div>
                    <div class="col-md-4">
                        <label>Date of Birth:</label>
                    </div>
                    <div class="col-md-8">June 24, 1984</div>
                    <div class="col-md-4">
                        <label>ID Document:</label>
                    </div>
                    <div class="col-md-8">NL 60 76 93 B</div>
                    <div class="col-md-4">
                        <label>Address:</label>
                    </div>
                    <div class="col-md-8">
                        89 St. John's Road, BS96 5IS, Bristol, United Kingdom
                    </div>
                    <div class="col-md-12"><h4>Country Details</h4></div>

                    <div class="col-md-4">
                        <label>Citizenship:</label>
                    </div>
                    <div class="col-md-8">United Kingdom</div>
                    <div class="col-md-4">
                        <label>Country of Residence:</label>
                    </div>
                    <div class="col-md-8">United Kingdom</div>
                </div>
            </div>

            <template slot="modal-footer" class="w-100">
                <!-- Emulate built in modal footer ok and cancel button actions -->
                <base-button
                    btnLabel="Cancel"
                    btnType="button"
                    btnVariant="link"
                    @click="hideModal"
                ></base-button>

                <base-button
                    btnLabel="Print"
                    btnType="button"
                    btnVariant="primary"
                ></base-button>

                <div class="client-footer-logo">
                    <h4>Source:</h4>

                    <img
                        :src="
                            require('@/assets/images/dummy/' + clientLogo + '')
                        "
                    />
                </div>
            </template>
        </b-modal>
    </div>
</template>

<script>
export default {
    components: {},
    /*
    |--------------------------------------------------------------------------
    | Component > props
    |--------------------------------------------------------------------------
    */
    props: {
        /**
         * Value to determine the current compose mode which
         * varies between 'add' and 'edit'
         */
    }, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            clientLogo: 'dow-logo.png',
        }
    },
    methods: {
        /**
         * Handle when the modal is canceled
         *
         * @return {void}
         */

        hideModal() {
            this.$refs['my-modal'].hide()
        },
    },
}
</script>
