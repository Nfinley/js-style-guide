<template>
    <div class="table-of-contents-container">
        <div id="table-of-contents">
            <div class="columns">
                <div class="column is-6">
                    <dl>
                        <dt><a href="#introduction">1 Introduction</a></dt>
                        <dd><a href="#terminology-notes">1.1 Terminology notes</a></dd>
                        <dd><a href="#guide-notes">1.2 Guide notes</a></dd>
                    </dl>
                    <dl>
                        <dt><a href="#source-file-basics">2 Source file basics</a></dt>
                        <dd><a href="#file-name">2.1 File name</a></dd>
                        <dd><a href="#file-encoding">2.2 File encoding: UTF-8</a></dd>
                        <dd><a href="#special-characters">2.3 Special characters</a></dd>
                    </dl>
                    <dl>
                        <dt><a href="#formatting">4 Formatting</a></dt>
                        <dd><a href="#formatting-braces">4.1 Braces</a></dd>
                        <dd><a href="#formatting-block-indentation">4.2 Block indentation: +2 spaces</a></dd>
                        <dd><a href="#formatting-statements">4.3 Statements</a></dd>
                        <dd><a href="#formatting-column-limit">4.4 Column limit: 80</a></dd>
                        <dd><a href="#formatting-line-wrapping">4.5 Line-wrapping</a></dd>
                        <dd><a href="#formatting-whitespace">4.6 Whitespace</a></dd>
                        <dd><a href="#formatting-grouping-parentheses">4.7 Grouping parentheses: recommended</a></dd>
                        <dd><a href="#formatting-comments">4.8 Comments</a></dd>
                    </dl>
                    <dl>
                        <dt><a href="#language-features">5 Language features</a></dt>
                        <dd><a href="#features-local-variable-declarations">5.1 Local variable declarations</a></dd>
                        <dd><a href="#features-array-literals">5.2 Array literals</a></dd>
                        <dd><a href="#features-object-literals">5.3 Object literals</a></dd>
                        <dd><a href="#features-classes">5.4 Classes</a></dd>
                        <dd><a href="#features-functions">5.5 Functions</a></dd>
                        <dd><a href="#features-string-literals">5.6 String literals</a></dd>
                        <dd><a href="#features-number-literals">5.7 Number literals</a></dd>
                        <dd><a href="#features-control-structures">5.8 Control structures</a></dd>
                        <dd><a href="#features-this">5.9 this</a></dd>
                        <dd><a href="#disallowed-features">5.10 Disallowed features</a></dd>
                    </dl>
                </div>
                <div class="column is-6">
                    <dl>
                        <dt><a href="#naming">6 Naming</a></dt>
                        <dd><a href="#naming-rules-common-to-all-identifiers">6.1 Rules common to all identifiers</a></dd>
                        <dd><a href="#naming-rules-by-identifier-type">6.2 Rules by identifier type</a></dd>
                        <dd><a href="#naming-camel-case-defined">6.3 Camel case: defined</a></dd>
                    </dl>
                    <dl>
                        <dt><a href="#policies">8 Policies</a></dt>
                        <dd><a href="#policies-be-consistent">8.1 Issues unspecified by {{ companyName }} Style: Be Consistent!</a></dd>
                        <dd><a href="#policies-compiler-warnings">8.2 Compiler warnings</a></dd>
                        <dd><a href="#policies-deprecation">8.3 Deprecation</a></dd>
                        <dd><a href="#policies-code-not-in-google-style">8.4 Code not in {{ companyName }} Style</a></dd>
                        <dd><a href="#policies-local-style-rules">8.5 Local style rules</a></dd>
                        <dd><a href="#policies-generated-code-mostly-exempt">8.6 Generated code: mostly exempt</a></dd>
                    </dl>
                    <dl>
                        <dt><a href="#appendices">9 Appendices</a></dt>
                        <dd><a href="#appendices-jsdoc-tag-reference">9.1 JSDoc tag reference</a></dd>
                        <dd><a href="#appendices-commonly-misunderstood-style-rules">9.2 Commonly misunderstood style rules</a></dd>
                        <dd><a href="#appendices-style-related-tools">9.3 Style-related tools</a></dd>
                        <dd><a href="#appendices-legacy-exceptions">9.4 Exceptions for legacy platforms</a></dd>
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

<style lang="scss"></style>