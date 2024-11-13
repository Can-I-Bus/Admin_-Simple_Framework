import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTabStore = defineStore('tab', () => {
    const tabList = ref([]);

    function setLocalTabList() {
        localStorage.setItem('tab_list', JSON.stringify(tabList.value));
    }

    function addTab(val) {
        const idx = tabList.value.findIndex((item) => {
            return item.label === val.label;
        });

        if (idx === -1) {
            tabList.value.push(val);
        }
        setLocalTabList();
    }

    function initTab() {
        const cacheTabList = JSON.parse(localStorage.getItem('tab_list'));
        if (cacheTabList) {
            tabList.value = cacheTabList;
        }
    }

    function clearTab() {
        tabList.value = [];
        localStorage.removeItem('tab_list');
    }

    function removeTab(val) {
        const idx = tabList.value.findIndex((item) => {
            return item.title === val.title;
        });
        if (idx !== -1) {
            tabList.value.splice(idx, 1);
            localStorage.setItem('tab_list', JSON.stringify(tabList.value));
            const nextTab = tabList.value[idx + 1] || tabList.value[idx - 1];
            if (nextTab) {
                router.push(nextTab.to);
            }
        }
        setLocalTabList();
    }
    return {
        tabList,
        clearTab,
        addTab,
        removeTab,
        initTab,
    };
});
