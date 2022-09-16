<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { io } from 'socket.io-client';
import useLightningStore from './stores/lightning-store';

export default defineComponent({
  name: 'App',
  setup() {
    const socket = io('http://localhost:3000');
    const { setLightning } = useLightningStore();
    socket.emit('fetch-lightning', null, setLightning);
    socket.on('lightning-res', setLightning);
  }
});
</script>
