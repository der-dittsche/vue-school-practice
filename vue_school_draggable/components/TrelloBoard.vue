<script setup lang="ts">
import {nanoid} from "nanoid"
import draggable from 'vuedraggable'
import type {Column, Task} from "~/types";

const alt = useKeyModifier("Alt")

const columns = useLocalStorage<Column[]>("trelloBoard", [
  {
    title: "Backlog",
    id: nanoid(),
    tasks: [
      {
        title: "Create marketing landing page",
        createdAt: new Date(),
        id: nanoid(),
      },
      {
        title: "Develop cool new feature",
        createdAt: new Date(),
        id: nanoid(),
      },
      { title: "Fix page nav bug", createdAt: new Date(), id: nanoid() },
    ],
  },
  { title: "Selected for Dev", id: nanoid(), tasks: [] },
  { title: "In Progress", id: nanoid(), tasks: [] },
  { title: "QA", id: nanoid(), tasks: [] },
  { title: "Complete", id: nanoid(), tasks: [] },
], {
  serializer: {
    read: (value) => {
      return JSON.parse(value).map((column: Column) => {
        column.tasks = column.tasks.map((task: Task) => {
          task.createdAt = new Date(task.createdAt)
          return task
        })
        return column
      })
    },
    write: (value) => JSON.stringify(value)
  }
});

function createColumn() {
  const column: Column = {
    id: nanoid(),
    title: "",
    tasks: []
  }
  columns.value.push(column)
  nextTick(() => {
    (document.querySelector(".column:last-of-type .title-input") as HTMLInputElement).focus()
  })

}

</script>

<template>
  <div class="flex items-start overflow-x-auto gap-4">
    <draggable
        v-model="columns"
        group="columns"
        item-key="id"
        class="flex gap-4 items-start"
        :animation="150"
        handle=".drag-handle"
    >
      <template #item="{ element: column }: { element: Column }">
        <div class="column bg-gray-200 p-5 rounded min-w-[250px]">
          <header class="flex items-center font-bold mb-4 ml-0.5">
            <DragHandle/>
            <input
                v-model="column.title"
                type="text"
                class="title-input bg-transparent focus:bg-white rounded px-1 w-4/5"
                @keyup.enter="($event.target as HTMLInputElement).blur()"
                @keydown.delete="column.title === '' ? (columns = columns.filter((c) => c.id !== column.id)) : null"
            >
          </header>
          <draggable
              v-model="column.tasks"
              :group="{
                name: 'tasks',
                pull: alt ? 'clone' : true
                }"
              item-key="id"
              :animation="150"
              handle=".drag-handle"
          >
            <template #item="{ element: task }: { element: Task }">
              <div>
                <TrelloBoardTask :task="task" @delete="column.tasks = column.tasks.filter(t=> t.id !== $event)"/>
              </div>
            </template>
          </draggable>
          <footer>
            <NewTask @add="column.tasks.push($event)"/>
          </footer>
        </div>
      </template>
    </draggable>
    <button
        @click="createColumn"
        class="bg-gray-200 whitespace-nowrap p-2 rounded opacity-50"
    >
      + Add another column
    </button>
  </div>
</template>

<style scoped>

</style>