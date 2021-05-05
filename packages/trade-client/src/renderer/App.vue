<template>
    Test
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const { ipcRenderer } = window.require('electron');

export default defineComponent({
    mounted() {
        ipcRenderer.on('debug', (event, args) => {
            console.log(args);
        });
    },
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
