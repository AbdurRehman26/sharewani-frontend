<template>
    <div class="kyc-checkbox-section">
        <b-form-group class="mb-0">
            <template slot="label">
                <b-form-checkbox
                    v-model="allSelected"
                    :indeterminate="indeterminate"
                    aria-describedby="flavours"
                    aria-controls="flavours"
                >
                    <span>{{ parentName }}</span>
                </b-form-checkbox>
            </template>

            <b-form-radio-group
                :id="radioName"
                class="ml-4"
                :v-model="selected"
                :options="radioListing"
                name="review"
            ></b-form-radio-group>
        </b-form-group>
    </div>
</template>

<script>
export default {
    props: {
        radioListing: {
            type: Array,
            default: null,
        },

        parentName: {
            type: String,
            default: null,
        },
    }, // End of Component > props

    data() {
        return {}
    },
    methods: {},
}
</script>
