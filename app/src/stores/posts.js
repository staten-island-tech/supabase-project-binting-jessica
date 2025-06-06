import { defineStore } from 'pinia'
import { supabase } from '../lib/supabaseClient'

const props = defineProps({
  user: Object,
  auth: Object
})

export const usePostStore = defineStore('profile', {
  state: () => ({
    title: null,
    images: [],
    likes: 0,
    // timestamp: ,
    content: null,
    id: auth.user.id,
  })
})
