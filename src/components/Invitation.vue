<template>
  <div class="container">
    <h1>Você foi convidado para o Lar dos Fita?</h1>
    <div class="buttons">
      <button class="btn btn-primary" @click="handleInvitation('yes')">Sim</button>
      <button class="btn btn-danger" @click="handleInvitation('no')">Não</button>
    </div>
  </div>
</template>

<script>
import background from '@/assets/background.jpg';

export default {
  data() {
    return {
      backgroundImage: `url(${background})`
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
  methods: {
    handleInvitation(choice) {
      if (choice === 'yes') {
        this.$router.push('/home');
      } else if (choice === 'no') {
        this.$router.push('/not-invited');
      }
    }
  },
  beforeUnmount() {
    document.body.style.backgroundImage = '';
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
