<template>
    <div>
        <b-modal
            id="cancel-review-process-popup"
            title="Cancel Review Process"
            size="sm"
            okTitle="Cancel"
            cancelTitle="Cancel"
            cancelVariant="link"
            no-close-on-backdrop
        >
            <p>
                Are you sure you want to cancel review process? Once you cancel
                someone else can initiate review process.
            </p>
        </b-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {},
}
</script>
