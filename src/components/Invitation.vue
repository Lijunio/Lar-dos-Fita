<template>
  <div class="container">
    <!-- Card inicial -->
    <div v-if="showIntroCard" class="intro-card">
      <p>Para uma melhor experiência...</p>
      <img src="@/assets/som.png" alt="Imagem de introdução" class="som">
      <button class="btn btn-close" @click="closeIntroCard">Fechar</button>
    </div>

    <div v-else>
      <h1>Você foi convidado para o Lar dos Fita?</h1>
      <div class="buttons">
        <button class="btn btn-primary" @click="handleInvitation('yes')">
          Sim
        </button>
        <button class="btn btn-danger" @click="handleInvitation('no')">
          Não
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import background from '@/assets/background.jpg';

export default {
  props: {
    playAudio: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      backgroundImage: `url(${background})`,
      showIntroCard: true 
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
    closeIntroCard() {
      this.showIntroCard = false; 
    },
    handleInvitation(choice) {
      this.playAudio(); // Inicia o áudio ao clicar
      if (choice === 'yes') {
        this.$router.push('/home');
      } else if (choice === 'no') {
        this.$router.push('/not-invited');
      }
    }
  }
};
</script>

<style scoped>
html,
body {
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
  font-size: 1.5em;
}

.intro-card {
  background-color: transparent; 
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}


.intro-card img {
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
}

.btn-close {
  background-color: #dc3545;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 10px;
}

h1 {
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

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

@media (max-width: 600px) {
  h1 {
    font-size: 1.5em;
  }

  button {
    padding: 8px 16px;
    font-size: 0.9em;
  }
}
</style>
