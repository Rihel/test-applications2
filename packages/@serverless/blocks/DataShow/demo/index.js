import Vue from 'vue';
import Element from 'element-ui';
import './global.less';
import '@femessage/theme-deepexi/lib/index.css';
import Block from '../src/index';

Vue.use(Element);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Block),
}).$mount('#vue-demo-layout')