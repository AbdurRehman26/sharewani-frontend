<template>
    <div>
        <b-form-group>
            <template slot="label">
                <b-form-checkbox
                    v-model="allSelected"
                    :indeterminate="indeterminate"
                    aria-describedby="permission"
                    aria-controls="permission"
                    @change="toggleAll"
                >
                    <span>{{ parentName }}</span>
                </b-form-checkbox>
            </template>

            <b-form-checkbox-group
                :id="checkboxName"
                v-model="selected"
                :options="checkBoxListing"
                :name="checkboxName"
                class="ml-4"
                stacked
            ></b-form-checkbox-group>
        </b-form-group>
    </div>
</template>

<script>
export default {
    props: {
        checkBoxListing: {
            type: Array,
            default: null,
        },
        checkboxName: {
            type: String,
            default: 'checkboxes',
        },
        parentName: {
            type: String,
            default: null,
        },
    }, // End of Component > props

    data() {
        return {
            selected: [],
            allSelected: false,
            indeterminate: false,
        }
    },
    methods: {
        toggleAll(checked) {
            this.selected = checked ? this.checkBoxListing.slice() : []
        },
    },
    watch: {
        selected(newVal) {
            // Handle changes in individual flavour checkboxes
            if (newVal.length === 0) {
                this.indeterminate = false
                this.allSelected = false
            } else if (newVal.length === this.checkBoxListing.length) {
                this.indeterminate = false
                this.allSelected = true
            } else {
                this.indeterminate = true
                this.allSelected = false
            }
        },
    },
}
</script>
