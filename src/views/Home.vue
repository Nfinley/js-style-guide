<template>
    <div class="home-container content">
        <section>
            <table class="table">
                <tbody>
                    <tr v-for="headingGroup in dividedHeadings">
                        <td v-for="(heading, idx) in headingGroup">
                            <a :href="'#' + heading.id" v-html="heading.content"></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section>
            <h3 id="types">
                Types
            </h3>
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
        </section>
        <section>
            <h3 id="references">
                References
            </h3>
        </section>
        <section>
            <h3 id="objects">
                Objects
            </h3>
        </section>
        <section>
            <h3 id="arrays">
                Arrays
            </h3>
        </section>
        <section>
            <h3 id="destructuring">
                Destructuring
            </h3>
        </section>
        <section>
            <h3 id="strings">
                Strings
            </h3>
        </section>
        <section>
            <h3 id="functions">
                Functions
            </h3>
        </section>
        <section>
            <h3 id="arrow-functions">
                Arrow Functions
            </h3>
        </section>
        <section>
            <h3 id="classes-and-constructors">
                Classes & Constructors
            </h3>
        </section>
        <section>
            <h3 id="modules">
                Modules
            </h3>
        </section>
        <section>
            <h3 id="iterators-and-generators">
                Iterators and Generators
            </h3>
        </section>
        <section>
            <h3 id="properties">
                Properties
            </h3>
        </section>
        <section>
            <h3 id="variables">
                Variables
            </h3>
        </section>
        <section>
            <h3 id="hoisting">
                Hoisting
            </h3>
        </section>
        <section>
            <h3 id="comparison-operators-and-equality">
                Comparison Operators & Equality
            </h3>
        </section>
        <section>
            <h3 id="blocks">
                Blocks
            </h3>
        </section>
        <section>
            <h3 id="control-statements">
                Control Statements
            </h3>
        </section>
        <section>
            <h3 id="comments">
                Comments
            </h3>
        </section>
        <section>
            <h3 id="whitespace">
                Whitespace
            </h3>
        </section>
        <section>
            <h3 id="commas">
                Commas
            </h3>
        </section>
        <section>
            <h3 id="semicolons">
                Semicolons
            </h3>
        </section>
        <section>
            <h3 id="type-casting-and-coercion">
                Type Casting & Coercion
            </h3>
        </section>
        <section>
            <h3 id="naming-conventions">
                Naming Conventions
            </h3>
        </section>
        <section>
            <h3 id="accessors">
                Accessors
            </h3>
        </section>
        <section>
            <h3 id="events">
                Events
            </h3>
        </section>
        <section>
            <h3 id="es5-compatibility">
                ECMAScript 5 Compatibility
            </h3>
        </section>
        <section>
            <h3 id="es6-styles">
                ECMAScript 6+ (ES 2015+) Styles
            </h3>
        </section>
        <section>
            <h3 id="testing">
                Testing
            </h3>
        </section>
        <section>
            <h3 id="performance">
                Performance
            </h3>
        </section>
    </div>
</template>

<script>

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

        }
    }

</script>

<style lang="scss"></style>