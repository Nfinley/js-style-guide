<template>
    <div class="appendices-container">
        <h2 id="appendices">9 Appendices</h2>
        <h3 id="appendices-jsdoc-tag-reference">9.1 JSDoc tag reference</h3>
        <p>JSDoc serves multiple purposes in JavaScript.  In addition to being used to
            generate documentation it is also used to control tooling.  The best known are
            the Closure Compiler type annotations.
        </p>
        <h4 id="appendices-type-annotations">9.1.1 Type annotations and other Closure Compiler annotations</h4>
        <p>Documentation for JSDoc used by the Closure Compiler is described in
            <a href="https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler">Annotating JavaScript for the Closure Compiler</a> and <a href="https://github.com/google/closure-compiler/wiki/Types-in-the-Closure-Type-System">Types in the Closure Type
            System</a>.
        </p>
        <h4 id="appendices-documentation-annotations">9.1.2 Documentation annotations</h4>
        <p>In addition to the JSDoc described in <a href="https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler">Annotating JavaScript for the Closure
            Compiler</a> the following tags are common and well supported by various
            documentation generations tools (such as <a href="https://github.com/jleyba/js-dossier">JsDossier</a>) for purely documentation
            purposes.
        <table>
            <thead>
                <tr>
                    <th>Tag</th>
                    <th>Template &amp; Examples</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>@author</code> or <code>@owner</code></td>
                    <td>
                        <code>@author username@google.com (First Last)</code>
                        <p><em>For example:</em></p>
                        <pre class="prettyprint lang-js">
/**
* @fileoverview Utilities for handling textareas.
* @author <a href="mailto:kuth@google.com">kuth@google.com</a> (Uthur Pendragon)
*/
</pre>
                    </td>
                    <td>
                        Document the author of a file or the owner of a test, generally only
                        used in the <code>@fileoverview</code> comment. The <code>@owner</code> tag is used by the
                        unit test dashboard to determine who owns the test results.
                        <p>Not recommended.</p>
                    </td>
                </tr>
                <tr>
                    <td><code>@bug</code></td>
                    <td>
                        <code>@bug bugnumber</code>
                        <p><em>For example:</em></p>
                        <pre class="prettyprint lang-js">
/** @bug 1234567 */
function testSomething() {
// &#8230;
}

<p>/**
* @bug 1234568
* @bug 1234569
*/
function testTwoBugs() {
// &#8230;
}
</p></pre>
                    </td>
                    <td>
                        Indicates what bugs the given test function regression tests.
                        <p>Multiple bugs should each have their own <code>@bug</code> line, to make
                            searching for regression tests as easy as possible.
                        </p>
                    </td>
                </tr>
                <tr>
                    <td><code>@code</code></td>
                    <td>
                        <code>{@code ...}</code>
                        <p><em>For example:</em></p>
                        <pre class="prettyprint lang-js">
/**
* Moves to the next position in the selection.
* Throws {@code goog.iter.StopIteration} when it
* passes the end of the range.
* @return {!Node} The node at the next position.
*/
goog.dom.RangeIterator.prototype.next = function() {
// &#8230;
};
</pre>
                    </td>
                    <td>Indicates that a term in a JSDoc description is code so it may be
                        correctly formatted in generated documentation.
                    </td>
                </tr>
                <tr>
                    <td><code>@see</code></td>
                    <td>
                        <code>@see Link</code>
                        <p><em>For example:</em></p>
                        <pre class="prettyprint lang-js">
/**
* Adds a single item, recklessly.
* @see #addSafely
* @see goog.Collect
* @see goog.RecklessAdder#add
*/
</pre>
                    </td>
                    <td>Reference a lookup to another class function or method.</td>
                </tr>
                <tr>
                    <td><code>@supported</code></td>
                    <td>
                        <code>@supported Description</code>
                        <p><em>For example:</em></p>
                        <pre class="prettyprint lang-js">
/**
* @fileoverview Event Manager
* Provides an abstracted interface to the
* browsers' event systems.
* @supported IE10+, Chrome, Safari
*/
</pre>
                    </td>
                    <td>Used in a fileoverview to indicate what browsers are supported by
                        the file.
                    </td>
                </tr>
                <tr>
                    <td><code>@desc</code></td>
                    <td>
                        <code>@desc Message description</code>
                        <p><em>For example:</em></p>
                        <pre class="prettyprint lang-js">
