import JavaScriptGuide from './views/JavaScriptGuide.vue'
import ReactGuide from './views/ReactGuide.vue'
import ProcedureGuide from './views/ProcedureGuide.vue'

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
    }
]