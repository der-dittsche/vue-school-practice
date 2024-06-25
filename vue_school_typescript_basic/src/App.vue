<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import EntryEditor from "./components/EntryEditor.vue";
import EntryCard from "@/components/EntryCard.vue";
import type User from "@/types/User"
import type Entry from "@/types/Entry";
import {provide, reactive} from "vue";
import { userInjektionKey} from "@/injectionKeys";
import {vClickOutside} from "@/directives/vClickOutside";

const user: User = {
  id: 1,
  username: "Sascha Dietrich",
  settings: []
}

provide(userInjektionKey, user)

const entries: Entry[] = reactive([])

const handleCreateEntry = (entry: Entry) => {
  entries.unshift(entry)
}

const handleClickOutside = () => alert("Click Outside")

</script>

<template>
  <main class="container m-auto p-10 h-[100dvh]">
    <TheHeader />
    <EntryEditor @@create="handleCreateEntry"/>
    <ul>
      <li v-for="entry in entries" :key="entry.id">
        <EntryCard :entry="entry"/>
      </li>
    </ul>
    <div class="box" v-click-outside="handleClickOutside">
      Click me
    </div>
  </main>
</template>

<style scoped lang="postcss">
.box {
  @apply w-full border-solid border-gray-600 border-4 rounded text-center p-3 mt-4;
}
</style>