<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/profile">Profile</RouterLink>
        <RouterLink to="/posts">Posts</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  width: 100%;           /* full width */
  margin: 0;             /* remove any default margin */
  padding: 1rem;         /* optional: add some padding */
  box-sizing: border-box; /* include padding in width */
  line-height: 1.5;
  max-height: 100vh;

}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 0rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center;      /* changed from place-items */
    justify-content: space-between; /* or center, depending on layout */
    padding: 1rem;

  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
