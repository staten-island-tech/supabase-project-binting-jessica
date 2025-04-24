<template>
    <div>
      <form @submit.prevent="handleSubmit">
        <input type="email" v-model="gmail" placeholder="Gmail" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Submit</button>
      </form>
      <!-- <h2 v-for="buser in busers" :key="buser.id">{{ buser.Username }}</h2> -->
    </div>
</template>

<script setup>
import { supabase } from '../lib/supabaseClient';
import { ref, onMounted } from 'vue';
// const busers = ref('');
// async function getUsers() {
//   const { data } = await supabase.from('busers').select(busers.id)
//   busers.value = data;
// }
// onMounted(() => {
//    getUsers();
// })

const gmail = ref('')
const password = ref('')

const handleSubmit = async () => {
  const { data, error } = await supabase.auth.signUp({
    Email: gmail.value,
    Password: password.value
  })
  console.log('Email:', gmail.value);
  console.log('Password:', password.value );
  if (error) {
    console.error('Error signing up:', error)
  } else {
    console.log('Signed up successfully:', data)
  }
}

</script>


<style scoped>

</style>