<template>
    <div>
    </div>
</template>

<script setup>
import { defineStore } from 'pinia'
import { supabase } from '../lib/supabaseClient';

export const useFormStore = defineStore('form', {
  state: () => ({
    title: '',
    content: '',
    imageurl: '',
    loading: false,
    error: null,
    success: false,
  }),
  actions: {
    updateField(field, value) {
      this[field] = value
    },
    clearForm() {
      this.title = ''
      this.content = ''
      this.imageurl = ''
      this.success = false
      this.error = null
    },
    async submitForm() {
      this.loading = true
      this.error = null
      this.success = false

      const { data, error } = await supabase
        .from('posts') 
        .insert([{
          title: this.title,
          content: this.content,
          imageurl: this.imageurl,
        }])

      if (error) {
        this.error = error.message
      } else {
        this.success = true
        this.clearForm()
      }

      this.loading = false
    }
  },
})

</script>

<style scoped>

</style>