/** @desc Notifying a user that their account has been created. */
exports.MSG_ACCOUNT_CREATED = goog.getMsg(
'Your account has been successfully created.');
</pre>
                    </td>
                </tr>
            </tbody>
        </table>
        </p>
        <p>You may also see other types of JSDoc annotations in third-party code. These
            annotations appear in the <a href="http://code.google.com/p/jsdoc-toolkit/wiki/TagReference">JSDoc Toolkit Tag Reference</a> but are not considered
            part of valid {{ companyName }} style.
        </p>
        <h4 id="appendices-framework-specific-annotations">9.1.3 Framework specific annotations</h4>
        <p>The following annotations are specific to a particular framework.
        <table>
            <thead>
                <tr>
                    <th>Framework</th>
                    <th>Tag</th>
                    <th>Documentation</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Angular 1</td>
                    <td><code>@ngInject</code></td>
                </tr>
                <tr>
                    <td>Polymer</td>
                    <td><code>@polymerBehavior</code></td>
                    <td>
                        <a href="https://github.com/google/closure-compiler/wiki/Polymer-Pass">https://github.com/google/closure-compiler/wiki/Polymer-Pass</a>
                    </td>
                </tr>
            </tbody>
        </table>
        </p>
        <h4 id="appendices-notes-about-standard-closure-compiler-annotations">9.1.4 Notes about standard Closure Compiler annotations</h4>
        <p>The following tags used to be standard but are now deprecated.
        <table>
            <thead>
                <tr>
                    <th>Tag</th>
                    <th>Template &amp; Examples</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>@expose</code></td>
                    <td><code>@expose</code></td>
                    <td><strong>Deprecated. Do not use. Use <code>@export</code> and/or <code>@nocollapse</code>
                        instead.</strong>
                    </td>
                </tr>
                <tr>
                    <td><code>@inheritDoc</code></td>
                    <td><code>@inheritDoc</code></td>
                    <td><strong>Deprecated. Do not use. Use <code>@override</code> instead.</strong></td>
                </tr>
            </tbody>
        </table>
        </p>
        <h3 id="appendices-commonly-misunderstood-style-rules">9.2 Commonly misunderstood style rules</h3>
        <p>Here is a collection of lesser-known or commonly misunderstood facts about
            {{ companyName }} Style for JavaScript. (The following are true statements; this is not a
            list of <q>myths.</q>)
        </p>
        <ul>
            <li>Neither a copyright statement nor <code>@author</code> credit is required in a source
                file. (Neither is explicitly recommended, either.)
            </li>
            <li>Aside from the constructor coming first
                (<a href="#features-classes-constructors">??</a>), there is no <q>hard and fast</q> rule
                governing how to order the members of a class (<a href="#features-classes">??</a>).
            </li>
            <li>Empty blocks can usually be represented concisely as <code>{}</code>, as detailed in
                (<a href="#formatting-empty-blocks">??</a>).
            </li>
            <li>The prime directive of line-wrapping is: prefer to break at a higher
                syntactic level (<a href="#formatting-where-to-break">??</a>).
            </li>
            <li>Non-ASCII characters are allowed in string literals, comments and Javadoc,
                and in fact are recommended when they make the code easier to read than the
                equivalent Unicode escape would (<a href="#non-ascii-characters">??</a>).
            </li>
        </ul>
        <h3 id="appendices-style-related-tools">9.3 Style-related tools</h3>
        <p>The following tools exist to support various aspects of {{ companyName }} Style.</p>
        <h4 id="appendices-tools-closure-compiler">9.3.1 Closure Compiler</h4>
        <p>This program performs type checking and other checks,
            optimizations and other transformations (such as ECMAScript 6 to ECMAScript 5
            code lowering).
        </p>
        <h4 id="appendices-clang-format">9.3.2 <code>clang-format</code></h4>
        <p>This program  reformats
            JavaScript source code into {{ companyName }} Style, and also follows a number of
            non-required but frequently readability-enhancing formatting practices.
        </p>
        <p><code>clang-format</code> is not required. Authors are allowed to change its output, and
            reviewers are allowed to ask for such changes; disputes are worked out in the
            usual way. However, subtrees may choose to opt in to such enforcement locally.
        </p>
        <h4 id="appendices-closure-compiler-linter">9.3.3 Closure compiler linter</h4>
        <p>This program  checks for a
            variety of missteps and anti-patterns.
        </p>
        <h4 id="appendices-conformance-framework">9.3.4 Conformance framework</h4>
        <p>The JS Conformance Framework is a tool that is part of the Closure Compiler that
            provides developers a simple means to specify a set of additional checks to be
            run against their code base above the standard checks.  Conformance checks can,
            for example, forbid access to a certain property, or calls to a certain
            function, or missing type information (unknowns).
        </p>
        <p>These rules are commonly used to enforce critical restrictions (such as defining
            globals, which could break the codebase) and security patterns (such as using
            <code>eval</code> or assigning to <code>innerHTML</code>), or more loosely to improve code quality.
        </p>
        <p>For additional information see the official documentation for the
            <a href="https://github.com/google/closure-compiler/wiki/JS-Conformance-Framework">JS Conformance Framework</a>.
        </p>
        <h3 id="appendices-legacy-exceptions">9.4 Exceptions for legacy platforms</h3>
        <h4 id="appendices-legacy-exceptions-overview">9.4.1 Overview</h4>
        <p>This section describes exceptions and additional rules to be followed when
            modern ECMAScript 6 syntax is not available to the code authors. Exceptions to
            the recommended style are required when ECMAScript 6 syntax is not possible and
            are outlined here:
        </p>
        <ul>
            <li>Use of <code>var</code> declarations is allowed</li>
            <li>Use of <code>arguments</code> is allowed</li>
            <li>Optional parameters without default values are allowed</li>
        </ul>
        <h4 id="appendices-legacy-exceptions-var">9.4.2 Use <code>var</code></h4>
        <h5 id="appendices-legacy-exceptions-var-scope">9.4.2.1 <code>var</code> declarations are NOT block-scoped</h5>
        <p><code>var</code> declarations are scoped to the beginning of the nearest enclosing
            function, script or module, which can cause unexpected behavior, especially with
            function closures that reference <code>var</code> declarations inside of loops. The
            following code gives an example:
        </p>
        <pre><code class="language-js prettyprint badcode">for (var i = 0; i &lt; 3; ++i) {
var iteration = i;
setTimeout(function() { console.log(iteration); }, i*1000);
}

