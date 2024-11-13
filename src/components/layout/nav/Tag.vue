<template>
    <div
        @mouseenter="handleEnter($event)"
        @click="handleClick"
        :class="['tab_item', { is_active: route.path === props.tabItem.route }]"
        @mouseleave="handleLeave($event)"
    >
        <!-- <img :src="icon" alt="icon" srcset="" /> -->
        <span>{{ title }}</span>
        <div>
            <el-icon style="font-size: 12px" @click="handleRemove"
                ><Close
            /></el-icon>
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed, defineEmits } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useTabStore } from '@/store/nav'
const tabStore = useTabStore()
const { removeTab } = tabStore
const router = useRouter()
const route = useRoute()
const props = defineProps({
    tabItem: Object,
    idx: Number,
})

const emits = defineEmits(['clickTab'])

// const icon = computed(() => {
//     return (
//         (route.path === props.tabItem.to && props.tabItem.activeIcon) ||
//         props.tabItem.icon
//     )
// })

const title = computed(() => {
    return props.tabItem.label
})

const handleClick = () => {
    router.push(props.tabItem.route)
}

const handleRemove = () => {
    removeTab(props.tabItem)
}

const handleEnter = (e) => {
    const dom = e.target
    if (!dom.nodeName === 'DIV') {
        return false
    }
    dom.children[0].src = props.tabItem.activeIcon
}

const handleLeave = (e) => {
    const dom = e.target
    if (!dom.nodeName === 'DIV' || route.path === props.tabItem.to) {
        return false
    }
    dom.children[0].src = props.tabItem.icon
}
</script>

<style lang="scss" scoped>
.is_active {
    background-color: #f5f5f5;
    color: #333;
}
.tab_item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 20px;
    transition: 0.2s;
    cursor: pointer;
    & > img {
        margin-right: 4px;
        width: 16px;
        height: 16px;
    }
    & > span {
        margin-right: 4px;
        font-size: 14px;
        white-space: nowrap;
    }
    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 14px;
        width: 14px;
        border-radius: 50%;
        transition: 0.2s;
        &:hover {
            background-color: #ccc;
            transition: 0.2s;
        }
    }
    &:hover {
        background-color: #f5f5f5;
        color: #333;
        transition: 0.2s;
    }
}
</style>