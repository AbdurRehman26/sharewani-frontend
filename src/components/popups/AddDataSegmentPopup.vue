<template>
    <div>
        <b-modal
            id="add-data-segment-popup"
            :title="title"
            size="sm"
            :okTitle="buttonText"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form>
                <div class="row">
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-1"
                            label="Data Segment Title"
                            label-for="segment-title"
                        >
                            <b-form-input
                                id="segment-title"
                                type="text"
                                v-model="form.segmentTitle"
                                required
                                autocomplete="no"
                                placeholder="Enter data segment title"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-2"
                            label="Data Segment Code"
                            label-for="segment-code"
                        >
                            <b-form-input
                                id="segment-code"
                                type="text"
                                v-model="form.segmentCode"
                                required
                                autocomplete="no"
                                placeholder="Enter data segment code (max 3 characters)"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                </div>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
export default {
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
            default: 'Submit',
        },
    }, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            form: {
                segmentTitle: '',
                segmentCode: '',
            },
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
