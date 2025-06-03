import { defineStore } from 'pinia'
import { supabase } from '../lib/supabaseClient'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      username: '',
      email: '',
    }
  }),
  actions: {
    async signUp(username, email, password) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { username }
        }
      })
      if (error) throw error

      this.user = {
        username,
        email: data.user.email
      }
    },

    async signIn(email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (error) throw error

      this.user = {
        username: data.user.user_metadata.username || '',
        email: data.user.email
      }
    },

    async signOut() {
      await supabase.auth.signOut()
      this.user = { username: '', email: '' }
    },
  }
})
