<template>
    <div class="react-guide-container content">
        <div id="react-guide" v-html="convertedMarkdown"></div>
    </div>
</template>

<script>

    import reactMarkdown from '../markdown/react-guide.md'

    export default {
        data() {
            return {
                convertedMarkdown: reactMarkdown
            }
        }
    }

</script>

<style lang="scss"></style>