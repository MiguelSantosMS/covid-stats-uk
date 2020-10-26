<template>
    <div class="bg-chart p-6 sm:p-8 md:p-20 lg:p-32 xl:p-chart">
        <div class="font-condensed font-bold text-strongmessagexs sm:text-strongmessagesm
        md:text-strongmessagemd lg:text-strongmessagelg xl:text-strongmessagexl mb-12">
            Cases per day (last 7 days)
        </div>
        <line-chart v-if="isParentMounted"
                    :options="statsChartOptions"
                    :data-collection="statsChartDataCollection"
        ></line-chart>
        <div class="flex justify-center mt-20">
            <base-button class="p-button border-2 border-button rounded-md text-sm
                                hover:bg-hover hover:text-white"
                         text="VIEW IN DETAIL"
                         url-location="https://www.gov.uk/coronavirus"
            ></base-button>
        </div>
    </div>
</template>

<script>
    import LineChart from '@/util/LineChart';
    import BaseButton from '@/components/Base/BaseButton';

    export default {
        name: 'StatsChart',
        props: {
            isParentMounted: {
                type: Boolean,
                default: false,
            },
            chartLabels: {
                type: Array,
                default () {
                    return [];
                }
            },
            chartData: {
                type: Array,
                default () {
                    return [];
                }
            }
        },
        components: { BaseButton, LineChart },
        computed: {
            statsChartOptions () {
                const backDropColor = '#FAFAFA';
                const gridLinesColor = '#000000';
                const drawTicks = false;
                const drawOnChartArea = false;
                const lineWidth = 5;
                const ticksPadding = 30;
                const ticksColor = '#828282';

                return {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                drawTicks: drawTicks,
                                backdropColor: backDropColor,
                                drawOnChartArea: drawOnChartArea,
                                lineWidth: lineWidth,
                                color: gridLinesColor,
                            },
                            ticks: {
                                fontColor: ticksColor,
                                padding: ticksPadding,
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                drawTicks: drawTicks,
                                backdropColor: backDropColor,
                                drawOnChartArea: drawOnChartArea,
                                lineWidth: lineWidth,
                                color: gridLinesColor,
                            },
                            ticks: {
                                fontColor: ticksColor,
                                padding: ticksPadding,
                                min: 0
                            }
                        }],
                    }
                };
            },
            statsChartDataCollection() {
                const backgroundColor = '#FFEFEF';
                const lineBorderWidth = 2;
                const pointColor = '#EB5757';
                const pointBorderWidth = 5;
                const lineTension = 0;

                return {
                    labels: [
                        ...this.chartLabels, ''
                    ],
                    datasets: [
                        {
                            backgroundColor: backgroundColor,
                            borderColor: pointColor,
                            borderWidth: lineBorderWidth,
                            borderJoinStyle: 'round',
                            pointBackgroundColor: pointColor,
                            pointBorderWidth: pointBorderWidth,
                            pointRadius: [0, 3, 3, 3, 3, 3, 3],
                            data: this.chartData,
                            lineTension: lineTension,
                        },
                    ]
                }
            }
        },
    };
</script>
