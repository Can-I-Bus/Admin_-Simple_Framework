import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import router from '../router';

export const useUserStore = defineStore('user', () => {
    const userInfo = ref({});
    const token = ref('');
    const api = ref(null);

    const setApi = (api) => {
        console.log(api);
        api.value = api;
    };

    const setUserInfo = (item) => {
        userInfo.value = item;
        localStorage.setItem('user_info', JSON.stringify(item));
    };

    const setToken = (tk) => {
        token.value = tk;
        localStorage.setItem('token', tk);
    };

    const logout = () => {
        userInfo.value = {};
        token.value = '';
        localStorage.removeItem('user_info');
        localStorage.removeItem('token');
        router.push('/login');
    };

    const handleLogin = async (type = 'login', data) => {
        console.log(api.value, '====');

        const res = await api({ type, data });
        if (res.code === 0) {
            setToken(res?.data?.jwt_token);
            await getUserInfo();
            localStorage.setItem('user_info', JSON.stringify(userInfo.value));
            router.push('/home');
            ElMessage.success({ message: '登录成功' });
        } else {
            toast.error(res.message);
        }
    };

    const editUserInfo = ({ key, value }) => {
        userInfo.value[key] = value;
        localStorage.setItem('user_info', JSON.stringify(userInfo.value));
    };

    const getUserInfo = async () => {
        try {
            const api = useGetApiPrototypeStore().api;
            let userInfo = {};
            const result = await api({ type: 'getUserInfo' });
            if (result.code === 0) {
                userInfo.age = result?.data?.age ?? '';
                userInfo.gender = result?.data?.gender ?? '';
            }
            setUserInfo(userInfo);
        } catch (error) {
            console.error(error);
        }
    };

    const initStore = () => {
        let user_info = localStorage.getItem('user_info');
        let token = localStorage.getItem('token');
        if (user_info) {
            setUserInfo(JSON.parse(user_info));
        }
        if (token) {
            setToken(token);
        }
    };

    return {
        userInfo,
        token,
        setApi,
        setUserInfo,
        setToken,
        logout,
        initStore,
        getUserInfo,
        handleLogin,
        editUserInfo,
    };
});
