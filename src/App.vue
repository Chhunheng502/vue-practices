<template>
  <div>
    <button @click="changeOrder('title')"> Order by title </button>
    <button @click="changeOrder('location')"> Order by location </button>
    <button @click="changeOrder('salary')"> Order by salary </button>
  </div>
  <job-list :jobs="jobs" :order="order"> </job-list>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import JobList from './components/JobList.vue'
import Job from './types/Job'
import OrderTerm from './types/OrderTerm'

export default defineComponent({
  name: 'App',
  components: {
    JobList
  },
  setup() {

    const jobs = ref<Job[]>([
      { title: 'farm worker', location: 'lon lon ranch', salary: 30000, id: '1' },
      { title: 'quarryman', location: 'death mountain', salary: 40000, id: '2' },
      { title: 'flute player', location: 'the lost woods', salary: 35000, id: '3' },
      { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
      { title: 'prison guard', location: 'gerudo valley', salary: 32000, id: '5' }
    ])

    const order = ref<OrderTerm>('title')

    const changeOrder = (term: OrderTerm) => {
      order.value = term;
    }

    return { jobs, order, changeOrder }
  }
});
</script>

<style>

</style>
