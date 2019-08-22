<template
    ><div>
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
                    class="component-panel-open"
                    @click="openComponent ^= true"
                >
                    <i class="icon-plus"></i>
                </div>
                <div
                    class="card card-builder field-type-panel with-shadow config-card-block"
                    :class="openComponent == true ? 'show-Component' : ''"
                >
                    <h4>Components</h4>
                    <div
                        class="component-panel-close"
                        @click="openComponent ^= true"
                    >
                        <i class="icon-delete"></i>
                    </div>
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
        <add-heading-popup
            :title="titleChange"
            :buttonText="buttonText"
        ></add-heading-popup>
        <add-text-field-popup
            :title="titleChange"
            :buttonText="buttonText"
        ></add-text-field-popup>
        <add-select-field-popup
            :title="titleChange"
            :buttonText="buttonText"
        ></add-select-field-popup>
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
    props: {}, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            titleChange: null,
            buttonText: null,
            navWidth: true,
            listVal: null,
            listDropdown: false,
            openComponent: false,
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
                    label: 'Basic Information',
                    popup: '',
                    status: 'disabled',
                },
                {
                    id: 2,
                    icon: 'icon-text-field',
                    label: 'First Name',
                    popup: '',
                    status: 'disabled',
                },
                {
                    id: 2,
                    icon: 'icon-text-field',
                    label: 'Middle Name',
                    popup: '',
                    status: 'disabled',
                },
                {
                    id: 2,
                    icon: 'icon-text-field',
                    label: 'Last Name',
                    popup: '',
                    status: 'disabled',
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
                    id: 5,
                    icon: 'icon-select-field',
                    label: 'Nationality',
                    popup: '',
                    status: 'editable',
                },
                {
                    id: 5,
                    icon: 'icon-select-field',
                    label: 'Country Of Residence',
                    popup: '',
                    status: 'editable',
                },

                {
                    id: 1,
                    icon: 'icon-heading',
                    label: 'Contact Information',
                    popup: '',
                    status: 'editable',
                },
                {
                    id: 2,
                    icon: 'icon-text-field',
                    label: 'Address',
                    popup: '',
                    status: 'editable',
                },
                {
                    id: 5,
                    icon: 'icon-select-field',
                    label: 'State',
                    popup: '',
                    status: 'editable',
                },
                {
                    id: 2,
                    icon: 'icon-text-field',
                    label: 'City',
                    popup: '',
                    status: 'editable',
                },
                {
                    id: 2,
                    icon: 'icon-text-field',
                    label: 'Zip Code / Postal Code',
                    popup: '',
                    status: 'editable',
                },
                {
                    id: 2,
                    icon: 'icon-text-field',
                    label: 'Email',
                    popup: '',
                    status: 'editable',
                },
                //Occupation
                {
                    id: 1,
                    icon: 'icon-heading',
                    label: 'Occupation Information',
                    popup: '',
                    status: 'editable',
                },
                {
                    id: 5,
                    icon: 'icon-select-field',
                    label: 'Work Type',
                    popup: '',
                    status: 'editable',
                },
                {
                    id: 5,
                    icon: 'icon-select-field',
                    label: 'Industry',
                    popup: '',
                    status: 'editable',
                },
                {
                    id: 1,
                    icon: 'icon-text-field',
                    label: 'Length Of Relationship',
                    popup: '',
                    status: 'editable',
                },
                {
                    id: 1,
                    icon: 'icon-text-field',
                    label: 'Tax ID',
                    popup: '',
                    status: 'editable',
                },
                //Occupation
                {
                    id: 1,
                    icon: 'icon-heading',
                    label: 'ID Document Information',
                    popup: '',
                    status: 'editable',
                },
                {
                    id: 5,
                    icon: 'icon-select-field',
                    label: 'ID Document Type',
                    popup: '',
                    status: 'editable',
                },
                {
                    id: 1,
                    icon: 'icon-text-field',
                    label: 'ID Document Number',
                    popup: '',
                    status: 'editable',
                },
                {
                    id: 4,
                    icon: 'icon-calendar',
                    label: 'Expiry Date',
                    popup: '',
                    status: 'editable',
                },
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
                    this.buttonText = 'Add'
                }
                if (val2 == 'modify') {
                    this.titleChange = 'Modify Heading'
                    this.buttonText = 'Update'
                }
                this.$bvModal.show('add-heading-popup')
            }
            if (val == 2 || val == 3 || val == 4) {
                if (val2 == 'add') {
                    this.titleChange = 'Add Text Field'
                    this.buttonText = 'Create'
                }
                if (val2 == 'modify') {
                    this.titleChange = 'Modify Text Field'
                    this.buttonText = 'Update'
                }
                this.$bvModal.show('add-text-field-popup')
            }
            if (val == 5 || val == 6 || val == 7) {
                if (val2 == 'add') {
                    this.titleChange = 'Add Text Field'
                    this.buttonText = 'Create'
                }
                if (val2 == 'modify') {
                    this.titleChange = 'Modify Text Field'
                    this.buttonText = 'Update'
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
