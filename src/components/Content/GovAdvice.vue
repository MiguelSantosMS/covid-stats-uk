<template>
    <div class="flex items-center justify-between text-center text-xs sm:text-sm
                md:text-base lg:text-lg xl:text-xl p-12 sm:p-16 md:p-20 lg:p-32 xl:p-40">
        <div v-for="(advice, index) in govAdvice" :key="index"
             class="flex flex-col px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16">
            <div
                class="font-condensed font-bold
                       text-xs mb-1 lg:mb-2 xl:mb-2 sm:text-xl md:text-2xl lg:text-3xl  xl:text-4xl">
                {{ advice.title }}
            </div>
            <div class="text-secondary">{{ advice.description }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GovAdvice',
        data () {
            return {
                govAdvice: [
                    {
                        title: 'WASH HANDS',
                        description: 'Keep washing your hands regularly'
                    },
                    {
                        title: 'COVER FACE',
                        description: 'Wear a face covering in enclosed spaces',
                    },
                    {
                        title: 'MAKE SPACE',
                        description: 'Stay at least 2 metres apart, wear face covering',
                    },
                ],
            };
        },
    };
</script>
