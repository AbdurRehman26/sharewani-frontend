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
                            <div class="clipboard">
                                <span class="code text-red">{{
                                    testingCode
                                }}</span>
                                <i
                                    class="icon-check"
                                    @click.stop.prevent="copyTestingCode"
                                ></i>
                                <input
                                    type="hidden"
                                    id="testing-code"
                                    :value="testingCode"
                                />
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
    data() {
        return {
            form: {
                appTitle: '',
                segmentCode: '',
            },

            options: ['pk', 'uae', 'usa', 'uk'],
            selected: ['pk', 'uae'],

            testingCode: '7cfac137-c87a-4ad6-b5e4-b0422c00f891',
        }
    },
    methods: {
        copyTestingCode() {
            let testingCodeToCopy = document.querySelector('#testing-code')
            testingCodeToCopy.setAttribute('type', 'text')
            testingCodeToCopy.select()

            /* unselect the range */
            testingCodeToCopy.setAttribute('type', 'hidden')
            window.getSelection().removeAllRanges()
        },

        /**
         * Handle when the modal is canceled
         *
         * @return {void}
         */
    },
}
</script>
