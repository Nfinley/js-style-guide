<template>
    <div class="home-container content">
        <guide-block>
            <table class="table">
                <tbody>
                    <tr v-for="headingGroup in dividedHeadings">
                        <td v-for="(heading, idx) in headingGroup">
                            <a :href="'#' + heading.id" v-html="heading.content"></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </guide-block>
        <guide-block id="types" title="Types">
            <p id="types-primitive">
                <strong>Primitives</strong> - When accessing a primitive type, always work directly with its value.
            </p>
            <ul>
                <li>string</li>
                <li>number</li>
                <li>boolean</li>
                <li>null</li>
                <li>undefined</li>
            </ul>
            <pre><code>const foo = 1;<br>let bar = foo;<br><br>bar = 9;<br>console.log(foo, bar); // => 1, 9</code></pre>
            <p id="types-complex">
                <strong>Complex</strong> - When accessing a primitive type, always work directly with its value.
            </p>
            <ul>
                <li>object</li>
                <li>array</li>
                <li>function</li>
            </ul>
            <pre><code>const foo = [1, 2];<br>const bar = foo;<br><br>bar[0] = 9;<br>console.log(foo[0], bar[0]); // => 9, 9</code></pre>
        </guide-block>
        <guide-block
            id="references"
            title="References">
            <p>
                Use <code>const</code> for all your references; avoid using <code>var</code>.
            </p>
            <pre><code>// bad<br>var a = 1;<br>var b = 2;<br><br>// good<br>const a = 1;
const b = 2;</code></pre>
            <p>
                If you must reassign references, use <code>let</code> instead of <code>var</code>.
            </p>
            <pre><code>// bad<br>var count = 1;<br>if (true) {<br>  count += 1;<br>}</code></pre>
        </guide-block>
        <guide-block>
            <h3 id="objects">
                Objects
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="arrays">
                Arrays
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="destructuring">
                Destructuring
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="strings">
                Strings
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="functions">
                Functions
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="arrow-functions">
                Arrow Functions
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="classes-and-constructors">
                Classes & Constructors
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="modules">
                Modules
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="iterators-and-generators">
                Iterators and Generators
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="properties">
                Properties
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="variables">
                Variables
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="hoisting">
                Hoisting
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="comparison-operators-and-equality">
                Comparison Operators & Equality
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="blocks">
                Blocks
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="control-statements">
                Control Statements
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="comments">
                Comments
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="whitespace">
                Whitespace
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="commas">
                Commas
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="semicolons">
                Semicolons
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="type-casting-and-coercion">
                Type Casting & Coercion
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="naming-conventions">
                Naming Conventions
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="accessors">
                Accessors
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="events">
                Events
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="es5-compatibility">
                ECMAScript 5 Compatibility
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="es6-styles">
                ECMAScript 6+ (ES 2015+) Styles
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="testing">
                Testing
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
        <guide-block>
            <h3 id="performance">
                Performance
            </h3>
            <p>
                <strong>Sub-title</strong>
                Text and instructions go here.
            </p>
            <pre><code></code></pre>
            <hr>
        </guide-block>
    </div>
</template>

<script>
    
    import GuideBlock from '../components/GuideBlock.vue'
    import { chunk } from 'lodash'

    export default {
        props: [],
        mounted() {
            this.$el.querySelectorAll('h3').forEach(
                heading => this.headings.push({
                    id: heading.id,
                    content: heading.innerHTML
                })
            )
        },
        data() {
            return {
                headings: []
            }
        },
        computed: {
            dividedHeadings() {
                return chunk(this.headings, 3)
            }
        },
        components: {
            GuideBlock
        }
    }

</script>

<style lang="scss"></style>