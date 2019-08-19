<template>
    <div class="row">
        <div class="col-md-12">
            <ul class="timeline">
                <li v-for="(list, index) in yearDetails" :key="index">
                    <div class="row timeline-movement timeline-movement-top">
                        <div class="timeline-badge timeline-future-movement">
                            <h4>{{ list.days }}</h4>
                        </div>
                    </div>
                    <ul>
                        <li
                            v-for="(describe, index) in list.describe"
                            :key="index"
                        >
                            <div class="row timeline-movement">
                                <div class="col-sm-6 timeline-item">
                                    <div class="row">
                                        <div class="col-sm-11">
                                            <div class="timeline-panel credits">
                                                <div
                                                    class="profile-pic"
                                                    :style="{
                                                        'background-image':
                                                            'url(' +
                                                            require('@/assets/images/members/' +
                                                                describe.image +
                                                                '') +
                                                            ')',
                                                    }"
                                                ></div>

                                                <div class="timeline-details">
                                                    <div class="float-left">
                                                        <h5>
                                                            {{ describe.name }}
                                                        </h5>
                                                        <span>
                                                            {{
                                                                describe.subHeading
                                                            }}</span
                                                        >
                                                    </div>
                                                    <div class="float-right">
                                                        <p class="date-content">
                                                            {{ describe.date }}
                                                        </p>
                                                    </div>

                                                    <p
                                                        v-html="
                                                            describe.details
                                                        "
                                                        class="timeline-talks"
                                                    ></p>

                                                    <tags
                                                        v-if="
                                                            describe.blockTags
                                                        "
                                                        :statusType="
                                                            describe.blockTags
                                                                .actions
                                                        "
                                                        :tagIcon="
                                                            describe.blockTags
                                                                .icon
                                                        "
                                                        :tagHeading="
                                                            describe.blockTags
                                                                .headings
                                                        "
                                                    ></tags>

                                                    <div
                                                        v-if="describe.fileName"
                                                        class="timeline-upload-file"
                                                    >
                                                        <div
                                                            class="file-section"
                                                        >
                                                            <pdf-icon></pdf-icon>
                                                        </div>
                                                        <div
                                                            class="file-attach"
                                                        >
                                                            <base-button
                                                                btnVariant="link"
                                                                btnLabel="Download Attachement"
                                                            ></base-button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import tags from '@/components/Tags.vue'
import pdfIcon from '@/components/icons/PdfIcon.vue'
export default {
    components: {
        tags,
        pdfIcon,
    },

    /*
    |--------------------------------------------------------------------------
    | Component > props
    |--------------------------------------------------------------------------
    */
    props: {
        yearDetails: {
            type: Array,
            default: null,
        },
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
        return {}
    }, // End of Component > data

    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: {}, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {}, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {}, // End of Component > mounted
} // End of export default
</script>
