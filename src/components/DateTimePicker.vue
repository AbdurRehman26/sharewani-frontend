<template>
    <div class="custom-datepicker">
        <i class="icon-calendar"></i>
        <VueCtkDateTimePicker
            v-model="yourValue"
            :noHeader="true"
            :noLabel="true"
            color="indigo"
            :no-button-now="noButton"
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
    methods: {
        /**
         * Handle when the modal is canceled
         *
         * @return {void}
         */
    },
}
</script>
