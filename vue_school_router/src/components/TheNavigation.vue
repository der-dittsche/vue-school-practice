<template>
  <div id="nav">
    <AppLink to="/" id="logo">Vue School Router Lesson</AppLink>
    <AppLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{ name: 'destination.show', params: {id: destination.id, slug: destination.slug}}"
    >
      {{ destination.name }}
    </AppLink>
    <AppLink :to="{name: 'protected'}">Dashboard</AppLink>
    <AppLink to="https://der-dittsche.de">Der Dittsche</AppLink>
  </div>
</template>
<script>
import sourceData from "@/data.json";

export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>