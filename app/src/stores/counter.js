import { defineStore } from 'pinia'
import { supabase } from '../supabaseClient'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),
  actions: {
    async signUp(username, email, password) {
      const { data, error } = await supabase.auth.signUp({ username, email, password })
      if (error) throw error
      this.user = data.user
    },

    async signIn(username, email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({ username, email, password })
      if (error) throw error
      this.user = data.user
    },

    async signOut() {
      await supabase.auth.signOut()
      this.user = null
    },
  }
})
