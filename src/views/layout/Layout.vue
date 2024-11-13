<template>
    <div class="layout_wrap">
        <Aside />
        <div class="layout_wrap_right">
            <Nav />
            <div class="layout_wrap_right_content">
                <router-view class="layout_wrap_right_content_view" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Nav from '@/components/layout/nav/Nav.vue'
import Aside from '@/components/layout/aside/Aside.vue'
import { ref, onMounted } from 'vue'
</script>
<style scoped lang='scss'>
.layout_wrap {
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    &_right {
        flex: 1;
        &_content {
            padding: 16px;
            max-height: calc(100vh - 50px);
            min-height: calc(100vh - 50px);
            background-color: #f5f5f5;
            &_view {
                width: 100%;
                max-height: calc(100vh - 50px - 32px);
                min-height: calc(100vh - 50px - 32px);
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1),
                    0px 4px 6px rgba(0, 0, 0, 0.05);
            }
        }
    }
}
</style>