import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { user } from '../views/Signup.vue'

export const useStore = defineStore('storeUser', () => {
    const isUserLoggedIn = ref(false)
    return(isUserLoggedIn)
})
