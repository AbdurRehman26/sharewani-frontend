<template>
    <div>
        <div class="row">
            <div class="col-xs-12 col-md-8">
                <div
                    class="card card-builder form-create-panel config-card-block"
                >
                    <!-- draggable area -->
                    <draggable
                        class="dragArea list-group"
                        :list="formData"
                        group="people"
                    >
                        <div
                            class="form-field-types draggable-fields"
                            v-for="(field, index) in formData"
                            :key="index"
                        >
                            <!-- field move icon -->
                            <span class="move-icon"
                                ><i class="icon-move"></i
                            ></span>
                            <!-- field type icon -->
                            <span><i :class="field.icon"></i></span>
                            <!-- field label text -->
                            <p>{{ field.label }}</p>
                            <div class="action-items" :class="field.status">
                                <!-- settings icon -->
                                <i
                                    class="action-icons icon-settings"
                                    @click="openPopup(field.id, 'modify')"
                                ></i>
                                <!-- field locked icon -->
                                <i
                                    v-if="field.status == 'disabled'"
                                    class="action-icons icon-change-password"
                                ></i>
                                <!-- delete icon -->
                                <i
                                    v-if="field.status == 'editable'"
                                    class="change-password icon-trash"
                                    v-b-modal.remove-field
                                ></i>
                            </div>
                        </div>
                    </draggable>
                </div>
            </div>
            <!-- Fields Type-->
            <div class="col-xs-12 col-md-4">
                <div
                    class="card card-builder field-type-panel with-shadow config-card-block"
                >
                    <h4>Components</h4>
                    <div>
                        <div
                            class="form-field-types"
                            v-for="(field, index) in fieldType"
                            :key="index"
                        >
                            <div @click="openPopup(field.id, 'add')">
                                <span><i :class="field.icon"></i></span>
                                <p>{{ field.label }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <add-heading-popup :title="titleChange"></add-heading-popup>
        <add-text-field-popup :title="titleChange"></add-text-field-popup>
        <add-select-field-popup :title="titleChange"></add-select-field-popup>
        <remove-field-popup></remove-field-popup>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import addHeadingPopup from '@/components/popups/form-builder/AddHeadingPopup.vue'
import addTextFieldPopup from '@/components/popups/form-builder/AddTextFieldPopup.vue'
import addSelectFieldPopup from '@/components/popups/form-builder/AddSelectFieldPopup.vue'
import removeFieldPopup from '@/components/popups/form-builder/RemoveFieldPopup.vue'
export default {
    components: {
        draggable,
        addHeadingPopup,
        addTextFieldPopup,
        addSelectFieldPopup,
        removeFieldPopup,
    },

    /*
    |--------------------------------------------------------------------------
    | Component > props
    |--------------------------------------------------------------------------
    */
    props: {
        /**
         * Value to determine the current compose mode which
         * varies between 'add' and 'edit'
         */
        mode: {
            type: String,
            default: 'add',
        },
    }, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            titleChange: null,
            navWidth: true,
            listVal: null,
            listDropdown: false,
            menuListing: [
                {
                    anchorLink: '/configuration/form-builder/setup-profile',
                    menuLabel: 'Setup Profile',
                },
                {
                    anchorLink: '/configuration/form-builder/account',
                    menuLabel: 'Account Info',
                },
            ],
            fieldType: [
                {
                    icon: 'icon-heading',
                    label: 'Heading',
                    popup: '',
                    id: 1,
                },
                {
                    icon: 'icon-text-field',
                    label: 'Text Field',
                    popup: '',
                    id: 2,
                },
                {
                    icon: 'icon-text-area',
                    label: 'Text Area',
                    popup: '',
                    id: 3,
                },
                {
                    icon: 'icon-calendar',
                    label: 'Date Field',
                    popup: '',
                    id: 4,
                },
                {
                    icon: 'icon-select-field',
                    label: 'Dropdown / Select Field',
                    popup: '',
                    id: 5,
                },
                {
                    icon: 'icon-radio',
                    label: 'Radio Button Group',
                    popup: '',
                    id: 6,
                },
                {
                    icon: 'icon-checkbox',
                    label: 'Checkbox Group',
                    popup: '',
                    id: 7,
                },
            ],
            formData: [
                {
                    id: 1,
                    icon: 'icon-heading',
                    label: 'Account Information',
                    popup: '',
                    status: 'disabled',
                },
                {
                    id: 5,
                    icon: 'icon-select-field',
                    label: 'Purpose of Action',
                    popup: '',
                    status: 'editable',
                },
                {
                    id: 5,
                    icon: 'icon-select-field',
                    label: 'Product Type',
                    popup: '',
                    status: 'editable',
                },
                {
                    id: 2,
                    icon: 'icon-text-field',
                    label: 'Initial Balance',
                    popup: '',
                    status: 'editable',
                },
                /*                {
                    id: 2,
                    icon: 'icon-text-field',
                    label: 'Next of Kin',
                    popup: '',
                    status: 'editable',
                },
                {
                    id: 6,
                    icon: 'icon-radio',
                    label: 'Gender',
                    popup: '',
                    status: 'disabled',
                },
                {
                    id: 4,
                    icon: 'icon-calendar',
                    label: 'Date of Birth',
                    popup: '',
                    status: 'disabled',
                },
                {
                    id: 7,
                    icon: 'icon-checkbox',
                    label: 'Checkbox Group',
                    popup: '',
                    status: 'editable',
                },*/
            ],
        }
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
    methods: {
        openPopup(val, val2) {
            if (val == 1) {
                if (val2 == 'add') {
                    this.titleChange = 'Add Heading'
                }
                if (val2 == 'modify') {
                    this.titleChange = 'Modify Heading'
                }
                this.$bvModal.show('add-heading-popup')
            }
            if (val == 2 || val == 3 || val == 4) {
                if (val2 == 'add') {
                    this.titleChange = 'Add Text Field'
                }
                if (val2 == 'modify') {
                    this.titleChange = 'Modify Text Field'
                }
                this.$bvModal.show('add-text-field-popup')
            }
            if (val == 5 || val == 6 || val == 7) {
                if (val2 == 'add') {
                    this.titleChange = 'Add Text Field'
                }
                if (val2 == 'modify') {
                    this.titleChange = 'Modify Text Field'
                }
                this.$bvModal.show('add-select-field-popup')
            }
        },
    }, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {}, // End of Component > mounted
} // End of export default
</script>
