import { Line } from 'vue-chartjs';

export default {
    extends: Line,
    props: ['options', 'dataCollection'],
    mounted () {
        this.renderChart(this.dataCollection, this.options);
    }
};
