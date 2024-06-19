<script lang="ts" setup>
import EmojiField from "@/components/EmojiField.vue";
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg";
import {ref, computed, onMounted, inject} from "vue";
import type Emoji from "@/types/emoji";
import type Entry from "@/types/Entry";
import {userInjektionKey} from "@/injectionKeys";

const body = ref("")
const emoji= ref<Emoji | null>(null)
const charCount = computed<number>(()=> body.value.length)
const maxChars: number = 280

const textarea = ref<HTMLTextAreaElement | null>(null)
onMounted(()=> textarea.value?.focus())

const emit = defineEmits<{
  (e: "@create", entry: Entry): void
}>()

const handleTextInput = (e: Event)=> {
  const textarea = e.target as HTMLTextAreaElement;
  if(textarea.value.length <= maxChars) {
    body.value = textarea.value;
  } else {
    body.value = textarea.value = textarea.value.substring(0, maxChars);
  }
}

const user = inject(userInjektionKey)

const handleSubmit = () => {
  emit('@create', {
    id: Math.random(),
    body: body.value,
    emoji: emoji.value,
    createdAt: new Date(),
    userId: 1
  })
  body.value = "";
  emoji.value = null
}
</script>
<template>
  <form class="entry-form" @submit.prevent="handleSubmit">
    <textarea
        :value="body"
        @keyup="handleTextInput"
        :placeholder="`New Journal Entry for ${user?.username || 'anonymous'}`"
        ref="textarea"
    ></textarea>
    <EmojiField v-model="emoji"/>
    <div class="entry-form-footer">
      <span>{{ charCount }} / {{ maxChars }}</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
