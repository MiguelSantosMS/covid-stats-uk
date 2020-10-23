<template>
    <div class="flex" :class="informationBoxClass">
        <div class="flex flex-col items-center justify-center mr-1 lg:mr-8 xl:mr-10">
            <base-svg :source="icon" :class="iconClass" :svg-class="svgClass"></base-svg>
            <div v-if="hasIconText" :class="iconTextClass">
                {{ iconText }}
            </div>
        </div>
        <div class="flex flex-col">
            <div :class="mainTextClass">
                {{ mainText }}
            </div>
            <div :class="descriptionClass">
                {{ description }}
            </div>
        </div>
    </div>
</template>

<script>
    import BaseSvg from '@/components/Base/BaseSvg';

    export default {
        name: 'BaseInformationBox',
        components: { BaseSvg },
        props: {
            informationBoxClass: {
                type: String,
                default: '',
            },
            icon: {
                type: String,
                default: '',
            },
            iconClass: {
                type: String,
                default: '',
            },
            iconTextClass: {
                type: String,
                default: '',
            },
            iconText: {
                type: String,
                default: '',
            },
            svgClass: {
                type: String,
                default: '',
            },
            mainText: {
                type: String,
                default: '',
            },
            mainTextClass: {
                type: String,
                default: '',
            },
            description: {
                type: String,
                default: '',
            },
            descriptionClass: {
                type: String,
                default: '',
            },
        },
        computed: {
            hasIconText() {
                return this.iconText !== '';
            }
        }
    };
</script>
