<template>
    <div class="language-features-container">
        <h2 id="language-features">4 Language features</h2>
            <p>JavaScript includes many dubious (and even dangerous) features.  This section
                delineates which features may or may not be used, and any additional constraints
                on their use.
            </p>
            <h3 id="features-local-variable-declarations">4.1 Local variable declarations</h3>
            <h4 id="features-use-const-and-let">4.1.1 Use <code>const</code> and <code>let</code></h4>
            <p>Declare all local variables with either <code>const</code> or <code>let</code>. Use const by default,
                unless a variable needs to be reassigned. The <code class="badcode">var</code>
                keyword must not be used.
            </p>
            <h4 id="features-one-variable-per-declaration">4.1.2 One variable per declaration</h4>
            <p>Every local variable declaration declares only one variable: declarations such
                as <code class="badcode">let a = 1, b = 2;</code> are not used.
            </p>
            <h4 id="features-declared-when-needed">4.1.3 Declared when needed, initialized as soon as possible</h4>
            <p>Local variables are <strong>not</strong> habitually declared at the start of their containing
                block or block-like construct. Instead, local variables are declared close to
                the point they are first used (within reason), to minimize their scope.
            </p>
            <h4 id="features-declare-types-as-needed">4.1.4 Declare types as needed</h4>
            <p>JSDoc type annotations may be added either on the line above the declaration, or
                else inline before the variable name.
            </p>
            <p>Example:</p>
            <pre><code class="language-js prettyprint">const /** !Array&lt;number&gt; */ data = [];

/** @type {!Array&lt;number&gt;} */
const data = [];
</code></pre>
            <p>Tip: There are many cases where the compiler can infer a templatized type but
                not its parameters.  This is particularly the case when the initializing literal
                or constructor call does not include any values of the template parameter type
                (e.g., empty arrays, objects, <code>Map</code>s, or <code>Set</code>s), or if the variable is modified
                in a closure.  Local variable type annotations are particularly helpful in these
                cases since otherwise the compiler will infer the template parameter as unknown.
            </p>
            <h3 id="features-array-literals">4.2 Array literals</h3>
            <h4 id="features-arrays-trailing-comma">4.2.1 Use trailing commas</h4>
            <p>Include a trailing comma whenever there is a line break between the final
                element and the closing bracket.
            </p>
            <p>Example:</p>
            <pre><code class="language-js prettyprint">const values = [
'first value',
'second value',
];
</code></pre>
            <h4 id="features-arrays-ctor">4.2.2 Do not use the variadic <code>Array</code> constructor</h4>
            <p>The constructor is error-prone if arguments are added or removed. Use a literal
                instead.
            </p>
            <p>Illegal:</p>
            <pre><code class="language-js prettyprint badcode">const a1 = new Array(x1, x2, x3);
const a2 = new Array(x1, x2);
const a3 = new Array(x1);
const a4 = new Array();
</code></pre>
            <p>This works as expected except for the third case: if <code>x1</code> is a whole number then
                <code>a3</code> is an array of size <code>x1</code> where all elements are <code>undefined</code>. If <code>x1</code> is any
                other number, then an exception will be thrown, and if it is anything else then
                it will be a single-element array.
            </p>
            <p>Instead, write</p>
            <pre><code class="language-js prettyprint">const a1 = [x1, x2, x3];
const a2 = [x1, x2];
const a3 = [x1];
const a4 = [];
</code></pre>
    </div>
</template>

<script>
    export default {
        props: ['companyName'],
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss"></style>