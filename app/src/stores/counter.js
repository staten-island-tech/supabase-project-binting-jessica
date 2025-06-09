import { defineStore } from 'pinia'
import { supabase } from '../lib/supabaseClient'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),
  actions: {
    async signUp(username, email, password) {
      const { data, error } = await supabase.auth.signUp({email, password,
        options: {
          data: { username }
        }
       })
      if (error) throw error
      this.user = data.user
    },

    async signIn(username, email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({email, password,
        options: {
          data: { username }
        }
       })
      if (error) throw error
      this.user = data.user
    },

    async signOut() {
      await supabase.auth.signOut()
      this.user = null
    },
  }
})