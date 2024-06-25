<script setup lang="ts">
import FileNotesIcon from "@/assets/icons/file-notes.svg";
import {vColor} from "@/directives/vColors"
import { ref } from "vue";

const colors = ref(['blue', 'lightblue', 'blue', 'darkblue'])

const show = ref(true)

setTimeout(()=> {
  colors.value.push('darkgreen', 'green', 'lightgreen', 'green')
}, 6000)
</script>
<template>
  <h1 class="text-6xl flex items-center">
    <FileNotesIcon width="80" class="mr-5" />
    <strong v-if="show" v-color:slow.underline="colors"> My Journal</strong>
    <button @click="show = !show">Toggle Header</button>
<!--    <strong v-color:crazy.underline.italic="colors"> My Journal</strong>-->
  </h1>
</template>