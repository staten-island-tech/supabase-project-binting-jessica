<template>
    <div>
      <h1>Sign Up!</h1>
      <br>
        <form @submit.prevent="signUpNewUser" >
          <input type="username" v-model="username" placeholder="Username" required>
          <br>
          <input type="email" v-model="gmail" placeholder="Gmail" required />
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
import { supabase } from '../lib/supabaseClient';
import { ref, onMounted, computed } from 'vue';
import { defineStore } from 'pinia'
// const busers = ref('');
// async function getUsers() {
//   const { data } = await supabase.from('busers').select(busers.id)
//   busers.value = data;
// }
// onMounted(() => {
//    getUsers();
// })

const username = ref('')
const gmail = ref('')
const password = ref('')
async function signUpNewUser() {
  const { data, error } = await supabase.auth.signUp({
    email: gmail.value,
    password: password.value,
    username: username.value
  })
  if (error) {
    console.error('Error signing up:', error)
  } else {
    console.log('Signed up successfully:', data)
  }
  router.push('/profile')
};

</script>


<style scoped>
.log {
  flex-direction: row;
  display: flex;
}
</style>