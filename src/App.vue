<template>
    <!-- 言語切替 -->
    <button @click="switchLanguage()">{{ $t('language') }}</button>
    
    <!-- 表示領域 -->
    <router-view></router-view>
</template>

<script setup lang="ts">
// import Login from './pages/Login.vue'
import { useRouter } from 'vue-router'
import i18n from './language/index'

const router = useRouter()
router.push('/page1')

function switchLanguage() {
    console.log('cliked: '+ i18n.global.locale)
    switch (i18n.global.locale) {
        case 'ja':
            i18n.global.locale = 'en-US'
            break;
        case 'en-US':
            i18n.global.locale = 'ja'
            break;
        default:
            break;
    }
}
</script>