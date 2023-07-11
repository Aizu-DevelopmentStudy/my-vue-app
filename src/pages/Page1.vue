<template>
    <div class="mx-auto h-screen flex justify-center items-center bg-orange-200">
        <h1 class="text-6xl ml-2">{{ $t('pageTitle.page1') }}</h1>
        <router-link class="ml-2" to="/page2">{{ $t('pageTitle.page2') }}</router-link>
        <router-link class="ml-2" to="/page3">{{ $t('pageTitle.page3') }}</router-link>
    </div>
</template>