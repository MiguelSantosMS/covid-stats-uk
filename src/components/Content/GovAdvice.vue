<template>
    <div class="flex items-center justify-between text-center text-base lg:text-lg xl:text-xl p-12
                flex-col lg:flex-row lg:p-govadvice">
        <div v-for="(advice, index) in govAdvice" :key="index"
             class="flex flex-col mx-0 my-4 lg:m-6 xl:m-govadvice last:m-0">
            <div
                class="font-condensed font-bold tracking-tight
                       mb-1 lg:mb-2 text-xl lg:text-2xl xl:text-4xl">
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
