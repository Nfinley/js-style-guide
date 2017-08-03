<template>
    <div class="react-guide-container content">
        <div id="react-guide" v-html="contentMarkdown"></div>
    </div>
</template>

<script>

    import reactMarkdown from '../data/react-guide.md'

    export default {
        data() {
            return {
                contentMarkdown: reactMarkdown
            }
        }
    }

</script>

<style lang="scss"></style>