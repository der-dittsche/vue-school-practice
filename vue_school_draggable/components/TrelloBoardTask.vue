<script setup lang="ts">
import type {Task, ID} from "~/types";

const props = defineProps<({
  task: Task,
})>()

const emit = defineEmits<{
  (e: "delete", payload: ID): void
}>()

const focused = ref(false)

onKeyStroke("Backspace", (e)=>{
  if(focused.value) emit("delete", props.task.id)
})
</script>

<template>
  <div
      :title="task.createdAt.toLocaleDateString"
      class="task bg-white p-2 mb-2 rounded shadow-sm max-w-[250px] flex items-start"
      @focus="focused = true"
      @blur="focused = false"
      tabindex="0"
  >
    <DragHandle />
    <div class="w-full">
      <p>{{ task.title }}</p>
      <p class="text-xs w-full text-right pt-2 text-gray-400">created at: {{ task.createdAt.toLocaleDateString()}}</p>
    </div>

  </div>
</template>

<style scoped lang="postcss">
.task {
  @apply hover:bg-slate-100 focus:bg-slate-100 focus-visible:bg-slate-100
}

.sortable-chosen .task {
  @apply border-solid border-2 border-black rounded ;
}

.sortable-drag .task {
  transform: rotate(-2.5deg);
}

.sortable-ghost .task {
  position: relative;
}

.sortable-ghost .task:after {
  content: "";
  @apply absolute top-0 bottom-0 left-0 right-0 bg-slate-300 rounded;
}
</style>