<template>
  <div id="app">
<<<<<<< HEAD
    <GlobalAudio ref="globalAudio"/>
    <router-view :playAudio="playAudio" />
=======
    <router-view />
>>>>>>> 94555bbb (first commit)
  </div>
</template>

<script>
<<<<<<< HEAD
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
/* Seu CSS global */
</style>
=======
export default {
  name: 'App',
};
</script>
>>>>>>> 94555bbb (first commit)