// logs 2, 2, 2 -- NOT 0, 1, 2
// because `iteration` is function-scoped, not local to the loop.

</code></pre>
        <h5 id="appendices-legacy-exceptions-var-declare">9.4.2.2 Declare variables as close as possible to first use</h5>
        <p>Even though <code>var</code> declarations are scoped to the beginning of the enclosing
            function, <code>var</code> declarations should be as close as possible to their first use,
            for readability purposes. However, do not put a <code>var</code> declaration inside a block
            if that variable is referenced outside the block. For example:
        </p>
        <pre><code class="language-js prettyprint">function sillyFunction() {
var count = 0;
for (var x in y) {
// "count" could be declared here, but don't do that.
count++;
}
console.log(count + ' items in y');
}
</code></pre>
        <h5 id="appendices-legacy-exceptions-var-const">9.4.2.3 Use @const for constants variables</h5>
        <p>For global declarations where the <code>const</code> keyword would be used, if it were
            available, annotate the <code>var</code> declaration with @const instead (this is optional
            for local variables).
        </p>
        <h4 id="appendices-legacy-exceptions-function">9.4.3 Do not use block scoped functions declarations</h4>
        <p>Do <strong>not</strong> do this:</p>
        <pre><code class="language-js prettyprint badcode">if (x) {
function foo() {}
}
</code></pre>
        <p>While most JavaScript VMs implemented before ECMAScript 6 support function
            declarations within blocks it was not standardized. Implementations were
            inconsistent with each other and with the now-standard ECMAScript 6 behavior for
            block scoped function declaration. ECMAScript 5 and prior only allow for
            function declarations in the root statement list of a script or function and
            explicitly ban them in block scopes in strict mode.
        </p>
        <p>To get consistent behavior, instead use a <code>var</code> initialized with a function
            expression to define a function within a block:
        </p>
        <pre><code class="language-js prettyprint">if (x) {
var foo = function() {};
}
</code></pre>
        <h4 id="appendices-legacy-exceptions-goog-provide">9.4.4 Dependency management with <code>goog.provide</code>/<code>goog.require</code></h4>
        <p><strong><code>goog.provide</code> is deprecated. All new files should use <code>goog.module</code>, even in
            projects with existing <code>goog.provide</code> usage. The following rules are for
            pre-existing goog.provide files, only.</strong>
        </p>
        <h5 id="appendices-legacy-exceptions-goog-provide-summary">9.4.4.1 Summary</h5>
        <ul>
            <li>Place all <code>goog.provide</code>s first, <code>goog.require</code>s second. Separate provides
                from requires with an empty line.
            </li>
            <li>Sort the entries alphabetically (uppercase first).</li>
            <li>Don't wrap <code>goog.provide</code> and <code>goog.require</code> statements. Exceed 80 columns
                if necessary.
            </li>
            <li>Only provide top-level symbols.</li>
        </ul>
        <p>As of Oct 2016, <strong><code>goog.provide</code>/<code>goog.require</code> dependency management is
            deprecated</strong>. All new files, even in projects using <code>goog.provide</code> for older
            files, should use
            <a href="#source-file-structure"><code>goog.module</code></a>.
        </p>
        <p><code>goog.provide</code> statements should be grouped together and placed first. All
            <code>goog.require</code> statements should follow. The two lists should be separated with
            an empty line.
        </p>
        <p>Similar to import statements in other languages, <code>goog.provide</code> and
            <code>goog.require</code> statements should be written in a single line, even if they
            exceed the 80 column line length limit.
        </p>
        <p>The lines should be sorted alphabetically, with uppercase letters coming first:</p>
        <pre><code class="language-js prettyprint">goog.provide('namespace.MyClass');
