<template>
    <template v-for="(item, idx) in props.menuList" :key="idx">
        <el-sub-menu :index="item.index" v-if="item.children">
            <template #title>
                <el-icon :size="16">
                    <component :is="iconComponents[item.icon]" />
                </el-icon>
                <span>{{ item.label }}</span>
            </template>
            <MenuItem
                :isCollapse="props.isCollapse"
                :menuList="item?.children"
            />
        </el-sub-menu>

        <el-menu-item v-else :index="item.route">
            <el-icon :size="16">
                <component :is="iconComponents[item.icon]" />
            </el-icon>
            <template #title>
                <span>{{ item.label }}</span>
            </template>
        </el-menu-item>
    </template>
</template>

<script setup name="MenuItem">
import { ref, onMounted, defineProps } from 'vue'
import { Plus } from '@element-plus/icons-vue'
const props = defineProps({
    menuList: {
        type: Array,
        default: () => [],
    },
    isCollapse: {
        type: Boolean,
        default: false,
    },
})

const iconComponents = {
    Plus,
}

onMounted(() => {
    console.log(props.menuList)
})
</script>
<style scoped lang='scss'>
</style>