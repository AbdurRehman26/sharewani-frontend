<template>
    <div class="custom-datepicker">
        <i class="icon-calendar"></i>

        <Datepicker
            class="date-time-picker field-input"
            :format="formatVal"
            v-model="yourValue"
            width="100%"
        />
        <p v-show="yourValue == null" class="placeholder">{{ placeholder }}</p>
    </div>
</template>
<script>
import Datepicker from 'vuejs-datetimepicker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'
export default {
    components: {
        Datepicker,
    },

    props: {
        /**
         * Value to determine the current compose mode which
         * varies between 'add' and 'edit'
         */
        mode: {
            type: String,
            default: 'add',
        },
        dateFormat: {
            type: String,
            default: null,
        },
        placeholder: {
            type: String,
            default: null,
        },
        formatVal: {
            type: String,
            default: null,
        },

        date: {
            type: Boolean,
            default: false,
        },

        time: {
            type: Boolean,
            default: false,
        },
        close: {
            type: Boolean,
            default: false,
        },

        noButton: {
            type: Boolean,
            default: true,
        },

        noFooter: {
            type: Boolean,
            default: false,
        },
    }, // End of Component > props

    data() {
        return {
            yourValue: null,
        }
    },
    methods: {},
}
</script>
