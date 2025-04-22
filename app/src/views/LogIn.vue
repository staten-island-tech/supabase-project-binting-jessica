<template>
    <div>
      <!-- <form id="user-form">
        <input type="text" id="gmail" placeholder="Gmail" required />
        <input type="text" id="password" placeholder="Password" required />
        <button type="submit">Submit</button>
      </form> -->
      <ul>
        <li v-for="buser in busers" :key="buser.id">{{ buser.username }}</li>
      </ul>
    </div>
</template>

<script setup>
import { supabase } from '../lib/supabaseClient';
import { ref, onMounted } from 'vue';
const busers = ref([]);
async function getUsers() {
  const { data } = await supabase.from('busers').select()
  busers.value = data
}
onMounted(() => {
   getUsers()
})
// document.getElementById('user-form').addEventListener('submit', async (e) => {
//   e.preventDefault()

//   const gmail = document.getElementById('gmail').value
//   const password = document.getElementById('password').value

//   const { data, error } = await supabase
//     .from('busers')
//     .insert([{ gmail, password }])

//   if (error) {
//     console.error('Error inserting data:', error)
//   } else {
//     console.log('Inserted data:', data)
//   }
// })


</script>

<style scoped>

</style>