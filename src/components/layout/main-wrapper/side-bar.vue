<template>
    <nav class="menu" tabindex="0">
        <div class="smartphone-menu-trigger"></div>
        <header class="avatar">
            <app-logo/>
            <h2>John D.</h2>
        </header>
        <ul>
            <home/>
            <queue/>
            <all-songs/>
            <settings/>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLogo from '@/components/ui/app-logo.vue'
import Home from '@/components/screens/home.vue'
import Queue from '@/components/screens/queue.vue'
import AllSongs from '@/components/screens/all-songs.vue'
import Settings from '@/components/screens/settings.vue';

export default defineComponent({
    components: {
        AppLogo,
        Home,
        Queue,
        AllSongs,
        Settings
    }
})
</script>
