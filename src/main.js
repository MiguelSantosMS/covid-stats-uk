import Vue from 'vue';
import App from './App.vue';
import './styles/index.css';

Vue.config.productionTip = false;

document.title = 'COVID UK';

new Vue({
    render: h => h(App),
}).$mount('#app');
