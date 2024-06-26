<script setup lang="ts">
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.css"

const props = defineProps({
  context: Object,
})
</script>

<template>
  <Multiselect
      :model-value="context._value"
      v-bind="context.attrs"
      @update:model-value="context.node.input($event)"
      :id="context.id"
      :name="context.node.name"
      @blur="context.handlers.blur"
      :disabled="context.disabled"
      :class="context.classes.input"
  />
</template>

<style scoped>
.formkit-input.multiselect {
  padding: 0;
}
</style>