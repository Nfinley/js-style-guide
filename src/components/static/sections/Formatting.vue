<template>
    <div class="formatting-container">
        <h2 id="formatting">
            3 Formatting
        </h2>
        <p>
            <strong>Terminology Note</strong>: <em>block-like construct</em> refers to the body of a class, function, method, or brace-delimited block of code.  Note that, by <a href="#features-array-literals">??</a> and <a href="#features-object-literals">??</a>, any array or object literal may optionally be treated as if it were a block-like construct.
        </p>
        <p>
            Tip: Use <code>clang-format</code>. The JavaScript community has invested effort to make sure clang-format <q>does the right thing</q> on JavaScript files. <code>clang-format</code> has integration with several popular editors.
        </p>
        <h3 id="formatting-braces">
            3.1 Braces
        </h3>
        <h4 id="formatting-braces-all">3.1.1 Braces are used for all control structures</h4>
        <p>
            Braces are required for all control structures (i.e. <code>if</code>, <code>else</code>, <code>for</code>, <code>do</code>, <code>while</code>, as well as any others), even if the body contains only a single statement. The first statement of a non-empty block must begin on its own line.
        </p>
        <p>
            Illegal:
        </p>
        <pre><code class="language-js badcode prettyprint">if (someVeryLongCondition())
doSomething();

