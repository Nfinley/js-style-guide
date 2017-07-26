<template>
    <div class="home-container content">        
        <app-table-of-contents
            :companyName="companyName">
        </app-table-of-contents>
        <hr>
        <div id="content">
            <app-intro
                :companyName="companyName">
            </app-intro>
            <hr>
            <app-source-file
                :companyName="companyName">
            </app-source-file>
            <hr>
            <app-formatting
                :companyName="companyName">
            </app-formatting>
            <hr>
            <app-language-features
                :companyName="companyName">
            </app-language-features>
            <hr>
            <app-naming
                :companyName="companyName">
            </app-naming>
            <hr>
            <app-react-jsx-guide
                :companyName="companyName">
            </app-react-jsx-guide>
            <app-policies
                :companyName="companyName">
            </app-policies>
            <hr>
            <app-appendices
                :companyName="companyName">
            </app-appendices>
        </div>
    </div>
</template>

<script>

    import AppTableOfContents from '../components/static/sections/TableOfContents.vue'
    import AppIntro from '../components/static/sections/Intro.vue'
    import AppSourceFile from '../components/static/sections/SourceFile.vue'
    import AppFormatting from '../components/static/sections/Formatting.vue'
    import AppLanguageFeatures from '../components/static/sections/LanguageFeatures.vue'
    import AppNaming from '../components/static/sections/Naming.vue'
    import AppPolicies from '../components/static/sections/Policies.vue'
    import AppAppendices from '../components/static/sections/Appendices.vue'
    import AppReactJsxGuide from '../components/static/sections/ReactJsxGuide.vue'

    export default {
        props: ['companyName'],
        components: {
            AppTableOfContents,
            AppIntro,
            AppSourceFile,
            AppFormatting,
            AppLanguageFeatures,
            AppNaming,
            AppPolicies,
            AppAppendices,
            AppReactJsxGuide
        }
    }

</script>

<style lang="scss"></style>