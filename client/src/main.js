// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Notifications from 'vue-notification';
import VueTour from 'vue-tour';
import VeeValidate from 'vee-validate';
import VueContentPlaceholders from 'vue-content-placeholders';
import VViewer from 'v-viewer';
import App from './App';
import router from './router';

require('vue-tour/dist/vue-tour.css');

Vue.config.productionTip = false;

Vue.use(Notifications);
Vue.use(VueTour);
Vue.use(VeeValidate);
Vue.use(VueContentPlaceholders);
Vue.use(VViewer);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
