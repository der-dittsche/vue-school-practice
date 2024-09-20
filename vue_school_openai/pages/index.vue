<script setup lang="ts">
import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: useRuntimeConfig().public.openAiKey,
  dangerouslyAllowBrowser: true
});

const response = await openai.chat.completions.create({
  model: "gpt-4o-mini-2024-07-18",
  messages: [],
  temperature: 1,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

console.log(response);
</script>

<template>
  <div>
    <h1>Chatbot</h1>
  </div>
</template>
