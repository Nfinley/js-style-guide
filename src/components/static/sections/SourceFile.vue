<template>
    <div class="source-file-container">
        <h2 id="source-file-basics">
            2 Source file basics
        </h2>
        <h3 id="file-name">
            2.1 File name
        </h3>
        <p>
            File names must be all lowercase and may include underscores (<code>_</code>) or dashes
            (<code>-</code>), but no additional punctuation. Follow the convention that your project
            uses. Filenames&#8217; extension must be <code>.js</code>.
        </p>
        <h3 id="file-encoding">
            2.2 File encoding: UTF-8
        </h3>
        <p>
            Source files are encoded in <strong>UTF-8</strong>.
        </p>
        <h3 id="special-characters">
            2.3 Special characters
        </h3>
        <h4 id="whitespace-characters">
            2.3.1 Whitespace characters
        </h4>
        <p>
            Aside from the line terminator sequence, the ASCII horizontal space character
            (0x20) is the only whitespace character that appears anywhere in a source
            file. This implies that
        </p>
        <ol>
            <li>
                <p>
                    All other whitespace characters in string literals are escaped, and
                </p>
            </li>
            <li>
                <p>
                    Tab characters are <strong>not</strong> used for indentation.
                </p>
            </li>
        </ol>
        <h4 id="special-escape-sequences">
            2.3.2 Special escape sequences
        </h4>
        <p>
            For any character that has a special escape sequence (<code>\'</code>, <code>\"</code>, <code>\\</code>, <code>\b</code>,
            <code>\f</code>, <code>\n</code>, <code>\r</code>, <code>\t</code>, <code>\v</code>), that sequence is used rather than the
            corresponding numeric escape (e.g <code>\x0a</code>, <code>\u000a</code>, or <code>\u{a}</code>). Legacy octal
            escapes are never used.
        </p>
        <h4 id="non-ascii-characters">
            2.3.3 Non-ASCII characters
        </h4>
        <p>
            For the remaining non-ASCII characters, either the actual Unicode character
            (e.g. <code>&#8734;</code>) or the equivalent hex or Unicode escape (e.g. <code>\u221e</code>) is used,
            depending only on which makes the code <strong>easier to read and understand</strong>.
        </p>
        <p>
            Tip: In the Unicode escape case, and occasionally even when actual Unicode
            characters are used, an explanatory comment can be very helpful.
        </p>
        <table>
            <thead>
                <tr>
                    <th>
                        Example
                    </th>
                    <th>
                        Discussion
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code class="prettyprint lang-js">const units = '&#956;s';</code></td>
                    <td>
                        Best: perfectly clear even without a comment.
                    </td>
                </tr>
                <tr>
                    <td>
                        <code class="prettyprint lang-js">const units = '\u03bcs'; // '&#956;s'
                        </code>
                    </td>
                    <td>
                        Allowed, but there&#8217;s no reason to do this.
                    </td>
                </tr>
                <tr>
                    <td>
                        <code class="prettyprint lang-js">const units = '\u03bcs'; // Greek letter mu, 's'
                        </code>
                    </td>
                    <td>
                        Allowed, but awkward and prone to mistakes.
                    </td>
                </tr>
                <tr>
                    <td><code class="badcode">const units = '\u03bcs';</code></td>
                    <td>
                        Poor: the reader has no idea what this is.
                    </td>
                </tr>
                <tr>
                    <td>
                        <code class="prettyprint lang-js">return '\ufeff' + content;  // byte order mark
                        </code>
                    </td>
                    <td>
                        Good: use escapes for non-printable characters, and comment if
                        necessary.
                    </td>
                </tr>
            </tbody>
        </table>
        <p>
            Tip: Never make your code less readable simply out of fear that some programs
            might not handle non-ASCII characters properly. If that happens, those programs
            are <strong>broken</strong> and they must be <strong>fixed</strong>.
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss"></style> 