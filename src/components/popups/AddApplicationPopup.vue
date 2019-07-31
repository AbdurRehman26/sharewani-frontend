<template>
    <div>
        <b-modal
            id="add-application-popup"
            :title="title"
            size="sm"
            okTitle="Create"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form>
                <div class="row">
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-1"
                            label="Application Title"
                            label-for="app-title"
                        >
                            <b-form-input
                                id="app-title"
                                type="text"
                                v-model="form.appTitle"
                                required
                                placeholder="Enter application title"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="data-segments">Data Segments</label>
                            <v-selectize
                                id="data-segments"
                                :options="options"
                                v-model="selected"
                                multiple
                            />
                        </div>
                    </div>

                    <div class="col-sm-12">
                        <div class="form-group">
                            <label>API KEY</label>
                            <div class="clipboard">
                                <span
                                    >7cfac137-c87a-4ad6-b5e4-b0422c00f891</span
                                >
                                <i class="icon-copy"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label>SECRET KEY</label>
                            <div class="clipboard">
                                <span>y/B?E(H+MbPeShVmYq3t6w9z$C&F)J@N</span>
                                <i class="icon-copy"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
import VSelectize from '@isneezy/vue-selectize'

export default {
    components: {
        VSelectize,
    },
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
    }, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            form: {
                appTitle: '',
                segmentCode: '',
            },

            options: ['pk', 'uae', 'usa', 'uk'],
            selected: ['pk', 'uae'],
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
