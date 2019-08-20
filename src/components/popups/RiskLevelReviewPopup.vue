<template>
    <div>
        <b-modal
            id="add-risk-level-review-popup"
            :title="title"
            size="sm"
            :okTitle="buttonText"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form class="review-config-form">
                <b-form-group
                    id="input-group-1"
                    label="Low Risk (On-Boarding Alert Type)"
                    label-for="low-risk"
                >
                    <b-form-checkbox-group
                        id="checkbox-group-1"
                        v-model="selected"
                        :options="options"
                        name="risk-type"
                    ></b-form-checkbox-group>
                </b-form-group>
            </b-form>
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
        title: {
            type: String,
            default: null,
        },
        buttonText: {
            type: String,
            default: 'Update',
        },
    }, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            selected: [], // Must be an array reference!
            options: [
                { text: 'Maker', value: 'maker' },
                { text: 'Checker', value: 'checker' },
                { text: 'Approver', value: 'approver' },
            ],
        }
    },
    methods: {
        /**
         * Handle when the modal is canceled
         *
         * @return {void}
         */
    },
}
</script>
