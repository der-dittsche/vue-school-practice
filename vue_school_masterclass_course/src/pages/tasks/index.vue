<script setup lang="ts">
import {supabase} from '@/lib/supabaseClient'
import {ref} from 'vue'
import type {Tables} from '../../../database/types'

const tasks = ref<Tables<'tasks'>[] | null>(null)


;(async () => {
  const {data, error} = await supabase.from('tasks').select()
  if (error) console.log(error)
  tasks.value = data
})()
</script>

<template>
  <div>
    <h1>Projekt Übersicht</h1>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/projects">Projekte</RouterLink> |
    <RouterLink to="/tasks">Aufgaben</RouterLink>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">{{ task.id }} - {{ task.name }} - <br>{{ task.description }}<br> ---- </li>
    </ul>
  </div>
</template>