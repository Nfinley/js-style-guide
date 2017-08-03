<template>
    <div class="procedure-guide-container content">
        <div id="procedure-guide" v-html="contentMarkdown"></div>
    </div>
</template>

<script>

    import procedureMarkdown from '../data/procedure-guide.md'

    export default {
        data() {
            return {
                contentMarkdown: procedureMarkdown
            }
        }
    }

</script>

<style lang="scss"></style>