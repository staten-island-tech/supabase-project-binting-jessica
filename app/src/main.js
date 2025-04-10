import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('', '')
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

const { data, error } = await supabase
  .from('busers')
  .select()