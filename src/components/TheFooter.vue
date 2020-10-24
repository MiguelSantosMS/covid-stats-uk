<template>
    <div class="flex items-center justify-between bg-footer rounded-t-md text-white px-10
                h-footerxs sm:px-12 sm:h-footersm md:px-20 md:h-footermd lg:px-24
                lg:h-footerlg xl:p-footer xl:h-footerxl">
        <div class="flex flex-col text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            <div>An RCCO development challenge by {{ challengeDeveloper }}</div>
            <div>Data source: {{ dataSource }}</div>
        </div>
        <div
            class="font-condensed font-bold tracking-wide text-strongmessagexs sm:text-strongmessagesm
                   md:text-strongmessagemd lg:text-strongmessagelg xl:text-strongmessagexl">
            {{ title }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheFooter',
        data () {
            return {
                challengeDeveloper: 'Miguel Santos',
                dataSource: 'Gov.uk'
            };
        },
        props: {
            title: {
                type: String,
                default: ''
            }
        },
    };
</script>
