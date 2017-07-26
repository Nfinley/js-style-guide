<template>
    <div class="home-container content">        
        <app-table-of-contents
            :companyName="companyName">
        </app-table-of-contents>
        <hr>
        <div id="content">
            <app-intro :companyName="companyName"></app-intro>
            <hr>
            <app-source-file></app-source-file>
            <hr>
            <app-formatting></app-formatting>
            <hr>
            <app-language-features></app-language-features>
            <hr>
            <app-naming></app-naming>
            <hr>
            <app-react-jsx-standard></app-react-jsx-standard>
            <hr>
            <app-jest-standard></app-jest-standard>
            <hr>
            <app-policies></app-policies>
            <hr>
            <app-appendices></app-appendices>
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
    import AppReactJsxStandard from '../components/static/sections/ReactJsxStandard.vue'
    import AppJestStandard from '../components/static/sections/JestStandard.vue'

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
            AppReactJsxStandard,
            AppJestStandard
        }
    }

</script>

<style lang="scss"></style>