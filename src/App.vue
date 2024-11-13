<template>
    <div>
        <router-view />
    </div>
</template>

<script setup>
import { useTabStore } from '@/store/nav'
import { ref, onMounted, getCurrentInstance } from 'vue'
import { useUserStore } from '@/store/index'
const tabStore = useTabStore()
const userStore = useUserStore()
const { initTab } = tabStore
const { setApi } = userStore

onMounted(() => {
    initTab()
    setApi(getCurrentInstance().proxy.$api)
})
</script>
<style scoped lang='scss'>
</style>