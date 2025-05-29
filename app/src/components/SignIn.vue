<template>
    <div>
        <h1>Log In!</h1>
        <form @submit.prevent="handleSignIn" class="signin">
          <input type="username" v-model="username" placeholder="Username" required>
          <br>
          <input type="email" v-model="email" placeholder="Email" required />
          <br>
          <input type="password" v-model="password" placeholder="Password" required />
          <br>
          <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script setup>
import router from '@/router';
import { supabase } from '../lib/supabaseClient.js';
import { ref, onMounted, computed } from 'vue';
import { defineStore } from 'pinia'
import { useAuthStore } from '../stores/counter.js'

const email = ref('')
const username = ref('')
const password = ref('')

const auth = useAuthStore()

const handleSignIn = async () => {
  try {
    await auth.signIn(username.value, email.value, password.value)
  } catch (err) {
    console.error('Signup failed:', err.message)
    alert('Wrong credentials')
  }
}
</script>

<style scoped>

</style>