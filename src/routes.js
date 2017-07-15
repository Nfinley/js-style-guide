import Home from './views/Home.vue'
import Bullets from './views/Bullets.vue'
import Standards from './views/Standards.vue'
import Oath from './views/Oath.vue'
import AllGuidelines from './components/static/AllGuidelines.vue'
import VariableNames from './components/static/VariableNames.vue'
import SpaceAroundOperators from './components/static/SpaceAroundOperators.vue'
import CodeIndentation from './components/static/CodeIndentation.vue'
import StatementRules from './components/static/StatementRules.vue'
import ObjectRules from './components/static/ObjectRules.vue'
import LineLength from './components/static/LineLength.vue'
import NamingConvention from './components/static/NamingConvention.vue'
import LoadingJavascriptInHtml from './components/static/LoadingJavascriptInHtml.vue'
import AccessingHtmlElements from './components/static/AccessingHtmlElements.vue'
import FileExtensions from './components/static/FileExtensions.vue'
import LowerCaseFileNames from './components/static/LowerCaseFileNames.vue'
import Performance from './components/static/Performance.vue'

export const routes = [
  { 
    path: '/',
    component: Home
  },
  { 
    path: '/bullets',
    component: Bullets
  },
  { 
    path: '/oath',
    component: Oath
  },
  {
    path: '/standards',
    component: Standards,
    children: [
      {
        path: 'all',
        component: AllGuidelines,
        display: 'All'
      },
      {
        path: 'variable-names',
        component: VariableNames,
        display: 'Variable Names'
      },
      {
        path: 'space-around-operators',
        component: SpaceAroundOperators,
        display: 'Space Around Operators'
      },
      {
        path: 'code-indentation',
        component: CodeIndentation,
        display: 'Code Indentation'
      },
      {
        path: 'statement-rules',
        component: StatementRules,
        display: 'Statement Rules'
      },
      {
        path: 'object-rules',
        component: ObjectRules,
        display: 'Object Rules'
      },
      {
        path: 'line-length',
        component: LineLength,
        display: 'Line Length'
      },
      {
        path: 'naming-convention',
        component: NamingConvention,
        display: 'Naming Convention'
      },
      {
        path: 'loading-javascript-in-html',
        component: LoadingJavascriptInHtml,
        display: 'Loading Javascript In HTML'
      },
      {
        path: 'accessing-html-elements',
        component: AccessingHtmlElements,
        display: 'Accessing HTML Elements'
      },
      {
        path: 'file-extensions',
        component: FileExtensions,
        display: 'File Extensions'
      },
      {
        path: 'lower-case-fileNames',
        component: LowerCaseFileNames,
        display: 'Lower Case File Names'
      },
      {
        path: 'performance',
        component: Performance,
        display: 'Performance'
      }
    ]
  }
];