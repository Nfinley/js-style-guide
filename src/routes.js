import JavaScriptGuide from './views/JavaScriptGuide.vue'
import ReactGuide from './views/ReactGuide.vue'
import ProcedureGuide from './views/ProcedureGuide.vue'
import UnitTestingGuide from './views/UnitTestingGuide.vue'

export const routes = [
    { 
        path: '/',
        component: JavaScriptGuide
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
    }
]