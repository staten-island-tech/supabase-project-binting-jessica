<template>
    <div v-if="auth.user" >
        <h1> welcome, {{ auth.user.email }}</h1>
        <p>Cooking Experience: {{ auth.cookingexperience}} </p>
        <button class="out" @click="handleSignOut">log out here</button>
    </div>
    <div  v-else>Not logged in</div>
</template>

<script setup>
import router from '@/router';
import { useAuthStore } from '../stores/counter.js'
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient.js';

const auth = useAuthStore () 
const cookingexperience = ref("");

onMounted (async () => {
    await auth.fetchUser();
    console.log(auth.user);
})

const handleSignOut = async () => {
    try {
        await auth.signOut()
        alert('Logged out successfully');
        auth.user = null
        router.push('/')
    } catch (err) {
        console.error('Failed to log out:', err.message)
        alert('failed') 
    }
}
</script>

<style lang="scss" scoped>

</style>