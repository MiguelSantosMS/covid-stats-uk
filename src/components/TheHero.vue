<template>
    <div class="flex relative" ref="hero">
        <div class="flex items-center text-white relative">
            <base-svg class="flex" source="hero"></base-svg>
            <div class="flex flex-col items-start absolute w-full
                    px-10 sm:px-12 md:px-20 lg:px-32 xl:p-hero">
                <div class="flex font-condensed font-bold leading-tight text-highlightxs sm:text-highlightsm
                        md:text-highlightmd lg:text-highlightlg xl:text-highlightxl">
                    {{ title }}
                </div>
                <div class="leading-tight text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    {{ description }}
                </div>
            </div>
        </div>
        <div class="absolute w-full flex-1 bottom-0 self-end m-auto mb-0 md:mb-1 lg:mb-2 xl:mb-4 cursor-pointer"
             @click="() => scrollToStats()"
        >
            <base-svg class="text-customgray b-1 self-center m-auto hover:text-white"
                      svg-class="w-4 sm:w-6 lg:w-8 xl:w-10"
                      source="arrow-down">
            </base-svg>
        </div>
    </div>
</template>

<script>
    import BaseSvg from '@/components/Base/BaseSvg';

    export default {
        name: 'TheHero',
        data () {
            return {
                description: 'Use this tool to find out the latest stats for Coronavirus in the UK'
            };
        },
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        components: { BaseSvg },
        methods: {
            scrollToStats() {
                const heroBoundingRect = this.$refs.hero.getBoundingClientRect();
                scrollTo({
                    top: heroBoundingRect.height,
                });
            }
        }
    };
</script>
