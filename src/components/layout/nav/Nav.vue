<template>
    <div class="tab_wrap">
        <Tag
            @click="handleClick(item)"
            v-for="(item, idx) in tabList"
            :tabItem="item"
            :idx="Number(idx)"
            :key="idx"
        />
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useTabStore } from '@/store/nav'
import Tag from './Tag.vue'
const tabStore = useTabStore()
const { tabList, activeIdx } = storeToRefs(tabStore)
const { removeTab, setActiveIdx } = tabStore

const handleClick = (tab) => {}
</script>

<style lang="scss" scoped>
.tab_wrap {
    display: flex;
    height: 50px;
    overflow-x: auto;
    &::-webkit-scrollbar {
        height: 5px;
    }
}
</style>