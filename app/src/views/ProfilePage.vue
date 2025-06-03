<template>
    <div>
        <h1 v-if="profile.user"> welcome, {{ profile.user }}</h1>
        <p v-else>Not logged in</p>
    </div>
</template>

<script setup>
import { useAuthStore } from '../stores/counter.js'
const profile = useAuthStore () 
</script>

<style lang="scss" scoped>

</style>