<template>
    <div>
      <audio ref="audioPlayer" autoplay loop>
        <source src="/fita.mp3" type="audio/mp3">
        Your browser does not support the audio element.
      </audio>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GlobalAudio',
    methods: {
      playAudio() {
        this.$refs.audioPlayer.play().then(() => {
          console.log('Audio is playing');
        }).catch(error => {
          console.error('Error playing audio:', error);
        });
      }
    },
    mounted() {
      console.log('GlobalAudio component mounted');
    }
  }
  </script>
  
  <style scoped>
  audio {
    display: none; /* Esconde o controle de áudio */
  }
  </style>
  