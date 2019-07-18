<template>
    <div>
        <b-modal
            id="add-application-popup"
            title="Add Application"
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
