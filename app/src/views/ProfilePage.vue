<template>
    <div>
        <h1 v-if="auth.user"> welcome, {{ auth.data.username }}</h1>
        <p v-else>Not logged in</p>
        <button class="out" @click="handleSignOut">log out here</button>
    </div>
</template>

<script setup>
import { useAuthStore } from '../stores/counter.js'
import { useProfileStore } from '../stores/store.js'
import { onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient.js';
const auth = useAuthStore () 

const profile = useProfileStore ()

onMounted (async () => {
    await auth.fetchUser ()
})

const handleSignOut = async () => {
    try {
        const { error } = await auth.signOut()
        if (error) throw error
        auth.user = null
    } catch (err) {
        console.error('Failed to log out:', err.message)
        alert('failed') 
    }
}
</script>

<style lang="scss" scoped>

</style>