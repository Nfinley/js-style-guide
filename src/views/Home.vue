<template>
    <div class="home-container content">
        <section>
            <table class="table">
                <tbody>
                    <tr v-for="headingGroup in dividedHeadings">
                        <td v-for="(heading, idx) in headingGroup">
                            <a :href="'#' + heading.id" v-html="heading.innerHTML"></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
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
        <guide-block id="references" title="References">
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
        <guide-block id="objects" title="Objects">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="arrays" title="Arrays">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="destructuring" title="Destructuring">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="strings" title="Strings">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="functions" title="Functions">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="arrow-functions" title="Arrow Functions">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="classes-and-constructors" title="Classes & Constructors">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="modules" title="Modules">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="iterators-and-generators" title="Iterators and Generators">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="properties" title="Properties">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="variables" title="Variables">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="hoisting" title="Hoisting">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="comparison-operators-and-equality" title="Comparison Operators & Equality">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="blocks" title="Blocks">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="control-statements" title="Control Statements">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="comments" title="Comments">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="whitespace" title="Whitespace">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="commas" title="Commas">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="semicolons" title="Semicolons">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="type-casting-and-coercion" title="Type Casting & Coercion">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="naming-conventions" title="Naming Conventions">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="accessors" title="Accessors">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="events" title="Events">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="es5-compatibility" title="ECMAScript 5 Compatibility">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="es6-styles" title="ECMAScript 6+ (ES 2015+) Styles">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="testing" title="Testing">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
        <guide-block id="performance" title="Performance">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre><code></code></pre>
        </guide-block>
    </div>
</template>

<script>
    
    import GuideBlock from '../components/GuideBlock.vue'
    import { chunk, has } from 'lodash'

    export default {
        props: [],
        mounted() {
            let tempArr = document.querySelectorAll('h3');
            tempArr.forEach(tag => {
                if (tag.id) {
                    this.headings.push(tag)
                }
            })
        },
        data() {
            return {
                headings: []
            }
        },
        computed: {
            dividedHeadings() {
                return chunk(this.headings, 3);
            }
        },
        components: {
            GuideBlock
        }
    }

</script>

<style lang="scss"></style>