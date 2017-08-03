<template>
    <div class="javascript-guide-container content">
        <div id="javascript-guide" v-html="contentMarkdown"></div>
    </div>
</template>

<script>

    import javascriptMarkdown from '../data/javascript-guide.md'

    export default {
        data() {
            return {
                contentMarkdown: javascriptMarkdown
            }
        }
    }

</script>

<style lang="scss"></style>