import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import ElementPlus from 'element-plus';
import Http from './api/http';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';
import '@/assets/css/index.scss';

const app = createApp(App);
app.config.globalProperties.$api = Http;

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(router);
app.use(createPinia());
app.use(ElementPlus);

app.mount('#app');
