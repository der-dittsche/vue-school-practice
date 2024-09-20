<script setup lang="ts">
import {computed, Ref, ref} from "vue";
import {useNow} from "@vueuse/core";
import Comp1 from "@/components/Comp1.vue";
import Comp2 from "@/components/Comp2.vue";
import FadeTransition from "@/components/transitions/fadeTransition.vue";
import FadeWithMoveTransition from "@/components/transitions/fadeWithMoveTransition.vue";

const now = useNow() as Ref<Date>;
const seconds = computed(() => now.value.getSeconds())
const isActive = ref(true)
const toggleComponent = computed(() => (isActive.value ? Comp1 : Comp2))
</script>

<template>
  <div>
    <h1>Part 3</h1>
    <div class="wrapper">
      <FadeWithMoveTransition>
        <span class="seconds" :key="seconds">{{seconds}}</span>
      </FadeWithMoveTransition>
    </div>
    <div>
      <FadeTransition>
        <component :is="toggleComponent"></component>
      </FadeTransition>
      <button @click.prevent="isActive = !isActive">Change Comp</button>
    </div>

  </div>
</template>

<style scoped>

.wrapper {
  position: relative;
  padding-bottom: 5rem;
}
.seconds {
  position: absolute;
  top: 0;
  left: 0;
font-size: 2rem;
}
</style>
