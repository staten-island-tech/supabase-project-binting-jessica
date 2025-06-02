<template>
    <div>
      <h1>Sign Up!</h1>
      <br>
        <form @submit.prevent="handleSignUp" >
          <input type="username" v-model="username" placeholder="Username" required>
          <br>
          <input type="email" v-model="email" placeholder="Email" required />
          <br>
          <input type="password" v-model="password" placeholder="Password" required />
          <br>
          <button type="submit">Submit</button>
        </form>
      <!-- <h2 v-for="buser in busers" :key="buser.id">{{ buser.Username }}</h2> -->
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

const handleSignUp = async () => {
  try {
    await auth.signUp(username.value, email.value, password.value)
    alert('Log in')

  } catch (err) {
    console.error('Signup failed:', err.message)
    alert('Already Registered')
  }
}

// const busers = ref('');
// async function getUsers() {
//   const { data } = await supabase.from('busers').select(busers.id)
//   busers.value = data;
// }
// onMounted(() => {
//    getUsers();
// })


</script>


<style scoped>
.log {
  flex-direction: row;
  display: flex;
}
</style>