<template>
    <div>
        <b-modal
            id="add-industry"
            title="Add Industry Factor"
            size="lg"
            okTitle="Create"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form class="modal-form-format">
                <div class="row">
                    <div class="col-md-6">
                        <b-form-group
                            id="input-group-1"
                            label="Industry Code"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-1"
                                type="text"
                                v-model="form.industryCode"
                                required
                                placeholder="Enter industry code"
                            ></b-form-input>
                        </b-form-group>
                    </div>

                    <div class="col-md-6">
                        <b-form-group
                            id="input-group-2"
                            label="Industry Title"
                            label-for="input-2"
                            class="mb-0"
                        >
                            <b-form-input
                                id="input-2"
                                type="text"
                                v-model="form.industryTitle"
                                required
                                placeholder="Enter industry title"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group
                            id="input-group-3"
                            label="Self-Employed / Business Owner"
                            label-for="select-1"
                        >
                            <b-form-select
                                id="select-1"
                                class="form-control"
                                v-model="form.selfEmployee"
                                :options="selfEmployee"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group
                            id="input-group-4"
                            label="Salaried-Executive Level"
                            label-for="select-2"
                        >
                            <b-form-select
                                id="select-2"
                                class="form-control"
                                v-model="form.salaryLevel"
                                :options="salaryLevel"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group
                            id="input-group-5"
                            label="Salaried General"
                            label-for="select-3"
                        >
                            <b-form-select
                                id="select-3"
                                class="form-control"
                                v-model="form.salaryGeneral"
                                :options="salaryGeneral"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group
                            id="input-group-6"
                            label="Homemaker"
                            label-for="select-4"
                        >
                            <b-form-select
                                id="select-4"
                                class="form-control"
                                v-model="form.homeMaker"
                                :options="homeMaker"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group
                            id="input-group-7"
                            label="Student"
                            label-for="select-5"
                        >
                            <b-form-select
                                id="select-5"
                                class="form-control"
                                v-model="form.student"
                                :options="student"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group
                            id="input-group-8"
                            label="Unemployed"
                            label-for="select-6"
                        >
                            <b-form-select
                                id="select-6"
                                class="form-control"
                                v-model="form.unEmployed"
                                :options="unEmployed"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group
                            id="input-group-9"
                            label="Retired"
                            class="mb-0"
                            label-for="select-7"
                        >
                            <b-form-select
                                id="select-7"
                                class="form-control"
                                v-model="form.retired"
                                :options="retired"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                </div>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                industryCode: '',
                industryTitle: '',
                retired: null,
                unEmployed: null,
                student: null,
                homeMaker: null,
                salaryGeneral: null,
                salaryLevel: null,
                selfEmployee: null,
            },

            retired: [
                { value: null, text: 'Select Ranking' },
                'High',
                'Medium',
                'Low',
            ],
            unEmployed: [
                { value: null, text: 'Select Ranking' },
                'High',
                'Medium',
                'Low',
            ],
            student: [
                { value: null, text: 'Select Ranking' },
                'High',
                'Medium',
                'Low',
            ],
            homeMaker: [
                { value: null, text: 'Select Ranking' },
                'High',
                'Medium',
                'Low',
            ],
            salaryGeneral: [
                { value: null, text: 'Select Ranking' },
                'High',
                'Medium',
                'Low',
            ],
            salaryLevel: [
                { value: null, text: 'Select Ranking' },
                'High',
                'Medium',
                'Low',
            ],
            selfEmployee: [
                { value: null, text: 'Select Ranking' },
                'High',
                'Medium',
                'Low',
            ],
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
