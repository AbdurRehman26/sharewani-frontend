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
        <div class="config-card-block">
            <div class="row">
                <div class="col-xs-12 col-md-8">
                    <draggable
                        class="dragArea list-group"
                        :list="list2"
                        group="people"
                        @change="log"
                    >
                        <div
                            class="list-group-item"
                            v-for="element in list2"
                            :key="element.name"
                        >
                            {{ element.name }}
                        </div>
                    </draggable>
                </div>
                <div class="col-xs-12 col-md-4">
                    <draggable
                        class="dragArea list-group"
                        :list="list1"
                        :group="{ name: 'people', pull: 'clone', put: false }"
                        @change="log"
                    >
                        <div
                            class="list-group-item"
                            v-for="element in list1"
                            :key="element.name"
                        >
                            {{ element.name }}
                        </div>
                    </draggable>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
    components: { draggable },

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
                    menuLabel: 'Nationality',
                },
                {
                    anchorLink: '/configuration/idenfo-engine/work',
                    menuLabel: 'Work Type',
                },
            ],
            list1: [
                { name: 'John', id: 1 },
                { name: 'Joao', id: 2 },
                { name: 'Jean', id: 3 },
                { name: 'Gerard', id: 4 },
            ],
            list2: [
                { name: 'Juan', id: 5 },
                { name: 'Edgard', id: 6 },
                { name: 'Johnson', id: 7 },
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
