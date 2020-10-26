<template>
    <div class="flex flex-col">
        <stats-new-cases
            :new-cases-yesterday="sevenDayComparison.newCasesYesterday"
            :comparison-to-average="sevenDayComparison.comparisonToAverageText"
            :cases-diff-text="sevenDayComparison.comparisonFromPrevDay.comparisonText"
            :cases-diff-amount-pct="sevenDayComparison.comparisonFromPrevDay.newCasesDiffRelativeToPrevDayPct"
            :cases-diff-icon="sevenDayComparison.comparisonFromPrevDay.comparisonIcon"
            :seven-day-average="sevenDayComparison.sevenDayAverage"
        ></stats-new-cases>
        <stats-chart :is-parent-mounted="isMounted"
                     :chart-labels="sevenDayComparison.lastSevenDaysDateAscending"
                     :chart-data="sevenDayComparison.lastSevenDaysNewCasesByDateAscending"
        ></stats-chart>
        <gov-advice></gov-advice>
    </div>
</template>

<script>
    import GovAdvice from '@/components/Content/GovAdvice';
    import StatsNewCases from '@/components/Content/StatsNewCases';
    import StatsChart from '@/components/Content/StatsChart';
    import { getOverviewData, getSevenDayComparison } from '@/api/covid-stats';

    export default {
        name: 'TheContent',
        data () {
            return {
                isMounted: false,
                sevenDayComparison: {
                    newCasesYesterday: '0',
                    comparisonToAverageText: 'Same',
                    sevenDayAverage: '0',
                    comparisonFromPrevDay: {
                        comparisonText: 'No increase',
                        comparisonIcon: 'no-diff',
                        newCasesDiffRelativeToPrevDayPct: '0%'
                    },
                    lastSevenDaysDateAscending: [],
                    lastSevenDaysNewCasesByDateAscending: [],
                }
            };
        },
        async mounted () {
            this.chartData = await getOverviewData().catch(err => {
                console.error(err);
                process.exitCode = 1;
            });

            this.sevenDayComparison = getSevenDayComparison(this.chartData);
            this.isMounted = true;
        },
        components: { StatsChart, StatsNewCases, GovAdvice },
    };
</script>