goog.provide('namespace.helperFoo');

goog.require('an.extremelyLongNamespace.thatSomeoneThought.wouldBeNice.andNowItIsLonger.Than80Columns');
goog.require('goog.dom');
goog.require('goog.dom.TagName');
goog.require('goog.dom.classes');
goog.require('goog.dominoes');

</code></pre>
        <p>All members defined on a class should be in the same file. Only top-level
            classes should be provided in a file that contains multiple members defined on
            the same class (e.g. enums, inner classes, etc).
        </p>
        <p>Do this:</p>
        <pre><code class="language-js prettyprint">goog.provide('namespace.MyClass');
</code></pre>
        <p>Not this:</p>
        <pre><code class="language-js prettyprint badcode">goog.provide('namespace.MyClass');
goog.provide('namespace.MyClass.CONSTANT');
goog.provide('namespace.MyClass.Enum');
goog.provide('namespace.MyClass.InnerClass');
goog.provide('namespace.MyClass.TypeDef');
goog.provide('namespace.MyClass.staticMethod');
</code></pre>
        <p>Members on namespaces may also be provided:</p>
        <pre><code class="language-js prettyprint">goog.provide('foo.bar');
goog.provide('foo.bar.CONSTANT');
goog.provide('foo.bar.method');
</code></pre>
        <h5 id="appendices-legacy-exceptions-goog-scope">9.4.4.2 Aliasing with <code>goog.scope</code></h5>
        <p><strong><code>goog.scope</code> is deprecated. New files should not use <code>goog.scope</code> even in
            projects with existing goog.scope usage.</strong>
        </p>
        <p><code>goog.scope</code> may be used to shorten references to namespaced symbols in
            code using <code>goog.provide</code>/<code>goog.require</code> dependency management.
        </p>
        <p>Only one <code>goog.scope</code> invocation may be added per file. Always place it in
            the global scope.
        </p>
        <p>The opening <code>goog.scope(function() {</code> invocation must be preceded by exactly one
            blank line and follow any <code>goog.provide</code> statements, <code>goog.require</code> statements,
            or top-level comments. The invocation must be closed on the last line in the
            file. Append <code>// goog.scope</code> to the closing statement of the scope. Separate the
            comment from the semicolon by two spaces.
        </p>
        <p>Similar to C++ namespaces, do not indent under <code>goog.scope</code> declarations.
            Instead, continue from the 0 column.
        </p>
        <p>Only make aliases for names that will not be re-assigned to another object
            (e.g., most constructors, enums, and namespaces). Do not do this (see below for
            how to alias a constructor):
        </p>
        <pre><code class="language-js prettyprint badcode">goog.scope(function() {
var Button = goog.ui.Button;

Button = function() { ... };
...
</code></pre>
        <p>Names must be the same as the last property of the global that they are aliasing.</p>
        <pre><code class="language-js prettyprint">goog.provide('my.module.SomeType');

goog.require('goog.dom');
goog.require('goog.ui.Button');

goog.scope(function() {
var Button = goog.ui.Button;
var dom = goog.dom;

// Alias new types after the constructor declaration.
my.module.SomeType = function() { ... };
var SomeType = my.module.SomeType;

// Declare methods on the prototype as usual:
SomeType.prototype.findButton = function() {
// Button as aliased above.
this.button = new Button(dom.getElement('my-button'));
};
...
});  // goog.scope
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