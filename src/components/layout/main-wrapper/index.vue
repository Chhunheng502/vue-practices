<template>
	<side-bar> </side-bar>
	<main-content> </main-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from './side-bar.vue'
import MainContent from './main-content.vue';

export default defineComponent({
  components: {
    SideBar,
	MainContent
  }
});
</script>
