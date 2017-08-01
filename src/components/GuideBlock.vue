<template>
    <section class="guide-block-container">
        <h3 :id="id">
            {{ title }}
        </h3>
        <slot></slot>
        <hr>
    </section>
</template>

<script>
    export default {
        props: ['id', 'title']
    }
</script>

<style lang="scss"></style>