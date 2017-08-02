<template>
    <div class="guide-container content">
        <div id="guide" v-html="content"></div>
    </div>
</template>

<script>

    import markdown from '../data/air-bnb-style-guide.md'

    export default {
        mounted() {
            document.querySelectorAll('pre').forEach(block => block.className += 'prettyprint');
        },
        data() {
            return {
                content: markdown
            }
        }
    }

</script>

<style lang="scss">

    pre {
        border-radius: 4px;
    }

</style>