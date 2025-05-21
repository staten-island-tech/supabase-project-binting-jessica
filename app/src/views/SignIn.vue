<template>
    <div>
        <h1>Log In!</h1>
        <form @submit.prevent="signInUser" class="signin">
          <input type="username" v-model="username" placeholder="Username" required>
          <br>

          <input type="email" v-model="gmail" placeholder="Gmail" required />
          <br>
          <input type="password" v-model="password" placeholder="Password" required />
          <br>
          <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>