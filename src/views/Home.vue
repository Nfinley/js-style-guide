<template>
    <div class="home-container content">
        <section>
            <table class="table table-of-contents">
                <tbody>
                    <tr v-for="headingGroup in dividedHeadings">
                        <td v-for="(heading, idx) in headingGroup">
                            <a class="block-link" :href="'#' + heading.id" v-html="heading.innerHTML"></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        <guide-block id="types" title="Types">
            <div class="columns">
                <div class="column is-6">
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
                </div>
                <div class="column is-6">
                    <pre class="prettyprint lang-js"><code>const foo = 1;<br>let bar = foo;<br><br>bar = 9;<br>console.log(foo, bar); // => 1, 9</code></pre>
                </div>
            </div>
            <div class="columns">
                <div class="column is-6">
                    <p id="types-complex">
                        <strong>Complex</strong> - When accessing a primitive type, always work directly with its value.
                    </p>
                    <ul>
                        <li>object</li>
                        <li>array</li>
                        <li>function</li>
                    </ul>
                </div>
                <div class="column is-6">
                    <pre class="prettyprint lang-js"><code>const foo = [1, 2];<br>const bar = foo;<br><br>bar[0] = 9;<br>console.log(foo[0], bar[0]); // => 9, 9</code></pre>
                </div>
            </div>
        </guide-block>

        <guide-block id="references" title="References">
            <div class="columns">
                <div class="column is-6">
                    <p>
                        Use <code>const</code> for all your references; avoid using <code>var</code>.
                    </p>
                </div>
                <div class="column is-6">
                    <pre class="prettyprint lang-js"><code>// bad<br>var a = 1;<br>var b = 2;<br><br>// good<br>const a = 1;<br>const b = 2;</code></pre>
                </div>
            </div>
            <div class="columns">
                <div class="column is-6">
                    <p>
                        If you must reassign references, use <code>let</code> instead of <code>var</code>.
                    </p>
                </div>
                <div class="column is-6">
                    <pre class="prettyprint lang-js"><code>// bad<br>var count = 1;<br>if (true) {<br>    count += 1;<br>}<br><br>// good, use the let.<br>let count = 1;<br>if (true) {<br>    count += 1;<br>}</code></pre>
                </div>
            </div>
            <div class="columns">
                <div class="column is-6">
                    <p>
                        Note that both <code>let</code> and <code>const</code> are block-scoped.
                    </p>
                </div>
                <div class="column is-6">
                    <pre class="prettyprint lang-js"><code>// const and let only exist in the blocks they are defined in.<br>{<br>    let a = 1;<br>    const b = 1;<br>}<br>console.log(a); // ReferenceError<br>console.log(b); // ReferenceError</code></pre>
                </div>
            </div>
        </guide-block>

        <guide-block id="objects" title="Objects">
            <div class="columns">
                <div class="column is-6">
                    <p>
                        Use literal syntax for object creation.
                    </p>
                </div>
                <div class="column is-6">
                    <pre class="prettyprint lang-js"><code>// bad<br>const item = new Object();<br><br>// good<br>const item = {};</code></pre>
                </div>
            </div>
            <div class="columns">
                <div class="column is-6">
                    <p>
                        Use object method shorthand.
                    </p>
                </div>
                <div class="column is-6">
                    <pre class="prettyprint lang-js"><code>// bad<br>const atom = {<br>    value: 1,<br><br>    addValue: function (value) {<br>        return atom.value + value;<br>    }<br>};<br><br>// good<br>const atom = {<br>    value: 1,<br><br>    addValue(value) {<br>        return atom.value + value;<br>    }<br>};</code></pre>
                </div>
            </div>
            <div class="columns">
                <div class="column is-6">
                    <p>
                        Use property value shorthand.
                    </p>
                </div>
                <div class="column is-6">
                    <pre class="prettyprint lang-js"><code>const typography = 'Avenir';<br><br>// bad<br>const obj = {<br>    typography: typography<br>};<br><br>// good<br>const obj = {<br>    typography<br>};</code></pre>
                </div>
            </div>
            <div class="columns">
                <div class="column is-6">
                    <p>
                        Group your shorthand properties at the beginning of your object declaration.
                    </p>
                </div>
                <div class="column is-6">
                    <pre class="prettyprint lang-js"><code>const typeface = 'Avenir';<br>const category = 'Modern';<br><br>// bad<br>const obj = {<br>    fontWeight: 'bold',<br>    typeface,<br>    fontStyle: 'italic',<br>    category<br>};<br><br>// good<br>const obj = {<br>    category,<br>    typeface,<br>    fontWeight: 'bold',<br>    fontStyle: 'italic'<br>};</code></pre>
                </div>
            </div>
            <div class="columns">
                <div class="column is-6">
                    <p>
                        Only quote properties that are invalid identifiers.
                    </p>
                </div>
                <div class="column is-6">
                    <pre class="prettyprint lang-js"><code>// bad<br>const bad = {<br>    'foo': 3,<br>    'bar': 4,<br>    'data-blah': 5<br>};<br><br>// good<br>const good = {<br>    foo: 3,<br>    bar: 4,<br>    'data-blah': 5<br>};</code></pre>
                </div>
            </div>
            <div class="columns">
                <div class="column is-6">
                    <p>
                        Prefer the object spread operator over <code>Object.assign</code> to shallow-copy objects. Use the object rest operator to get a new object with certain properties omitted.
                    </p>
                </div>
                <div class="column is-6">
                    <pre class="prettyprint lang-js"><code>// very bad<br>const original = { a: 1, b: 2 };<br>const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ<br>delete copy.a; // so does this<br><br>// bad<br>const original = { a: 1, b: 2 };<br>const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }<br><br>// good<br>const original = { a: 1, b: 2 };<br>const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }<br><br>const { a, ...noA } = copy; // noA => { b: 2, c: 3 }</code></pre>
                </div>
            </div>
        </guide-block>

        <guide-block id="arrays" title="Arrays">
            <p>
                Use the literal syntax for array creation.
            </p>
            <pre class="prettyprint lang-js"><code>// bad<br>const items = new Array();<br><br>// good<br>const items = [];</code></pre>
            <p>
                Use Array push instead of direct assignment to add items to an array.
            </p>
            <pre class="prettyprint lang-js"><code>const someStack = [];<br><br>// bad<br>someStack[someStack.length] = 'abracadabra';<br><br>// good<br>someStack.push('abracadabra');</code></pre>
            <p>
                Use array spreads <code>...</code> to copy arrays.
            </p>
            <pre class="prettyprint lang-js"><code>// bad<br>const len = items.length;<br>const itemsCopy = [];<br>let i;<br><br>for (i = 0; i < len; i += 1) {<br>    itemsCopy[i] = items[i];<br>}<br><br>// good<br>const itemsCopy = [...items];</code></pre>
            <p>
                To convert an array-like object to an array, use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from">Array.from</a>.
            </p>
            <pre class="prettyprint lang-js"><code>const foo = document.querySelectorAll('.foo');<br>const nodes = Array.from(foo);</code></pre>
            <p>
                Use return statements in array method callbacks. It’s ok to omit the return if the function body consists of a single statement returning an expression without side effects.
            </p>
            <pre class="prettyprint lang-js"><code>// good<br>[1, 2, 3].map((x) => {<br>    const y = x + 1;<br>    return x * y;<br>});<br><br>// good<br>[1, 2, 3].map(x => x + 1);<br><br>// bad<br>const flat = {};<br>[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {<br>    const flatten = memo.concat(item);<br>    flat[index] = flatten;<br>});<br><br>// good<br>const flat = {};<br>[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {<br>    const flatten = memo.concat(item);<br>    flat[index] = flatten;<br>    return flatten;<br>});<br><br>// bad<br>inbox.filter((msg) => {<br>    const { subject, author } = msg;<br>    if (subject === 'Mockingbird') {<br>        return author === 'Harper Lee';<br>    } else {<br>        return false;<br>    }<br>});<br><br>// good<br>inbox.filter((msg) => {<br>    const { subject, author } = msg;<br>    if (subject === 'Mockingbird') {<br>        return author === 'Harper Lee';<br>    }<br>    return false;<br>});</code></pre>
            <p>
                Use line breaks after open and before close array brackets if an array has multiple lines.
            </p>
            <pre class="prettyprint lang-js"><code>// bad<br>const arr = [<br>    [0, 1], [2, 3], [4, 5]<br>];<br><br>const objectInArray = [{<br>    id: 1<br>}, {<br>    id: 2<br>}];<br><br>const numberInArray = [<br>    1, 2<br>];<br><br>// good<br>const arr = [[0, 1], [2, 3], [4, 5]];<br><br>const objectInArray = [<br>    {<br>        id: 1<br>    },<br>    {<br>        id: 2<br>    }<br>];<br><br>const numberInArray = [<br>    1,<br>    2<br>];</code></pre>
        </guide-block>

        <guide-block id="destructuring" title="Destructuring">
            <p>
                Use object destructuring when accessing and using multiple properties of an object.
            </p>
            <pre class="prettyprint lang-js"><code>// bad<br>function getFullName(user) {<br>    const firstName = user.firstName;<br>    const lastName = user.lastName;<br><br>    return `${firstName} ${lastName}`;<br>}<br><br>// good<br>function getFullName(user) {<br>    const { firstName, lastName } = user;<br>    return `${firstName} ${lastName}`;<br>}<br><br>// best<br>function getFullName({ firstName, lastName }) {<br>    return `${firstName} ${lastName}`;<br>}</code></pre>
            <p>
                Use array destructuring.
            </p>
            <pre class="prettyprint lang-js"><code>const arr = [1, 2, 3, 4];<br><br>// bad<br>const first = arr[0];<br>const second = arr[1];<br><br>// good<br>const [first, second] = arr;</code></pre>
        </guide-block>

        <guide-block v-show="false" id="strings" title="Strings">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="functions" title="Functions">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="arrow-functions" title="Arrow Functions">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="classes-and-constructors" title="Classes & Constructors">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="modules" title="Modules">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="iterators-and-generators" title="Iterators and Generators">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="properties" title="Properties">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="variables" title="Variables">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="hoisting" title="Hoisting">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="comparison-operators-and-equality" title="Comparison Operators & Equality">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="blocks" title="Blocks">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="control-statements" title="Control Statements">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="comments" title="Comments">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="whitespace" title="Whitespace">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="commas" title="Commas">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="semicolons" title="Semicolons">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="type-casting-and-coercion" title="Type Casting & Coercion">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="naming-conventions" title="Naming Conventions">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="accessors" title="Accessors">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="events" title="Events">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="testing" title="Testing">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

        <guide-block v-show="false" id="performance" title="Performance">
            <p>
                <strong>Sub-title</strong> - Text and instructions go here.
            </p>
            <pre class="prettyprint lang-js"><code></code></pre>
        </guide-block>

    </div>
</template>

<script>
    
    import GuideBlock from '../components/GuideBlock.vue'
    import { chunk } from 'lodash'

    export default {
        props: [],
        mounted() {
            let tempArr = document.querySelectorAll('h3');
            this.headings = Array.from(tempArr);
        },
        data() {
            return {
                headings: []
            }
        },
        computed: {
            dividedHeadings() {
                return chunk(this.headings, 4);
            }
        },
        components: {
            GuideBlock
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