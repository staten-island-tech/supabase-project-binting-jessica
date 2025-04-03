import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://lbcithrzijletyauhsnm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxiY2l0aHJ6aWpsZXR5YXVoc25tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMTAxNzMsImV4cCI6MjA1ODU4NjE3M30.7_I-Na4UBJcclN-_KmaA9KZLiKAA1rk6O-ewQjF0pMk')
const app = createApp(App)

app.use(createPinia())

app.mount('#app')
