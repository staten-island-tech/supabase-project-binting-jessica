import { defineStore } from 'pinia';
import {ref} from 'vue'

export let buserStore = defineStore('loginStore', () => {
    const isUserLoggedIn = ref(false)
    return{isUserLoggedIn}
})