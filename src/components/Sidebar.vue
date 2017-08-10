<template>
    <aside class="sidebar-container menu">
        <p class="menu-label">
            Standards
        </p>
        <ul class="menu-list">
            <li>
                <router-link to="/">Javascript</router-link>
            </li>
            <li>
                <router-link to="/react-guide">React</router-link>
            </li>
            <li>
                <router-link to="/procedure-guide">Procedures</router-link>
            </li>
            <li>
                <router-link to="/unit-testing-guide">Unit Testing</router-link>
            </li>
        </ul>
    </aside>
</template>

<script>

    import { routes } from '../routes'

    export default {
        data() {
            return {}
        }
    }

</script>