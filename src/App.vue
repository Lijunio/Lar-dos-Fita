<template>
  <div id="app">
    <router-view />
    <GlobalAudio />
  </div>
</template>

<script>
import GlobalAudio from './components/GlobalAudio.vue';

export default {
  name: 'App',
  components: {
    GlobalAudio
  }
};
</script>
