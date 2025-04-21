<template>
    <div>
      <form id="user-form">
        <input type="text" id="gmail" placeholder="Gmail" required />
        <input type="text" id="password" placeholder="Password" required />
        <button type="submit">Submit</button>
      </form>
    </div>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://mpkijprcubmttyjpxasg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wa2lqcHJjdWJtdHR5anB4YXNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMDc3MDEsImV4cCI6MjA1OTg4MzcwMX0.9ezq3Pg_xAj4pQLNxhzWq0do0HCl8EuoNyMmIinS3bE')

document.getElementById('user-form').addEventListener('submit', async (e) => {
  e.preventDefault()

  const gmail = document.getElementById('gmail').value
  const password = document.getElementById('password').value

  const { data, error } = await supabase
    .from('users')
    .insert([{ gmail, password }])

  if (error) {
    console.error('Error inserting data:', error)
  } else {
    console.log('Inserted data:', data)
  }
})

.insert([{gmail: 'fhjlahdofjsf@gmail.com', password: 'sdhfilahdl;f'}])

</script>

<style scoped>

</style>