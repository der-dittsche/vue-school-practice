<script setup>
import CoffeePlan from "@/components/CoffeePlan.vue";

import { ref, onMounted, onUnmounted } from "vue";
const plans = ref(['The Single', 'The Curious', 'The Addict', 'The Hacker'])

const selectedCoffeePlan = ref()

function handleSelectedCoffeePlan(name) {
  selectedCoffeePlan.value = name
}

// const count = ref(0)
// const interval = setInterval(() => {
//   count.value++
//   console.log(count.value)
// }, 1000)
//
// const plansWrapper = ref()
//
// onMounted(()=> {
//   console.log(plansWrapper.value)
// })
//
// onUnmounted(()=> {
//   console.log('Unmounted')
//   clearInterval(interval)
// })


</script>

<template>
  <div ref="plansWrapper" class="plans" >
    {{ selectedCoffeePlan }}
    <CoffeePlan
        v-for="plan in plans"
        :key="plan"
        :name="plan"
        :selected="plan === selectedCoffeePlan"
        @click="$event => handleSelectedCoffeePlan(plan)">
    </CoffeePlan>
  </div>
</template>

<style scoped>

</style>