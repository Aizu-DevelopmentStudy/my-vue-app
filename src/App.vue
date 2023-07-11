<template>
    <!-- 表示領域 -->
    <router-view></router-view>
</template>

<script setup lang="ts">
// import Login from './pages/Login.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
router.push('/page1')
</script>