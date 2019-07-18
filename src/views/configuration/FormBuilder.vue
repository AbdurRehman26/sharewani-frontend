<template>
    <div class="wrap-content">
        <div class="config-list" ref="listingArea">
            <ul>
                <li
                    v-for="(list, index) in menuListing.slice(0, 8)"
                    :key="index"
                >
                    <router-link :to="list.anchorLink">
                        <span>{{ list.menuLabel }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
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
                        @change="log"
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
                                    v-b-modal.add-nationality-popup
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
                                    v-b-modal.add-nationality-popup
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
                            v-b-modal.add-nationality-popup
                        >
                            <span><i :class="field.icon"></i></span>
                            <p>{{ field.label }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <add-nationality-popup></add-nationality-popup>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import addNationalityPopup from '@/components/popups/AddNationalityPopup.vue'
export default {
    components: { draggable, addNationalityPopup },

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
            navWidth: true,
            listVal: null,
            listDropdown: false,
            menuListing: [
                {
                    anchorLink: '/configuration/idenfo-engine/',
                    menuLabel: 'Setup Profile',
                },
                {
                    anchorLink: '/configuration/idenfo-engine/work',
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
                    id: 1,
                    icon: 'icon-text-field',
                    label: 'First Name',
                    popup: '',
                    status: 'disabled',
                },
                {
                    id: 1,
                    icon: 'icon-text-field',
                    label: 'Middle Name',
                    popup: '',
                    status: 'disabled',
                },
                {
                    id: 1,
                    icon: 'icon-text-field',
                    label: 'Last Name',
                    popup: '',
                    status: 'disabled',
                },
                {
                    id: 1,
                    icon: 'icon-text-field',
                    label: 'Father Name',
                    popup: '',
                    status: 'editable',
                },
                {
                    id: 1,
                    icon: 'icon-text-field',
                    label: 'Next of Kin',
                    popup: '',
                    status: 'editable',
                },
                {
                    id: 1,
                    icon: 'icon-radio',
                    label: 'Gender',
                    popup: '',
                    status: 'disabled',
                },
                {
                    id: 1,
                    icon: 'icon-calendar',
                    label: 'Date of Birth',
                    popup: '',
                    status: 'disabled',
                },
                {
                    id: 1,
                    icon: 'icon-checkbox',
                    label: 'Checkbox Group',
                    popup: '',
                    status: 'disabled',
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
        listWidthVal() {
            this.listVal = this.$refs.listingArea.offsetWidth
        },
        menuFunc() {
            setTimeout(function() {
                if (this.listVal > 940) {
                    this.navWidth = true
                } else {
                    this.navWidth = false
                }
            }, 500)
        },
        log: function(evt) {
            window.console.log(evt)
        },
    }, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {
        this.listWidthVal()
        this.menuFunc()
    }, // End of Component > mounted
} // End of export default
</script>
