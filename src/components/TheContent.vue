<template>
    <div class="flex flex-col">
        <stats-new-cases></stats-new-cases>
        <stats-chart></stats-chart>
        <gov-advice></gov-advice>
    </div>
</template>

<script>
    import GovAdvice from '@/components/Content/GovAdvice';
    import StatsNewCases from '@/components/Content/StatsNewCases';
    import StatsChart from '@/components/Content/StatsChart';
    export default {
        name: 'TheContent',
        components: { StatsChart, StatsNewCases, GovAdvice }
    };
</script>
