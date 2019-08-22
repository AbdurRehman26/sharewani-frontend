<template>
    <div>
        <b-modal
            id="add-purpose-popup"
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
                            label="Purpose of Action Code"
                            label-for="purpose-code"
                        >
                            <b-form-input
                                id="purpose-code"
                                type="text"
                                v-model="form.purposeCode"
                                required
                                autocomplete="no"
                                placeholder="Enter purpose of action code"
                            ></b-form-input>
                        </b-form-group>
                    </div>

                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-2"
                            label="Purpose of Action Title"
                            label-for="work-type-title"
                        >
                            <b-form-input
                                id="work-type-title"
                                type="text"
                                v-model="form.purposeTitle"
                                required
                                autocomplete="no"
                                placeholder="Enter purpose of action title"
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
                purposeCode: '',
                purposeTitle: '',
            },
        }
    },
    methods: {},
}
</script>
