<template>
    <div class="unit-testing-container content">
        <div id="unit-testing" v-html="convertedMarkdown"></div>
    </div>
</template>

<script>

    import unitTestingMarkdown from '../markdown/unit-testing-guide.md'

    export default {
        data() {
            return {
                convertedMarkdown: unitTestingMarkdown
            }
        }
    }

</script>

<style lang="scss"></style>