<template>
    <div class="table-of-contents-container">
        <div id="table-of-contents">
            <div class="columns">
                <div class="column is-6">
                    <dl>
                        <dt><a href="#introduction">1) Introduction</a></dt>
                        <dd><a href="#terminology-notes">1.1 Terminology notes</a></dd>
                        <dd><a href="#guide-notes">1.2 Guide notes</a></dd>
                    </dl>
                    <dl>
                        <dt><a href="#source-file-basics">2) Source file basics</a></dt>
                        <dd><a href="#file-name">2.1 File name</a></dd>
                        <dd><a href="#file-encoding">2.2 File encoding: UTF-8</a></dd>
                        <dd><a href="#special-characters">2.3 Special characters</a></dd>
                    </dl>
                    <dl>
                        <dt><a href="#formatting">3) Formatting</a></dt>
                        <dd><a href="#formatting-braces">3.1 Braces</a></dd>
                        <dd><a href="#formatting-block-indentation">3.2 Block indentation: +2 spaces</a></dd>
                        <dd><a href="#formatting-statements">3.3 Statements</a></dd>
                        <dd><a href="#formatting-column-limit">3.4 Column limit: 80</a></dd>
                        <dd><a href="#formatting-line-wrapping">3.5 Line-wrapping</a></dd>
                        <dd><a href="#formatting-whitespace">3.6 Whitespace</a></dd>
                        <dd><a href="#formatting-grouping-parentheses">3.7 Grouping parentheses: recommended</a></dd>
                        <dd><a href="#formatting-comments">3.8 Comments</a></dd>
                    </dl>
                    <dl>
                        <dt><a href="#language-features">4) Language features</a></dt>
                        <dd><a href="#features-local-variable-declarations">4.1 Local variable declarations</a></dd>
                        <dd><a href="#features-array-literals">4.2 Array literals</a></dd>
                        <dd><a href="#features-object-literals">4.3 Object literals</a></dd>
                        <dd><a href="#features-classes">4.4 Classes</a></dd>
                        <dd><a href="#features-functions">4.5 Functions</a></dd>
                        <dd><a href="#features-string-literals">4.6 String literals</a></dd>
                        <dd><a href="#features-number-literals">4.7 Number literals</a></dd>
                        <dd><a href="#features-control-structures">4.8 Control structures</a></dd>
                        <dd><a href="#features-this">4.9 this</a></dd>
                        <dd><a href="#disallowed-features">4.10 Disallowed features</a></dd>
                    </dl>
                </div>
                <div class="column is-6">
                    <dl>
                        <dt><a href="#naming">5) Naming</a></dt>
                        <dd><a href="#naming-rules-common-to-all-identifiers">5.1 Rules common to all identifiers</a></dd>
                        <dd><a href="#naming-rules-by-identifier-type">5.2 Rules by identifier type</a></dd>
                        <dd><a href="#naming-camel-case-defined">5.3 Camel case: defined</a></dd>
                    </dl>
                    <dl>
                        <dt><a href="#policies">6) Policies</a></dt>
                        <dd><a href="#policies-be-consistent">6.1 Issues unspecified by {{ companyName }} Style: Be Consistent!</a></dd>
                        <dd><a href="#policies-compiler-warnings">6.2 Compiler warnings</a></dd>
                        <dd><a href="#policies-deprecation">6.3 Deprecation</a></dd>
                        <dd><a href="#policies-code-not-in-google-style">6.4 Code not in {{ companyName }} Style</a></dd>
                        <dd><a href="#policies-local-style-rules">6.5 Local style rules</a></dd>
                        <dd><a href="#policies-generated-code-mostly-exempt">6.6 Generated code: mostly exempt</a></dd>
                    </dl>
                    <dl>
                        <dt><a href="#appendices">7) Appendices</a></dt>
                        <dd><a href="#appendices-jsdoc-tag-reference">7.1 JSDoc tag reference</a></dd>
                        <dd><a href="#appendices-commonly-misunderstood-style-rules">7.2 Commonly misunderstood style rules</a></dd>
                        <dd><a href="#appendices-style-related-tools">7.3 Style-related tools</a></dd>
                        <dd><a href="#appendices-legacy-exceptions">7.4 Exceptions for legacy platforms</a></dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['companyName'],
    }
</script>

<style lang="scss">

    dl {
        dt {
            margin-bottom: 10px;
        }
    }

</style>