<template>
  <button v-on:click="toggleTheme()">Color Theme</button>
    <div class="container">
      <div class="posts-section">
        <h1>Posts</h1>
        <div class="posts">
          <div class="post" v-for="(post, index) in state.posts" :key="index">
            <h1>{{ post.title }}</h1>
            <h2> User Id: {{ state.userId }}</h2>
            <h2>{{ post.content }}</h2>
            <img :src="post.image" alt="" />
            <button v-on:click="incrementLikes(index)">Likes: {{ post.likes }} </button>
            <button v-on:click="deletePost(post.id)">Delete Post</button>
          </div>
        </div>
      </div>
      <div class="form-section">
        <h1>Create a Post</h1>
        <form @submit.prevent="handleCreatePost()" class="createpost"> 
          <input type="text" v-model="title" placeholder="Title" required>
          <br>
          <input type="text" v-model="image" placeholder="Image Link" required />
          <br>
          <input type="text" v-model="content" placeholder="Content" required />
          <br>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
</template>

<script setup>
import { usePostStore } from '../stores/posts.js'
import { useAuthStore } from '../stores/counter.js'
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient'
const title = ref('')
const image = ref('')
const content = ref('')
const state = usePostStore()
const auth = useAuthStore()

onMounted(async () => {
  await auth.fetchUser()
  state.setUser(auth)
  const { data: posts } = await supabase.from('posts').select('*')
  state.posts = posts
  state.initializeTheme()
})



async function handleCreatePost() {
  if (!auth.user) {
    alert('You must be logged in to post.')
    return
  }

  await state.createPost({
    title: title.value,
    image: image.value,
    content: content.value
  }, auth.user.id)

  // clear form
  title.value = ''
  image.value = ''
  content.value = ''
}
function incrementLikes(index) {
  state.incrementLikes(index)
}
function deletePost(postId) {
  state.deletePost(postId)
}
function toggleTheme() {
  state.toggleTheme()
}

</script>

<style >
.post {
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  max-width: 250px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.posts {
  flex-direction: row;
  display: flex;
  gap: 40px;        
  flex-wrap: wrap;
}

.post:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.post h1 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
  font-weight: 700;
}

.post h2 {
  font-size: 1rem;
  margin-bottom: 15px;
  color: #666;
  line-height: 1.4;
}

.post img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.container {
  display: flex;
  gap: 40px;          /* space between posts and form */
  padding: 20px;
  align-items: flex-start; /* align items to top */
  justify-content: center; /* center horizontally */
}

.posts-section {
  flex: 3;              /* Takes up 2/3 of space */
  max-width: 1000px;
}

.form-section {
  flex: 1;              /* Takes up 1/3 of space */
  max-width: 250px;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #fcfafa;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --light: #d2dff3;
  --dark: #091c36;

  --light-red: #f87171;
  --dark-red: #dc2626;

  --primary: var(--light);
  --secondary: var(--dark);
  --font-color: #000000;

  --h1: 5rem;
  --h2: 1.5rem;
  --h3: .8rem;
  --h4: 2.25rem;
  --h5: 1.5rem;
}
body.light {
  background-color: var(--light);
  color: #000000;
}

body.dark {
  background-color: var(--dark);
  color: #f0f0f0;
}
</style>