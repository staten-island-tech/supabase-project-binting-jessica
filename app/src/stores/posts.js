import { defineStore } from 'pinia'
import { supabase } from '../lib/supabaseClient'

export const usePostStore = defineStore('profile', {
  state: () => ({
    title: null,
    image: null,
    likes: 0,
    // timestamp: ,
    content: null,
    userId: null,
    posts: [],
    theme: 'light'
  }),
  actions: {
    initializeTheme() {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        this.theme = savedTheme
      }
      document.body.classList.add(this.theme)
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      document.body.classList.remove('light', 'dark')
      document.body.classList.add(this.theme)
      localStorage.setItem('theme', this.theme)
    },
    setUser(auth) {
      this.userId = auth?.user?.id ?? null
    },
    // createPost(post) {
    //   post.likes = 0;       
    //   this.posts.push(post)
    // },
    incrementLikes(index) {
      if (this.posts[index]) {
        this.posts[index].likes++
      }
    },
    async fetchPosts() {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching posts:', error)
        return
      }
      this.posts = data
    },

    async createPost(post, userId) {
      console.log('Creating post with userId:', userId)

      const { data, error } = await supabase.from('posts').insert([
        {
          title: post.title,
          content: post.content,
          image: post.image,
          user_id: userId,  
          likes: 0,
        },
      ]).select()
    
      if (error) {
        console.error('Insert error:', error)
        return
      }
    
      this.posts.push(data[0])
    },
    async deletePost(postId) {
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', postId)
    
      if (error) {
        console.error('Error deleting post:', error)
        return
      }
      else {
        this.posts = this.posts.filter(post => post.id !== postId)
      }
    
    }
}
})
