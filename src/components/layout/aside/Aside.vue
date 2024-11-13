<template>
    <div>
        <div class="menu_header">
            <img
                :style="{
                    width: isCollapse ? '38px' : '130px',
                    height: 'auto',
                    transition: '.3s',
                }"
                src="@/assets/img/logo1.png"
                alt="!"
            />
        </div>
        <el-menu
            class="menu_wrap"
            :collapse="isCollapse"
            :router="true"
            :unique-opened="true"
            :default-active="route.path"
            @select="handleSelect"
        >
            <div class="collapse_btn" @click="isCollapse = !isCollapse">
                <el-icon v-if="!isCollapse"><ArrowLeft /></el-icon>
                <el-icon v-else><ArrowRight /></el-icon>
            </div>
            <el-tooltip :content="'退出登陆'" placement="top">
                <div class="logout" @click="handleLogout">
                    <el-icon size="26"><SwitchButton /></el-icon>
                </div>
            </el-tooltip>
            <MenuItem :isCollapse="isCollapse" :menuList="ASIDE_CONFIG" />
        </el-menu>
    </div>
</template>

<script setup>
import ASIDE_CONFIG from '@/config/aside.config.js'
import MenuItem from './MenuItem.vue'
import { useTabStore } from '@/store/nav'
import { useUserStore } from '@/store/index.js'
import { searchTree } from '@/utils/index.js'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const tabStore = useTabStore()
const userStore = useUserStore()
const { addTab, clearTab } = tabStore
const { logout } = userStore

const isCollapse = ref(false)

const handleSelect = (index, indexPath, item) => {
    const selectMenuItem = searchTree(ASIDE_CONFIG, index, 'route')
    addTab(selectMenuItem)
}

const handleLogout = () => {
    logout()
    clearTab()
}

onMounted(() => {
    console.log(addTab)
})
</script>
<style scoped lang='scss'>
:deep(.el-menu) {
    background: linear-gradient(135deg, #cee3eb, #f0f6f8) !important;
    border-right: none !important;
}
.logout {
    cursor: pointer;
    position: absolute;
    bottom: 120px;
    left: calc(50% - 10px);
}
.menu_header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    // border-right: 1px solid #dcdfe6;
    background: #cee3eb;
    p {
        color: #334d6a;
        margin-left: 8px;
        font-size: 24px;
        font-weight: 600;
    }
}
.menu_wrap {
    position: relative;
    height: 100vh;
    width: 180px;
    .collapse_btn {
        background-color: #cee3eb;
        z-index: 10;
        cursor: pointer;
        position: absolute;
        right: -10px;
        top: calc(50% - 70px - 10px);
        height: 20px;
        width: 20px;
        border-radius: 50%;
        border: 1px solid #7b7b7b;
    }
}
// 未折叠时的样式
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
    height: 100vh;
    animation: show 0.3s linear !important;
}

// 折叠时样式
.el-menu--collapse {
    width: 60px;
    height: 100vh;
    animation: hide 0.3s linear !important;
}
</style>