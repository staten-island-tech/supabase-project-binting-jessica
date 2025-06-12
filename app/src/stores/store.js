import { defineStore } from 'pinia'
import { supabase } from '../lib/supabaseClient'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    followers: 0,
    cooking_experience: null,
    posts: 0
  }),
  actions: {
  async fetchUserProfile(userId) {
    const { data, error } = await supabase
      .from('buser')
      .select('id, username, avatar, followers, cooking_experience')
      .eq('id', userId)
      .single()

  if (error) throw error

  this.user = {
    id: data.id,
    username: data.username,
    avatar: data.avatar,
    followers: data.followers,
    cooking_experience: data.cooking_experience
  }
}

  }
})
