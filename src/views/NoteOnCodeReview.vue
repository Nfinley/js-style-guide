<template>
    <div class="code-review-container content">
        <div id="code-review" v-html="convertedMarkdown"></div>
    </div>
</template>

<script>

    import codeReviewMarkdown from '../markdown/note-on-code-review.md'

    export default {
        data() {
            return {
                convertedMarkdown: codeReviewMarkdown
            }
        }
    }

</script>

<style lang="scss"></style>