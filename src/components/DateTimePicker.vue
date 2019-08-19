<template>
    <div class="custom-datepicker">
        <i class="icon-calendar"></i>
        <VueCtkDateTimePicker
            v-model="yourValue"
            noHeader="false"
            noLabel="false"
            color="indigo"
            no-button-now="false"
            :formatted="dateFormat"
            :format="formatVal"
            :only-date="date"
            :only-time="time"
            :auto-close="close"
            :no-button="noFooter"
        ></VueCtkDateTimePicker>
        <p v-if="yourValue == null" class="placeholder">
            {{ placeholder }}
        </p>
    </div>
</template>
<script>
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'
export default {
    components: {
        VueCtkDateTimePicker,
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
            default: null,
        },

        time: {
            type: Boolean,
            default: null,
        },
        close: {
            type: Boolean,
            default: null,
        },

        noFooter: {
            type: Boolean,
            default: null,
        },
    }, // End of Component > props

    data() {
        return {
            yourValue: null,
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
