<template>
    <div class="cursor-pointer">
        <a :href="urlLocation">{{ text }}</a>
    </div>
</template>

<script>
    export default {
        name: 'BaseButton',
        props: {
            urlLocation: {
                type: String,
                default: 'javascript:void(0);',
            },
            text: {
                type: String,
                default: ''
            }
        },
    };
</script>
