<template>
    <div class="policies-container">
        <h2 id="policies">6 Policies</h2>
        <h3 id="policies-be-consistent">6.1 Issues unspecified by {{ companyName }} Style: Be Consistent!</h3>
        <p>For any style question that isn't settled definitively by this specification,
            prefer to do what the other code in the same file is already doing. If that
            doesn't resolve the question, consider emulating the other files in the same
            package.
        </p>
        <h3 id="policies-compiler-warnings">6.2 Compiler warnings</h3>
        <h4 id="policies-use-a-standard-warning-set">6.2.1 Use a standard warning set</h4>
        <p>
            As far as possible projects should use <code>--warning_level=VERBOSE</code>.
        </p>
        <h4 id="policies-how-to-handle-a-warning">6.2.2 How to handle a warning</h4>
        <p>Before doing anything, make sure you understand exactly what the warning is
            telling you. If you're not positive why a warning is appearing, ask for help
            .
        </p>
        <p>Once you understand the warning, attempt the following solutions in order:</p>
        <ol>
            <li><strong>First, fix it or work around it.</strong> Make a strong attempt to actually
                address the warning, or find another way to accomplish the task that avoids
                the situation entirely.
            </li>
            <li><strong>Otherwise, determine if it's a false alarm.</strong> If you are convinced that
                the warning is invalid and that the code is actually safe and correct, add a
                comment to convince the reader of this fact and apply the <code>@suppress</code>
                annotation.
            </li>
            <li><strong>Otherwise, leave a TODO comment.</strong> This is a <strong>last resort</strong>.  If you do
                this, <strong>do not suppress the warning.</strong> The warning should be visible until
                it can be taken care of properly.
            </li>
        </ol>
        <h4 id="policies-suppress-a-warning-at-the-narrowest-reasonable-scope">6.2.3 Suppress a warning at the narrowest reasonable scope</h4>
        <p>Warnings are suppressed at the narrowest reasonable scope, usually that of a single local variable or very small method. Often a variable or method is extracted for that reason alone.</p>
        <p>Example</p>
        <pre><code class="language-js prettyprint">/** @suppress {uselessCode} Unrecognized 'use asm' declaration */
function fn() {
'use asm';
return 0;
}
</code></pre>
        <p>Even a large number of suppressions in a class is still better than blinding the
            entire class to this type of warning.
        </p>
        <h3 id="policies-deprecation">6.3 Deprecation</h3>
        <p>Mark deprecated methods, classes or interfaces with <code>@deprecated</code> annotations. A
            deprecation comment must include simple, clear directions for people to fix
            their call sites.
        </p>
        <h3 id="policies-code-not-in-google-style">6.4 Code not in {{ companyName }} Style</h3>
        <p>You will occasionally encounter files in your codebase that are not in proper
            {{ companyName }} Style. These may have come from an acquisition, or may have been written
            before {{ companyName }} Style took a position on some issue, or may be in non-{{ companyName }} Style
            for any other reason.
        </p>
        <h4 id="policies-reformatting-existing-code">6.4.1 Reformatting existing code</h4>
        <p>When updating the style of existing code, follow these guidelines.</p>
        <ol>
            <li>It is not required to change all existing code to meet current style
                guidelines.  Reformatting existing code is a trade-off between code churn
                and consistency. Style rules evolve over time and these kinds of tweaks to
                maintain compliance would create unnecessary churn.  However, if significant
                changes are being made to a file it is expected that the file will be in
                {{ companyName }} Style.
            </li>
            <li>Be careful not to allow opportunistic style fixes to muddle the focus of a
                CL. If you find yourself making a lot of style changes that aren&#8217;t critical
                to the central focus of a CL, promote those changes to a separate CL.
            </li>
        </ol>
        <h4 id="policies-newly-added-code-use-google-style">6.4.2 Newly added code: use {{ companyName }} Style</h4>
        <p>Brand new files use {{ companyName }} Style, regardless of the style choices of other files
            in the same package.
        </p>
        <p>When adding new code to a file that is not in {{ companyName }} Style, reformatting the
            existing code first is recommended, subject to the advice in
            <a href="#policies-reformatting-existing-code">??</a>.
        </p>
        <p>If this reformatting is not done, then new code should be as consistent as
            possible with existing code in the same file, but must not violate the style
            guide.
        </p>
        <h3 id="policies-local-style-rules">6.5 Local style rules</h3>
        <p>Teams and projects may adopt additional style rules beyond those in this
            document, but must accept that cleanup changes may not abide by these additional
            rules, and must not block such cleanup changes due to violating any additional
            rules. Beware of excessive rules which serve no purpose. The style guide does
            not seek to define style in every possible scenario and neither should you.
        </p>
        <h3 id="policies-generated-code-mostly-exempt">6.6 Generated code: mostly exempt</h3>
        <p>Source code generated by the build process is not required to be in {{ companyName }}
            Style. However, any generated identifiers that will be referenced from
            hand-written source code must follow the naming requirements. As a special
            exception, such identifiers are allowed to contain underscores, which may help
            to avoid conflicts with hand-written identifiers.
        </p>
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