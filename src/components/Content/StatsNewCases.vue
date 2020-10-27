<template>
    <div class="flex items-center justify-center font-condensed font-bold text-center flex-col lg:flex-row text-xs sm:text-sm md:text-base
                lg:text-lg xl:text-xl p-0 py-4 lg:p-14 xl:p-newcases text-strongmessagexs
                sm:text-strongmessagesm md:text-strongmessagemd lg:text-strongmessagelg
                xl:text-strongmessagexl">
        <div class="flex mb-6 lg:mb-0">
            <base-information-box
                class="justify-center text-danger bg-danger shadow-informationdangerbox w-full
                       p-4 mr-0 lg:p-10 lg:mr-4 xl:p-dangerbox xl:mr-12 xl:h-dangerbox xl:w-dangerbox"
                svg-class="w-10 lg:w-12 xl:w-20 mx-auto my-0 mb-1 my-2"
                icon="alert-circle"
                :icon-text="comparisonToAverageDescription"
                icon-text-class="w-24 leading-tight"
                :main-text="newCasesYesterday"
                main-text-class="leading-tight text-highlightxs sm:text-highlightsm
                        md:text-highlightmd lg:text-highlightlg xl:text-highlightxl"
                description="New Cases Yesterday"
                description-class="text-description leading-none"
            ></base-information-box>
        </div>
        <div class="flex flex-col justify-center items-center">
            <base-information-box
                :class="lightBoxClass"
                class="mb-4 xl:mb-12"
                :svg-class="lightBoxSvgClass"
                :icon="casesDiffIcon"
                :main-text="casesDiffAmountPct"
                :main-text-class="lightBoxMainTextClass"
                :description="casesDiffDescription"
                :description-class="lightBoxDescriptionClass"></base-information-box>
            <base-information-box
                :class="lightBoxClass"
                :svg-class="lightBoxSvgClass"
                icon="calendar"
                :main-text="sevenDayAverage"
                :main-text-class="lightBoxMainTextClass"
                description="Average of last 7 days"
                :description-class="lightBoxDescriptionClass"></base-information-box>
        </div>
    </div>
</template>

<script>
    import BaseInformationBox from '@/components/Base/BaseInformationBox';

    export default {
        name: 'StatsNewCases',
        data () {
            return {
                lightBoxClass: 'justify-center shadow-informationlightbox py-2 px-8 lg:py-4 ' +
                    'xl:p-6 xl:h-40 xl:w-lightbox',
                lightBoxSvgClass: 'w-10 lg:w-12 xl:w-20 mx-2',
                lightBoxMainTextClass: 'text-left tracking-tight leading-tight text-secondaryhighlightxs ' +
                    'sm:text-secondaryhighlightsm md:text-secondaryhighlightmd ' +
                    'lg:text-secondaryhighlightlg xl:text-secondaryhighlightxl',
                lightBoxDescriptionClass: 'text-left text-description leading-tight text-xs ' +
                    'sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none tracking-tighter'
            };
        },
        props: {
            newCasesYesterday: {
                type: String,
                default: '0',
            },
            casesDiffText: {
                type: String,
                default: 'No increase',
            },
            casesDiffIcon: {
                type: String,
                default: 'no-diff',
            },
            casesDiffAmountPct: {
                type: String,
                default: '0%',
            },
            comparisonToAverage: {
                type: String,
                default: 'Same',
            },
            averageCasesSevenDays: {
                type: String,
                default: '0',
            },
            sevenDayAverage: {
                type: String,
                default: '0',
            }
        },
        components: { BaseInformationBox },
        computed: {
            casesDiffDescription () {
                return `${this.casesDiffText} from previous day`;
            },
            comparisonToAverageDescription () {
                return `${this.comparisonToAverage} Average`;
            }
        }
    };
</script>
