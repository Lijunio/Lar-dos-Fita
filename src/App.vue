<template>
  <div id="app">
    <GlobalAudio ref="globalAudio"/>
    <router-view :playAudio="playAudio" />
  </div>
</template>

<script>
import GlobalAudio from './components/GlobalAudio.vue';

export default {
  name: 'App',
  components: {
    GlobalAudio
  },
  methods: {
    playAudio() {
      this.$refs.globalAudio.playAudio();
    }
  },
  mounted() {
    console.log('App component mounted');
  }
};
</script>

<style>

</style>