for (let i = 0; i &lt; foo.length; i++) bar(foo[i]);
</code></pre>
        <p>
            <strong>Exception</strong>: A simple if statement that can fit entirely on a single line with no wrapping (and that doesn&#8217;t have an else) may be kept on a single line with no braces when it improves readability. This is the only case in which a control structure may omit braces and newlines.
        </p>
        <pre><code class="language-js prettyprint">if (shortCondition()) return;
</code></pre>
        <h4 id="formatting-nonempty-blocks">
            3.1.2 Nonempty blocks: K&amp;R style
        </h4>
        <p>
            Braces follow the Kernighan and Ritchie style (<q><a href="http://www.codinghorror.com/blog/2012/07/new-programming-jargon.html">Egyptian brackets</a></q>) for <em>nonempty</em> blocks and block-like constructs:
        </p>
        <ul>
            <li>No line break before the opening brace.</li>
            <li>Line break after the opening brace.</li>
            <li>Line break before the closing brace.</li>
            <li>Line break after the closing brace <em>if</em> that brace terminates a statement or
                the body of a function or class statement, or a class method. Specifically,
                there is <em>no</em> line break after the brace if it is followed by <code>else</code>, <code>catch</code>,
                <code>while</code>, or a comma, semicolon, or right-parenthesis.
            </li>
        </ul>
        <p>
            Example:
        </p>
        <pre><code class="language-js prettyprint">class InnerClass {
constructor() {}

/** @param {number} foo */
method(foo) {
if (condition(foo)) {
try {
// Note: this might fail.
something();
} catch (err) {
recover();
}
}
}
}
</code></pre>
        <h4 id="formatting-empty-blocks">
            3.1.3 Empty blocks: may be concise
        </h4>
        <p>
            An empty block or block-like construct <em>may</em> be closed immediately after it is opened, with no characters, space, or line break in between (i.e. <code>{}</code>), <strong>unless</strong> it is a part of a <em>multi-block statement</em> (one that directly contains multiple blocks: <code>if</code>/<code>else</code> or <code>try</code>/<code>catch</code>/<code>finally</code>).
        </p>
        <p>
            Example:
        </p>
        <pre><code class="language-js prettyprint">function doNothing() {}
</code></pre>
        <p>
            Illegal:
        </p>
        <pre><code class="language-js prettyprint badcode">if (condition) {
// &#8230;
} else if (otherCondition) {} else {
// &#8230;
}

try {
// &#8230;
} catch (e) {}
</code></pre>
        <h3 id="formatting-block-indentation">
            3.2 Block indentation: +{{ indentNumSpaces }} spaces
        </h3>
        <p>
            Each time a new block or block-like construct is opened, the indent increases by {{ indentNumSpaces }} spaces. When the block ends, the indent returns to the previous indent level. The indent level applies to both code and comments throughout the block. (See the example in <a href="#formatting-nonempty-blocks">??</a>).
        </p>
        <h4 id="formatting-array-literals">
            3.2.1 Array literals: optionally <q>block-like</q>
        </h4>
        <p>
            Any array literal may optionally be formatted as if it were a &#8220;block-like construct.&#8221; For example, the following are all valid (<strong>not</strong> an exhaustive list):
        </p>
        <pre><code class="language-js prettyprint columns">const a = [
  0,
  1,
  2,
];

const b = [0, 1, 2];

</code></pre>
        <pre><code class="language-js prettyprint columns">const c = [0, 1, 2];

someMethod(foo, [
  0, 1, 2,
], bar);
</code></pre>
        <p>
            Other combinations are allowed, particularly when emphasizing semantic groupings between elements, but should not be used only to reduce the vertical size of larger arrays.
        </p>
        <h4 id="formatting-object-literals">
            3.2.2 Object literals: optionally <q>block-like</q>
        </h4>
        <p>
            Any object literal may optionally be formatted as if it were a &#8220;block-like construct.&#8221; The same examples apply as <a href="#formatting-array-literals">??</a>. For example, the following are all valid (<strong>not</strong> an exhaustive list):
        </p>
        <pre><code class="language-js prettyprint columns">const a = {
  a: 0,
  b: 1,
};

const b =
{a: 0, b: 1};
</code></pre>
        <pre><code class="language-js prettyprint columns">const c = {a: 0, b: 1};

someMethod(foo, {
  a: 0, b: 1,
}, bar);
</code></pre>
        <h4 id="formatting-class-literals">
            3.2.3 Class literals
        </h4>
        <p>
            Class literals (whether declarations or expressions) are indented as blocks. Do not add semicolons after methods, or after the closing brace of a class <em>declaration</em> (statements&#8212;such as assignments&#8212;that contain class <em>expressions</em> are still terminated with a semicolon). Use the <code>extends</code> keyword, but not the <code>@extends</code> JSDoc annotation unless the class extends a templatized type.
        </p>
        <p>
            Example:
        </p>
        <pre><code class="language-js prettyprint columns">class Foo {
constructor() {
/** @type {number} */
  this.x = 42;
}

/** @return {number} */
method() {
  return this.x;
}
}
Foo.Empty = class {};
</code></pre>
        <pre><code class="language-js prettyprint columns">/** @extends {Foo&lt;string&gt;} */
foo.Bar = class extends Foo {
/** @override */
method() {
  return super.method() / 2;
}
};

/** @interface */
class Frobnicator {
/** @param {string} message */
frobnicate(message) {}
}
</code></pre>
        <h4 id="formatting-function-expressions">
            3.2.4 Function expressions
        </h4>
        <p>
            When declaring an anonymous function in the list of arguments for a function call, the body of the function is indented {{ indentNumSpaces }} spaces more than the preceding indentation depth.
        </p>
        <p>
            Example:
        </p>
        <pre><code class="language-js prettyprint">prefix.something.reallyLongFunctionName('whatever', (a1, a2) =&gt; {
// Indent the function body +2 relative to indentation depth
// of the 'prefix' statement one line above.
if (a1.equals(a2)) {
  someOtherLongFunctionName(a1);
} else {
  andNowForSomethingCompletelyDifferent(a2.parrot);
}
});

some.reallyLongFunctionCall(arg1, arg2, arg3)
.thatsWrapped()
.then((result) =&gt; {
// Indent the function body +2 relative to the indentation depth
// of the '.then()' call.
if (result) {
result.use();
}
});
</code></pre>
        <h4 id="formatting-switch-statements">
            3.2.5 Switch statements
        </h4>
        <p>
            As with any other block, the contents of a switch block are indented +2.
        </p>
        <p>
            After a switch label, a newline appears, and the indentation level is increased +2, exactly as if a block were being opened. An explicit block may be used if required by lexical scoping. The following switch label returns to the previous indentation level, as if a block had been closed.
        </p>
        <p>
            A blank line is optional between a <code>break</code> and the following case.
        </p>
        <p>
            Example:
        </p>
        <pre><code class="language-js prettyprint">switch (animal) {
case Animal.BANDERSNATCH:
handleBandersnatch();
break;

case Animal.JABBERWOCK:
handleJabberwock();
break;

default:
throw new Error('Unknown animal');
}
</code></pre>
        <h3 id="formatting-statements">
            3.3 Statements
        </h3>
        <h4 id="formatting-one-statement-perline">
            3.3.1 One statement per line
        </h4>
        <p>
            Each statement is followed by a line-break.
        </p>
        <h4 id="formatting-semicolons-are-required">
            3.3.2 Semicolons are required
        </h4>
        <p>
            Every statement must be terminated with a semicolon. Relying on automatic semicolon insertion is forbidden.
        </p>
        <h3 id="formatting-column-limit">
            3.4 Column limit: 80
        </h3>
        <p>
            JavaScript code has a column limit of 80 characters. Except as noted below, any line that would exceed this limit must be line-wrapped, as explained in <a href="#formatting-line-wrapping">??</a>.
        </p>
        <p>
            <strong>Exceptions:</strong>
        </p>
        <ol>
            <li>
                Lines where obeying the column limit is not possible (for example, a long URL in JSDoc or a shell command intended to be copied-and-pasted).
            </li>
            <li>
                <code>goog.module</code> and <code>goog.require</code> statements (see <a href="#file-goog-module">??</a> and <a href="#file-goog-require">??</a>).
            </li>
        </ol>
        <h3 id="formatting-line-wrapping">
            3.5 Line-wrapping
        </h3>
        <p>
            <strong>Terminology Note</strong>: <em>Line-wrapping</em> is defined as breaking a single expression into multiple lines.
        </p>
        <p>
            There is no comprehensive, deterministic formula showing <em>exactly</em> how to line-wrap in every situation. Very often there are several valid ways to line-wrap the same piece of code.
        </p>
        <p>
            Note: While the typical reason for line-wrapping is to avoid overflowing the column limit, even code that would in fact fit within the column limit may be line-wrapped at the author's discretion.
        </p>
        <p>
            Tip: Extracting a method or local variable may solve the problem without the
            need to line-wrap.
        </p>
        <h4 id="formatting-where-to-break">
            3.5.1 Where to break
        </h4>
        <p>
            The prime directive of line-wrapping is: prefer to break at a <strong>higher syntactic level</strong>. 
        </p>
        <p>
            Preferred:
        </p>
        <pre><code class="language-js prettyprint">currentEstimate =
calc(currentEstimate + x * currentEstimate) /
2.0f;
</code></pre>
        <p>
            Discouraged:
        </p>
        <pre><code class="language-js prettyprint badcode">currentEstimate = calc(currentEstimate + x *
currentEstimate) / 2.0f;
</code></pre>
        <p>
            In the preceding example, the syntactic levels from highest to lowest are as
            follows: assignment, division, function call, parameters, number constant.
        </p>
        <p>
            Operators are wrapped as follows:
        </p>
        <ol>
            <li>
                When a line is broken at an operator the break comes after the symbol. (Note
                that this is not the same practice used in {{ companyName }} style for Java.)
                <ol>
                    <li>
                        This does not apply to the <q>dot</q> (<code>.</code>), which is not actually an
                        operator.
                    </li>
                </ol>
            </li>
            <li>
                A method or constructor name stays attached to the open parenthesis (<code>(</code>) that follows it.
            </li>
            <li>A comma (<code>,</code>) stays attached to the token that precedes it.</li>
        </ol>
        <blockquote>
            <p>
                Note: The primary goal for line wrapping is to have clear code, not necessarily code that fits in the smallest number of lines.
            </p>
        </blockquote>
        <h4 id="formatting-indent">
            3.5.2 Indent continuation lines at least +4 spaces
        </h4>
        <p>
            When line-wrapping, each line after the first (each <em>continuation line</em>) is indented at least +4 from the original line, unless it falls under the rules of block indentation.
        </p>
        <p>
            When there are multiple continuation lines, indentation may be varied beyond +4 as appropriate.  In general, continuation lines at a deeper syntactic level are indented by larger multiples of 4, and two lines use the same indentation level if and only if they begin with syntactically parallel elements.
        </p>
        <p>
            <a href="#formatting-horizontal-alignment">??</a> addresses the discouraged practice of
            using a variable number of spaces to align certain tokens with previous lines.
        </p>
        <h3 id="formatting-whitespace">
            3.6 Whitespace
        </h3>
        <h4 id="formatting-vertical-whitespace">
            3.6.1 Vertical whitespace
        </h4>
        <p>
            A single blank line appears:
        </p>
        <ol>
            <li>
                Between consecutive methods in a class or object literal
                <ol>
                    <li>
                        Exception: A blank line between two consecutive properties definitions in an object literal (with no other code between them) is optional. Such blank lines are used as needed to create <em>logical groupings</em> of fields.
                    </li>
                </ol>
            </li>
            <li>
                Within method bodies, sparingly to create <em>logical groupings</em> of statements. Blank lines at the start or end of a function body are not allowed.
            </li>
            <li>
                <em>Optionally</em> before the first or after the last method in a class or object literal (neither encouraged nor discouraged).
            </li>
            <li>
                As required by other sections of this document (e.g.<a href="#file-goog-require">??</a>).
            </li>
        </ol>
        <p>
            <em>Multiple</em> consecutive blank lines are permitted, but never required (nor encouraged).
        </p>
        <h4 id="formatting-horizontal-whitespace">
            3.6.2 Horizontal whitespace
        </h4>
        <p>
            Use of horizontal whitespace depends on location, and falls into three broad
            categories: <em>leading</em> (at the start of a line), <em>trailing</em> (at the end of a
            line), and <em>internal</em>.  Leading whitespace (i.e., indentation) is addressed
            elsewhere.  Trailing whitespace is forbidden.
        </p>
        <p>
            Beyond where required by the language or other style rules, and apart from literals, comments, and JSDoc, a single internal ASCII space also appears in the following places <strong>only</strong>.
        </p>
        <ol>
            <li>Separating any reserved word (such as <code>if</code>, <code>for</code>, or <code>catch</code>) from an open
                parenthesis (<code>(</code>) that follows it on that line.
            </li>
            <li>Separating any reserved word (such as <code>else</code> or <code>catch</code>) from a closing
                curly brace (<code>}</code>) that precedes it on that line.
            </li>
            <li>
                Before any open curly brace (<code>{</code>), with two exceptions:
                <ol>
                    <li>Before an object literal that is the first argument of a function or the
                        first element in an array literal (e.g. <code>foo({a: [{c: d}]})</code>).
                    </li>
                    <li>In a template expansion, as it is forbidden by the language
                        (e.g. <code>abc${1 + 2}def</code>).
                    </li>
                </ol>
            </li>
            <li>On both sides of any binary or ternary operator.</li>
            <li>After a comma (<code>,</code>) or semicolon (<code>;</code>). Note that spaces are <em>never</em> allowed
                before these characters.
            </li>
            <li>After the colon (<code>:</code>) in an object literal.</li>
            <li>On both sides of the double slash (<code>//</code>) that begins an end-of-line
                comment. Here, multiple spaces are allowed, but not required.
            </li>
            <li>After an open-JSDoc comment character and on both sides of close characters
                (e.g. for short-form type declarations or casts: <code>this.foo = /** @type
                {number} */ (bar);</code> or <code>function(/** string */ foo) {</code>).
            </li>
        </ol>
        <h4 id="formatting-horizontal-alignment">3.6.3 Horizontal alignment: discouraged</h4>
        <p><strong>Terminology Note</strong>: <em>Horizontal alignment</em> is the practice of adding a
            variable number of additional spaces in your code with the goal of making
            certain tokens appear directly below certain other tokens on previous lines.
        </p>
        <p>This practice is permitted, but it is <strong>generally discouraged</strong> by {{ companyName }}
            Style. It is not even required to <em>maintain</em> horizontal alignment in places
            where it was already used.
        </p>
        <p>Here is an example without alignment, followed by one with alignment.  Both are
            allowed, but the latter is discouraged:
        </p>
        <pre><code class="language-js prettyprint">{
tiny: 42, // this is great
longer: 435, // this too
};

{
tiny:   42,  // permitted, but future edits
longer: 435, // may leave it unaligned
};
</code></pre>
            <p>Tip: Alignment can aid readability, but it creates problems for future
                maintenance. Consider a future change that needs to touch just one line. This
                change may leave the formerly-pleasing formatting mangled, and that is
                allowed. More often it prompts the coder (perhaps you) to adjust whitespace on
                nearby lines as well, possibly triggering a cascading series of
                reformattings. That one-line change now has a <q>blast radius.</q> This can at worst
                result in pointless busywork, but at best it still corrupts version history
                information, slows down reviewers and exacerbates merge conflicts.
            </p>
            <h4 id="formatting-function-arguments">3.6.4 Function arguments</h4>
            <p>Prefer to put all function arguments on the same line as the function name. If doing so would exceed the 80-column limit, the arguments must be line-wrapped in a readable way. To save space, you may wrap as close to 80 as possible, or put each argument on its own line to enhance readability. Indentation should be four spaces. Aligning to the parenthesis is allowed, but discouraged. Below are the most common patterns for argument wrapping:</p>
            <pre><code class="language-js prettyprint">// Arguments start on a new line, indented four spaces. Preferred when the
// arguments don't fit on the same line with the function name (or the keyword
// "function") but fit entirely on the second line. Works with very long
// function names, survives renaming without reindenting, low on space.
doSomething(
descriptiveArgumentOne, descriptiveArgumentTwo, descriptiveArgumentThree) {
// &#8230;
}

// If the argument list is longer, wrap at 80. Uses less vertical space,
// but violates the rectangle rule and is thus not recommended.
doSomething(veryDescriptiveArgumentNumberOne, veryDescriptiveArgumentTwo,
tableModelEventHandlerProxy, artichokeDescriptorAdapterIterator) {
// &#8230;
}

// Four-space, one argument per line.  Works with long function names,
// survives renaming, and emphasizes each argument.
doSomething(
veryDescriptiveArgumentNumberOne,
veryDescriptiveArgumentTwo,
tableModelEventHandlerProxy,
artichokeDescriptorAdapterIterator) {
// &#8230;
}
</code></pre>
            <h3 id="formatting-grouping-parentheses">3.7 Grouping parentheses: recommended</h3>
            <p>Optional grouping parentheses are omitted only when the author and reviewer
                agree that there is no reasonable chance that the code will be misinterpreted
                without them, nor would they have made the code easier to read. It is <em>not</em>
                reasonable to assume that every reader has the entire operator precedence table
                memorized.
            </p>
            <p>Do not use unnecessary parentheses around the entire expression following
                <code>delete</code>, <code>typeof</code>, <code>void</code>, <code>return</code>, <code>throw</code>, <code>case</code>, <code>in</code>, <code>of</code>, or <code>yield</code>.
            </p>
            <p>Parentheses are required for type casts: <code>/** @type {!Foo} */ (foo)</code>.</p>
            <h3 id="formatting-comments">3.8 Comments</h3>
            <p>This section addresses <em>implementation comments</em>. JSDoc is addressed separately
                in <a href="#jsdoc">??</a>.
            </p>
            <h4 id="formatting-block-comment-style">3.8.1 Block comment style</h4>
            <p>Block comments are indented at the same level as the surrounding code. They may
                be in <code>/* &#8230; */</code> or <code>//</code>-style. For multi-line <code>/* &#8230; */</code> comments, subsequent
                lines must start with * aligned with the <code>*</code> on the previous line, to make
                comments obvious with no extra context.  &#8220;Parameter name&#8221; comments should appear
                after values whenever the value and method name do not sufficiently convey the
                meaning.
            </p>
            <pre><code class="language-js prettyprint">/*
* This is
* okay.
*/

// And so
// is this.

/* This is fine, too. */

someFunction(obviousParam, true /* shouldRender */, 'hello' /* name */);
</code></pre>
            <p>Comments are not enclosed in boxes drawn with asterisks or other characters.</p>
            <p>Do not use JSDoc (<code>/** &#8230; */</code>) for any of the above implementation comments.</p>
    </div>
</template>

<script>
    export default {
        props: ['companyName'],
        data() {
            return {
                indentNumSpaces: 4
            }
        }
    }
</script>

<style lang="scss"></style>