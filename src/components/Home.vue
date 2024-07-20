<template>
  <div class="container">
    <h1>Bem Vindo<br>Ao Lar dos Fita</h1>
    <p v-if="!showOverlay">
      Você trouxe boas energias para o Lar dos Fita 🧿?
    </p>
    <div
      v-if="!showOverlay"
      class="buttons"
    >
      <button
        class="btn btn-primary"
        @click="handleChoice('yes')"
        :disabled="isDisabled"
      >
        Sim
      </button>
      <button
        class="btn btn-danger"
        @click="handleChoice('no')"
        :disabled="isDisabled"
      >
        Não
      </button>
      <button
        class="btn btn-warning"
        @click="handleChoice('stillRemoving')"
        :disabled="isDisabled"
      >
        Ainda não, mas vou fazer uma reza/oração agora.
      </button>
    </div>
    <div v-if="showTimer">
      <p>Você tem <strong>{{ timer }}</strong> para fazer sua reza/oração para papai do céu abençoar todos os integrantes do Lar dos Fita</p>
    </div>
    <div
      v-if="showOverlay"
      class="overlay"
    >
      <p>E agora, você teve 10 segundos para se purificar, já está com boas energias?</p>
      <div class="overlay-buttons">
        <button
          class="btn btn-primary"
          @click="handleOverlayChoice('yes')"
        >
          Sim
        </button>
        <button
          class="btn btn-danger"
          @click="handleOverlayChoice('no')"
        >
          Não
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import background from '@/assets/background.jpg';

export default {
  data() {
    return {
      backgroundImage: `url(${background})`,
      showTimer: false,
      timer: 10,
      interval: null,
      showOverlay: false,
      isDisabled: false, 
    };
  },
  mounted() {
    document.body.style.backgroundImage = this.backgroundImage;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.height = '100%';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
  },
  beforeUnmount() {
    document.body.style.backgroundImage = '';
  },
  methods: {
    handleChoice(choice) {
      if (!this.isDisabled) { 
        if (choice === 'yes') {
          this.$router.push('/welcome');
        } else if (choice === 'no') {
          this.$router.push('/expulsion');
        } else if (choice === 'stillRemoving') {
          this.isDisabled = true; 
          this.showTimer = true;
          this.startTimer();
        }
      }
    },
    handleOverlayChoice(choice) {
      if (choice === 'yes') {
        this.$router.push('/welcome');
      } else if (choice === 'no') {
        this.$router.push('/expulsion');
      }
    },
    startTimer() {
      this.interval = setInterval(() => {
        this.timer -= 1;
        if (this.timer <= 0) {
          clearInterval(this.interval);
          this.timer = 10;
          this.showTimer = false;
          this.showOverlay = true;
          this.isDisabled = false; 
        }
      }, 1000);
    }
  }
};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 16px;
  text-align: center;
  box-sizing: border-box;
}

h1 {
  font-size: 2em;
  margin-bottom: 1em;
  color: black; 
}

p {
  font-size: 1.5em;
  margin-bottom: 1em;
  color: black; 
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  box-sizing: border-box;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.btn-primary {
  background-color: #007bff;
  color: black;
}

.btn-danger {
  background-color: #dc3545;
  color: black;
}

.btn-warning {
  background-color: #ffc107;
  color: black;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.overlay-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
