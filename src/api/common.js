import axios from 'axios';
import base from '@/config/base.config';
import router from '../router';

// import { useUserStore } from '@/store';
import { createPinia, setActivePinia } from 'pinia';
// const toast = useToast();
const { BASE_URL, TIMEOUT } = base;
const LangCodeMap = {
    en: 'en_US', //英语
    zh: 'zh_TW', //中文
    jp: 'ja_JP', //日语
    kr: 'ko_KR', //韩语
    br: 'pt_BR', //葡萄牙
    id: 'id_ID', //印尼语
    tr: 'tr_TR', //土耳其语
    vn: 'vi_VN', //越南
    th: 'th_TH', //泰语
    hi: 'hi_IN', //印地语
    it: 'it_IT', //意大利语
    es: 'es_ES', //西班牙语
    nl: 'nl_NL', //荷兰语
    fr: 'fr_FR', //法语
    de: 'de_DE', //德语
    ar: 'ar_SA', //阿拉伯语
    he: 'he_IL', //希伯来语
};

const service = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
});

let hasShown403Error = false;
const pinia = createPinia();
setActivePinia(pinia);

service.interceptors.request.use(
    async (config) => {
        let token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorized-Key'] = `${token}`;
        }
        config.headers['lang'] = LangCodeMap[localStorage.getItem('lang')] || 'en_US';
        config.headers['local-time-zone'] = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    (response) => {
        //剥离最外层
        if (response.data.code === 403) {
            // if (!hasShown403Error) {
            //     hasShown403Error = true;
            //     toast.warning(response.data.message);
            //     const userStore = useUserStore();
            //     userStore.logout();
            //     // Reset the error flag after a delay (e.g., 5 seconds)
            //     setTimeout(() => {
            //         hasShown403Error = false;
            //     }, 5000);
            // }
        }
        return response?.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default service;
