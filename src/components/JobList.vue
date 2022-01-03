<template>
    <div class="job-list">
        <ul>
            <li v-for="job in orderedJobs" :key="job.id">
                <h2> {{ job.title }} in {{ job.location }} </h2>
                <p> {{ job.salary }} </p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import Job from '@/types/Job'
import OrderTerm from '@/types/OrderTerm'

export default defineComponent({
    props: {
        jobs: {
            type: Array as PropType<Job[]>,
            required: true
        },
        order: {
            type: String as PropType<OrderTerm>,
            required: true
        }
    },
    setup(props) {
        const orderedJobs = computed(() => {
            return [...props.jobs].sort((a: Job, b: Job) => {
                return a[props.order] > b[props.order] ? 1 : -1;
            })
        })

        return { orderedJobs }
    },
})
</script>
