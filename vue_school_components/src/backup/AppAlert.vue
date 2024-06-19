<script setup>
import {computed, ref} from "vue";
import IconError from '@/components/icons/IconError.vue'
import IconWarning from '@/components/icons/IconWarning.vue'
import IconSuccess from '@/components/icons/IconSuccess.vue'
import IconInfo from '@/components/icons/IconInfo.vue'

const props = defineProps({
  type: {
    type: String,
    required: true,
    default: 'info'
  }
})

const emit = defineEmits(['closed'])

const alertType = computed(() => {
  return {
    info: 'alert-info',
    warning: 'alert-warning',
    error: 'alert-error',
    success: 'alert-success'
  }[props.type]
})

const icon = computed(() => {
  return {
    info: IconInfo,
    warning: IconWarning,
    error: IconError,
    success: IconSuccess,
  }[props.type]
})

const closed = ref(false)

function close() {
  closed.value = true
  emit('closed')
}
</script>

<template>
  <div v-if="!closed" role="alert" :class="`alert ${alertType}`">
    <component :is="icon"></component>
    <span>
      <slot></slot>
    </span>
    <button @click="close">X</button>
  </div>
</template>

<style scoped>

</style>