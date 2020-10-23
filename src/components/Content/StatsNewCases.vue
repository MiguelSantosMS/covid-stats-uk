<template>
    <div class="flex items-center justify-center font-bold text-center flex-col lg:flex-row text-xs sm:text-sm md:text-base
                lg:text-lg xl:text-xl p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16 text-strongmessagexs
                sm:text-strongmessagesm md:text-strongmessagemd lg:text-strongmessagelg
                xl:text-strongmessagexl">
        <div class="flex flex-1 mb-6 lg:mb-0">
            <base-information-box
                class="text-danger bg-danger shadow-md
                       p-16 mx-0 lg:p-20 lg:mx-8 xl:p-24 xl:mx-10"
                svg-class="w-16 mx-auto my-0 mb-1 my-2"
                icon="alert-circle"
                icon-text="Above Average"
                icon-text-class="font-condensed w-24 leading-tight"
                main-text="26,688"
                main-text-class="font-condensed leading-tight text-highlightxs sm:text-highlightsm
                        md:text-highlightmd lg:text-highlightlg xl:text-highlightxl"
                description="New Cases Yesterday"
                description-class="text-description leading-none tracking-tighter"
            ></base-information-box>
        </div>
        <div class="flex flex-1 flex-col justify-center items-center">
            <base-information-box
                :class="lightBoxClass"
                class="mb-10"
                :svg-class="lightBoxSvgClass"
                icon="trending-up"
                main-text="+300%"
                :main-text-class="lightBoxMainTextClass"
                description="Increases from previous day"
                :description-class="lightBoxDescriptionClass"></base-information-box>
            <base-information-box
                :class="lightBoxClass"
                :svg-class="lightBoxSvgClass"
                icon="calendar"
                main-text="17,276"
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
                lightBoxClass: 'shadow-informationlightbox px-24 py-6 xl:px-32',
                lightBoxSvgClass: 'w-16 mx-auto my-0',
                lightBoxMainTextClass: 'tracking-tight leading-tight text-secondaryhighlightxs ' +
                    'sm:text-secondaryhighlightsm md:text-secondaryhighlightmd ' +
                    'lg:text-secondaryhighlightlg xl:text-secondaryhighlightxl',
                lightBoxDescriptionClass: 'text-left text-description leading-tight font-condensed text-xs ' +
                    'sm:text-sm md:text-base lg:text-lg xl:text-xl leading-none tracking-tighter'
            };
        },
        components: { BaseInformationBox }
    };
</script>
