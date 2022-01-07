<template>
    <div class="leaderboard__profile" @click.prevent="playSound('@/assets/test.wav')">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mark Zuckerberg" class="leaderboard__picture">
        <span class="leaderboard__name">Mark Zuckerberg</span>
        <span class="leaderboard__value">35.7<span>B</span></span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    methods: {
        playSound(sound: string) {
            if(sound) {
                var audio = new Audio(sound);
                audio.play();
            }
        }
    }
})
</script>
