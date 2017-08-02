<template>
    <div class="home-container content">
        <span v-html="compiledMarkdown"></span>
    </div>
</template>

<script>
    import { chunk } from 'lodash'
    import marked from 'marked'
    import docData from '../data/Data'

    export default {
        props: [],
        data() {
            return {
                doc: docData
            }
        },
        computed: {
            compiledMarkdown() {
                return marked(this.doc, { sanitize: true })
            }
        }
    }

</script>

<style lang="scss">

    table.table-of-contents {
        
        tr:hover {
            background-color: white;
        }

        td {
            padding: 0;

            &:hover {
                background-color: whitesmoke;
            }
        }

        a.block-link {
            padding: 10px;
            display: block;
        }
    }

    pre {
        border-radius: 4px;
    }
</style>