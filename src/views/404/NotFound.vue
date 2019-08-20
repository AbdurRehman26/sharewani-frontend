<template>
    <div class="not-found">
        <div class="not-found-panel">
            <h1>{{ heading }}</h1>
            <h2>{{ error }}</h2>
            <h3>{{ errorDes }}</h3>
            <base-button
                btnLabel="Back To Home"
                btnType="submit"
                btnVariant="primary"
                class=""
                @click="$router.push('/insights')"
            ></base-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            heading: '404.',
            error: "Oops, sorry we can't find that page! ",
            errorDes:
                "Either something went wrong or the page doesn't exist anymore",
            buttonText: 'Back To Home',
        }
    },
}
</script>
