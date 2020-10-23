<template>
    <div class="flex" :class="svgClass" v-html="require(`!html-loader!../../assets/svg/${source}.svg`)">
    </div>
</template>

<script>
    export default {
        name: 'BaseSvg',
        props: {
            svgClass: {
                type: String,
                default: 'w-full',
            },
            source: {
                type: String,
                default: '',
            },
        },
    };
</script>

<style>
    /* Make SVG Responsive */
    svg {
        width: 100%;
        height: auto;
    }
</style>
