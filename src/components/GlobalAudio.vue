<template>
  <div>
    <audio ref="audioPlayer" autoplay loop>
      <source :src="audioSource" type="audio/mp3">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
export default {
  name: 'GlobalAudio',
  data() {
    return {
      audioSource: process.env.NODE_ENV === 'production' ? '/Lar-dos-Fita/fita.mp3' : '/fita.mp3'
    };
  },
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
    this.playAudio();
    console.log('GlobalAudio component mounted');
  }
}
</script>

<style scoped>
audio {
  display: none; 
}
</style>
