import JavaScriptGuide from './views/JavaScriptGuide.vue'
import ReactGuide from './views/ReactGuide.vue'
import ProcedureGuide from './views/ProcedureGuide.vue'
import UnitTestingGuide from './views/UnitTestingGuide.vue'
import CodeReviewGuide from './views/CodeReviewGuide.vue'

export const routes = [
    { 
        path: '/',
        component: ReactGuide
    },
    { 
        path: '/react-guide',
        component: ReactGuide
    },
    { 
        path: '/procedure-guide',
        component: ProcedureGuide
    },
    { 
        path: '/unit-testing-guide',
        component: UnitTestingGuide
    },
    { 
        path: '/code-review-guide',
        component: CodeReviewGuide
    }
]