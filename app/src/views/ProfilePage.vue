<template>
    <div>
        <h1 v-if="profile.user"> welcome, {{ profile.user.user_metadata.username }}</h1>
        <p v-else>Not logged in</p>
        <button class="out" @click="handleSignOut">log out here</button>
    </div>
</template>

<script setup>
import { useAuthStore } from '../stores/counter.js'
import { supabase } from '../lib/supabaseClient.js';
const profile = useAuthStore () 

const handleSignOut = async () => {
    try {
        const { error } = await auth.signOut()
        if (error) throw error
        profile.user = null
    } catch (err) {
        console.error('Failed to log out:', err.message)
        alert('failed') 
    }
}
</script>

<style lang="scss" scoped>

</style>