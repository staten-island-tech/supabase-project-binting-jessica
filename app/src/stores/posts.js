import { defineStore } from 'pinia'
import { supabase } from '../lib/supabaseClient'

export const usePostStore = defineStore('profile', {
  state: () => ({
    title: null,
    images: [],
    likes: 0,
    // timestamp: ,
    content: null,
    id: null,
  }),
  actions: {
    setUser(auth) {
      this.userId = auth?.user?.id
    }
  }
})
