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
        props: {
            id: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss"></style>