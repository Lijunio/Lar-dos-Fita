<template>
  <div class="card">
    <img src="@/assets/expulso.jpg" alt="Imagem de expulsão" />
    <p>Você foi expulso da festa!</p>
    <button @click="retry">Tentar novamente</button>
    <button @click="closePage">Fechar</button>
  </div>
</template>

<script>
export default {
  methods: {
    retry() {
      this.$router.push('/invitation');
    },
    closePage() {
      window.close();
    }
  }
};
</script>

<style scoped>
.card {
  background-color: rgba(255, 0, 0, 0.5);
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: white;
}

img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  margin: 8px;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
