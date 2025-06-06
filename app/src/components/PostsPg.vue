<template>
    <div>
        <h1>Posts</h1>
        <h1>Create a Post</h1>
        <form class="createpost">
          <input type="title" v-model="title" placeholder="Title" required>
          <br>
          <input type="images" v-model="images" placeholder="Image Link(s)" required />
          <br>
          <input type="content" v-model="content" placeholder="Content" required />
          <br>
          <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script setup>
import { usePostStore } from '../stores/posts.js'

</script>

<style scoped>

</style>