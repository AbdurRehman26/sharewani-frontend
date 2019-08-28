<template>
    <div class="kyc-checkbox-section">
        <div class="col-form-label">
            <div class="form-group">
                <div class="custom-control custom-checkbox w-100">
                    <input
                        type="checkbox"
                        @click="uncheckAll"
                        class="custom-control-input"
                        id="reviewRole"
                        checked
                    />
                    <label class="custom-control-label" for="reviewRole"
                        ><span>{{ parentName }}</span></label
                    >
                </div>

                <div
                    class="ml-4"
                    v-for="(val, index) in radioListing"
                    :key="index"
                >
                    <div
                        class="custom-control custom-control-inline custom-radio"
                    >
                        <input
                            type="radio"
                            class="custom-control-input"
                            name="radio"
                            :value="val"
                            v-model="selected"
                            :id="val"
                            @click="uncheck(val)"
                        /><label class="custom-control-label" :for="val"
                            ><span>{{ val }}</span></label
                        >
                    </div>
                </div>
            </div>
        </div>
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
        return {
            selected: 'Maker',
            previous: null,
        }
    },
    methods: {
        uncheck: function(val) {
            console.log(val, this.selected)
            if (val == this.previous) {
                this.selected = false
            }
            this.previous = this.selected
        },
        uncheckAll: function() {
            this.selected = false
        },
    },
}
</script>
