<template>
    <div>
      <form id="user-form">
        <input type="text" id="gmail" placeholder="Gmail" required />
        <input type="text" id="password" placeholder="Password" required />
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
document.getElementById('user-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  const gmail = document.getElementById('gmail').value
  const password = document.getElementById('password').value
  const { data, error } = await supabase.auth.signInWithPassword({
  Email: gmail,
  password: password
})
  // const { data, error } = await supabase
  //   .from('auth.users')
  //   .insert({ Email: gmail })
  //   .from('busers')
  //   .insert({ password: password })

  // if (error) {
  //   console.error('Error inserting data:', error)
  // } else {
  //   console.log('Inserted data:', data)
  // }
})


</script>

<style scoped>

</style>