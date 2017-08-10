<template>
    <div class="procedure-guide-container content">
        <div id="procedure-guide" v-html="convertedMarkdown"></div>
    </div>
</template>

<script>

    import procedureMarkdown from '../markdown/procedure-guide.md'

    export default {
        data() {
            return {
                convertedMarkdown: procedureMarkdown
            }
        }
    }

</script>

<style lang="scss"></style>