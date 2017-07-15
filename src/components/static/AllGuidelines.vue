<template>
  <div class="all-guidelines-container">
    <AccessingHtmlElements></AccessingHtmlElements>
    <CodeIndentation></CodeIndentation>
    <FileExtensions></FileExtensions>
    <LineLength></LineLength>
    <LoadingJavascriptInHtml></LoadingJavascriptInHtml>
    <LowerCaseFileNames></LowerCaseFileNames>
    <NamingConvention></NamingConvention>
    <ObjectRules></ObjectRules>
    <Performance></Performance>
    <SpaceAroundOperators></SpaceAroundOperators>
    <StatementRules></StatementRules>
    <VariableNames></VariableNames>
  </div>
</template>

<script>

import AccessingHtmlElements from './AccessingHtmlElements.vue'
import CodeIndentation from './CodeIndentation.vue'
import FileExtensions from './FileExtensions.vue'
import LineLength from './LineLength.vue'
import LoadingJavascriptInHtml from './LoadingJavascriptInHtml.vue'
import LowerCaseFileNames from './LowerCaseFileNames.vue'
import NamingConvention from './NamingConvention.vue'
import ObjectRules from './ObjectRules.vue'
import Performance from './Performance.vue'
import SpaceAroundOperators from './SpaceAroundOperators.vue'
import StatementRules from './StatementRules.vue'
import VariableNames from './VariableNames.vue'

export default {
  components: {
    AccessingHtmlElements,
    CodeIndentation,
    FileExtensions,
    LineLength,
    LoadingJavascriptInHtml,
    LowerCaseFileNames,
    NamingConvention,
    ObjectRules,
    Performance,
    SpaceAroundOperators,
    StatementRules,
    VariableNames
  }
}

</script>