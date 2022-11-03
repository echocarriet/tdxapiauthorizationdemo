import { createApp } from 'vue';
// 匯入Axios
import axios from 'axios';
import VueAxios from 'vue-axios';
// 匯入qs
import qs from 'qs';
import App from './App.vue';
import router from './router';

const app = createApp(App);
// 註冊Axios
app.use(VueAxios, axios);
// 全域註冊 qs
app.config.globalProperties.$qs = qs;
app.use(router);
app.mount('#app');
