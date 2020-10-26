<template>
    <div class="flex items-center justify-center font-bold text-center flex-col lg:flex-row text-xs sm:text-sm md:text-base
                lg:text-lg xl:text-xl p-6 sm:p-8 md:p-10 lg:p-14 xl:p-newcases text-strongmessagexs
                sm:text-strongmessagesm md:text-strongmessagemd lg:text-strongmessagelg
                xl:text-strongmessagexl">
        <div class="flex flex-1 mb-6 lg:mb-0">
            <base-information-box
                class="text-danger bg-danger shadow-informationdangerbox
                       p-8 mr-0 lg:mr-4 xl:p-dangerbox xl:mr-12"
                svg-class="w-16 mx-auto my-0 mb-1 my-2"
                icon="alert-circle"
                :icon-text="comparisonToAverageDescription"
                icon-text-class="font-condensed w-24 leading-tight"
                :main-text="newCasesYesterday"
                main-text-class="font-condensed leading-tight text-highlightxs sm:text-highlightsm
                        md:text-highlightmd lg:text-highlightlg xl:text-highlightxl"
                description="New Cases Yesterday"
                description-class="text-description leading-none tracking-tighter"
            ></base-information-box>
        </div>
        <div class="flex flex-1 flex-col justify-center items-center">
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
                lightBoxClass: 'shadow-informationlightbox px-16 py-4 xl:p-lightbox',
                lightBoxSvgClass: 'w-16 mx-2',
                lightBoxMainTextClass: 'tracking-tight leading-tight text-secondaryhighlightxs ' +
                    'sm:text-secondaryhighlightsm md:text-secondaryhighlightmd ' +
                    'lg:text-secondaryhighlightlg xl:text-secondaryhighlightxl',
                lightBoxDescriptionClass: 'text-left text-description leading-tight font-condensed text-xs ' +
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
