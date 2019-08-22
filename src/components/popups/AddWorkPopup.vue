<template>
    <div>
        <b-modal
            id="add-work-popup"
            :title="title"
            size="sm"
            :okTitle="buttonText"
            cancelTitle="Cancel"
            cancelVariant="link"
            no-close-on-backdrop
        >
            <b-form>
                <div class="row">
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-1"
                            label="Work Type Code"
                            label-for="work-type-code"
                        >
                            <b-form-input
                                id="work-type-code"
                                type="text"
                                v-model="form.workCode"
                                required
                                autocomplete="no"
                                placeholder="Enter work type code"
                            ></b-form-input>
                        </b-form-group>
                    </div>

                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-2"
                            label="Work Type Title"
                            label-for="work-type-title"
                        >
                            <b-form-input
                                id="work-type-title"
                                type="text"
                                v-model="form.workTitle"
                                required
                                autocomplete="no"
                                placeholder="Enter work type title"
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
            default: 'Create',
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
                workCode: '',
                workTitle: '',
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
