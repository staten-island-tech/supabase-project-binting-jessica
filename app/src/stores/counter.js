import { defineStore } from 'pinia'
import { supabase } from '../lib/supabaseClient'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    cookingexperience: 1,
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

    async signIn(email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({email, password,})
      if (error) throw error
      this.user = data.user
    },

    async signOut() {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      this.user = null
    },
    async fetchUser() {
      const user = await supabase.auth.user;
      if (user) {
        this.user = data.user;
      }
    },
  }
})