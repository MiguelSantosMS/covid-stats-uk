<template>
    <div id="app" class="font-sans">
        <the-hero :title="title"></the-hero>
        <the-content></the-content>
        <the-footer :title="title"></the-footer>
    </div>
</template>

<script>
    import TheFooter from '@/components/TheFooter';
    import TheHero from '@/components/TheHero';
    import TheContent from '@/components/TheContent';

    export default {
        name: 'App',
        data () {
            return {
                title: 'COVID UK',
            }
        },
        components: {
            TheContent,
            TheHero,
            TheFooter,
        }
    };
</script>
