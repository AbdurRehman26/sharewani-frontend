<template>
    <div>
        <b-modal
            id="add-application-popup"
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
                            label="Application Title"
                            label-for="app-title"
                        >
                            <b-form-input
                                id="app-title"
                                type="text"
                                v-model="form.appTitle"
                                required
                                autocomplete="no"
                                placeholder="Enter application title"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="data-segments">Data Segments</label>
                            <multiselect
                                v-model="dataSegment"
                                label="name"
                                placeholder="Select data segment"
                                track-by="code"
                                :options="options"
                                :multiple="true"
                                :taggable="true"
                                @tag="addTag"
                            ></multiselect>
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
import Multiselect from 'vue-multiselect'
export default {
    components: {
        Multiselect,
    },
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
                appTitle: '',
                segmentCode: '',
            },

            dataSegment: [
                { name: 'pk', code: 'pk' },
                { name: 'uae', code: 'uae' },
            ],

            options: [
                { name: 'pk', code: 'pk' },
                { name: 'uae', code: 'uae' },
                { name: 'usa', code: 'usa' },
                { name: 'uk', code: 'uk' },
            ],
        }
    },
    methods: {
        /**
         * Handle when the modal is canceled
         *
         * @return {void}
         */

        addTag(newTag) {
            const tag = {
                name: newTag,
                code:
                    newTag.substring(0, 2) +
                    Math.floor(Math.random() * 10000000),
            }
            this.options.push(tag)
            this.value.push(tag)
        },
    },
}
</script>
