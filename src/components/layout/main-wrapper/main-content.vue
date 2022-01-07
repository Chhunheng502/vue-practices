<template>
    <main>
        <song-list/>
        <app-footer/>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SongList from '@/components/song/list.vue'
import AppFooter from '@/components/layout/app-footer/index.vue';

export default defineComponent({
    components: {
        SongList,
        AppFooter
    }
})
</script>
