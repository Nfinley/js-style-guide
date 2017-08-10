<template>
    <div class="javascript-guide-container content">
        <div id="javascript-guide" v-html="convertedMarkdown"></div>
    </div>
</template>

<script>

    import javascriptMarkdown from '../markdown/javascript-guide.md'

    export default {
        data() {
            return {
                convertedMarkdown: javascriptMarkdown
            }
        }
    }

</script>

<style lang="scss"></style>