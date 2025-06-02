import { defineStore } from 'pinia'
import { supabase } from '../lib/supabaseClient'

export const useAuthStore = defineStore('profile', {
  state: () => ({
    followers: 0,
    cooking_experience: null,
    posts: 0
  }),
  actions: {
    
  }
})